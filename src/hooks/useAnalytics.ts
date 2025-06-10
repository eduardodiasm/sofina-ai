
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useSession } from './useSession';

export const useAnalytics = () => {
  const { sessionData } = useSession();

  const trackPageView = async (page: string) => {
    if (!sessionData) return;

    console.log(`[Analytics] Page view: ${page}`);
    
    try {
      await supabase.from('page_views').insert({
        session_id: sessionData.sessionId,
        page_path: page,
        referrer: document.referrer || null,
      });
      
      console.log(`[Analytics] Page view saved to database: ${page}`);
    } catch (error) {
      console.error('[Analytics] Error saving page view:', error);
    }
  };

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    console.log(`[Analytics] Event: ${eventName}`, properties);
  };

  const trackCTAClick = async (ctaName: string, location: string) => {
    if (!sessionData) return;

    console.log(`[Analytics] CTA clicked: ${ctaName} at ${location}`);
    
    try {
      await supabase.from('cta_clicks').insert({
        session_id: sessionData.sessionId,
        cta_name: ctaName,
        cta_location: location,
        page_path: window.location.pathname,
      });
      
      console.log(`[Analytics] CTA click saved to database: ${ctaName}`);
    } catch (error) {
      console.error('[Analytics] Error saving CTA click:', error);
    }

    trackEvent('CTA_CLICKED', {
      cta_name: ctaName,
      location: location,
      timestamp: new Date().toISOString()
    });
  };

  const trackFormSubmission = async (formData: any) => {
    if (!sessionData) return;

    console.log('[Analytics] Form submitted:', formData);
    
    try {
      // Marcar conversão nos cliques de CTA da sessão atual
      await supabase
        .from('cta_clicks')
        .update({ converted: true })
        .eq('session_id', sessionData.sessionId)
        .eq('converted', false);
      
      console.log('[Analytics] Form submission conversion tracked');
    } catch (error) {
      console.error('[Analytics] Error tracking conversion:', error);
    }

    trackEvent('FORM_SUBMITTED', {
      has_phone: !!formData.phone,
      has_email: !!formData.email,
      has_income_range: !!formData.income_range,
      has_current_investments: !!formData.current_investments,
      has_main_challenge: !!formData.main_challenge,
      timestamp: new Date().toISOString()
    });
  };

  // Track page view automaticamente quando a página carrega
  useEffect(() => {
    if (sessionData) {
      trackPageView(window.location.pathname);
    }
  }, [sessionData]);

  return {
    trackPageView,
    trackEvent,
    trackCTAClick,
    trackFormSubmission
  };
};
