
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SessionData {
  sessionId: string;
  ipAddress?: string;
  country?: string;
  city?: string;
  region?: string;
  userAgent: string;
}

export const useSession = () => {
  const [sessionData, setSessionData] = useState<SessionData | null>(null);

  const getOrCreateSession = async () => {
    // Verificar se já existe uma sessão no localStorage
    let sessionId = localStorage.getItem('analytics_session_id');
    
    if (!sessionId) {
      // Criar nova sessão
      try {
        // Obter dados de geolocalização via IP
        const geoResponse = await fetch('https://ipapi.co/json/');
        const geoData = await geoResponse.json();
        
        const sessionPayload = {
          ip_address: geoData.ip || null,
          country: geoData.country_name || null,
          city: geoData.city || null,
          region: geoData.region || null,
          user_agent: navigator.userAgent,
        };

        console.log('[Analytics] Creating new session with geo data:', geoData);

        const { data, error } = await supabase
          .from('user_sessions')
          .insert(sessionPayload)
          .select('session_id')
          .single();

        if (error) {
          console.error('[Analytics] Error creating session:', error);
          return;
        }

        sessionId = data.session_id;
        localStorage.setItem('analytics_session_id', sessionId);
        
        setSessionData({
          sessionId,
          ipAddress: geoData.ip,
          country: geoData.country_name,
          city: geoData.city,
          region: geoData.region,
          userAgent: navigator.userAgent,
        });

        console.log('[Analytics] New session created:', sessionId);
      } catch (error) {
        console.error('[Analytics] Error getting geo data:', error);
        
        // Fallback: criar sessão sem geolocalização
        const { data, error: sessionError } = await supabase
          .from('user_sessions')
          .insert({ user_agent: navigator.userAgent })
          .select('session_id')
          .single();

        if (!sessionError) {
          sessionId = data.session_id;
          localStorage.setItem('analytics_session_id', sessionId);
          setSessionData({
            sessionId,
            userAgent: navigator.userAgent,
          });
        }
      }
    } else {
      // Usar sessão existente
      setSessionData({
        sessionId,
        userAgent: navigator.userAgent,
      });
      console.log('[Analytics] Using existing session:', sessionId);
    }
  };

  useEffect(() => {
    getOrCreateSession();
  }, []);

  return { sessionData, getOrCreateSession };
};
