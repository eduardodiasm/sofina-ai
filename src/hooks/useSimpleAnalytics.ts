
import { supabase } from '@/integrations/supabase/client';

export const useSimpleAnalytics = () => {
  const trackPageVisit = async () => {
    console.log('[Analytics] Page visit tracked (simplified)');
    // Simplified tracking - just log for now since we only have waitlist_leads table
  };

  const trackCTAClick = async (ctaName: string) => {
    console.log(`[Analytics] CTA click tracked: ${ctaName}`);
    // Simplified tracking - just log for now since we only have waitlist_leads table
  };

  return {
    trackPageVisit,
    trackCTAClick
  };
};
