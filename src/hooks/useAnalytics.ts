
import { useEffect } from 'react';

export const useAnalytics = () => {
  const trackPageView = (page: string) => {
    console.log(`[Analytics] Page view: ${page}`);
    // Aqui você pode integrar com Google Analytics, Mixpanel, etc.
  };

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    console.log(`[Analytics] Event: ${eventName}`, properties);
    // Aqui você pode integrar com sua ferramenta de analytics
  };

  const trackCTAClick = (ctaName: string, location: string) => {
    trackEvent('CTA_CLICKED', {
      cta_name: ctaName,
      location: location,
      timestamp: new Date().toISOString()
    });
  };

  const trackFormSubmission = (formData: any) => {
    trackEvent('FORM_SUBMITTED', {
      has_phone: !!formData.phone,
      has_email: !!formData.email,
      has_income_range: !!formData.income_range,
      has_current_investments: !!formData.current_investments,
      has_main_challenge: !!formData.main_challenge,
      timestamp: new Date().toISOString()
    });
  };

  return {
    trackPageView,
    trackEvent,
    trackCTAClick,
    trackFormSubmission
  };
};
