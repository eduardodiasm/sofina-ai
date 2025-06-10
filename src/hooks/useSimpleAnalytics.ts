
import { supabase } from '@/integrations/supabase/client';

export const useSimpleAnalytics = () => {
  const trackPageVisit = async () => {
    console.log('[Analytics] Tracking page visit');
    
    try {
      await supabase.from('page_visits').insert({});
      console.log('[Analytics] Page visit tracked successfully');
    } catch (error) {
      console.error('[Analytics] Error tracking page visit:', error);
    }
  };

  const trackCTAClick = async (ctaName: string) => {
    console.log(`[Analytics] Tracking CTA click: ${ctaName}`);
    
    try {
      await supabase.from('simple_cta_clicks').insert({
        cta_name: ctaName
      });
      console.log(`[Analytics] CTA click tracked successfully: ${ctaName}`);
    } catch (error) {
      console.error('[Analytics] Error tracking CTA click:', error);
    }
  };

  return {
    trackPageVisit,
    trackCTAClick
  };
};
