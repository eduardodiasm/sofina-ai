
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useSimpleAnalytics } from "@/hooks/useSimpleAnalytics";

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { trackCTAClick } = useSimpleAnalytics();

  const getUTMParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_term: urlParams.get('utm_term'),
      utm_content: urlParams.get('utm_content')
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Preencha os campos obrigatórios",
        description: "Nome e WhatsApp são obrigatórios para entrar na lista.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const utmParams = getUTMParams();
      
      // Track form submission
      trackCTAClick("Form Submission - Hero");
      
      const { error } = await supabase
        .from('waitlist_leads')
        .insert({
          name: formData.name,
          email: null,
          phone: formData.phone,
          income_range: null,
          current_investments: null,
          main_challenge: null,
          ...utmParams,
          user_agent: navigator.userAgent
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "WhatsApp já cadastrado",
            description: "Este WhatsApp já está na nossa lista de espera!",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
      }

      toast({
        title: "Bem-vindo à Finwise! 🎉",
        description: "Você está na nossa waitlist. Em breve entraremos em contato via WhatsApp!",
      });

      // Reset form
      setFormData({
        name: '',
        phone: ''
      });

    } catch (error) {
      console.error('Erro ao salvar lead:', error);
      toast({
        title: "Erro ao processar cadastro",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="hero-name" className="text-gray-700">Seu nome</Label>
          <Input
            id="hero-name"
            type="text"
            placeholder="Como gostaria de ser chamado?"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="border-gray-300"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="hero-phone" className="text-gray-700">Seu WhatsApp</Label>
          <Input
            id="hero-phone"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="border-gray-300"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          size="lg" 
          disabled={isSubmitting}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 text-base disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Phone className="w-5 h-5 mr-2" />
              Quero meu plano no WhatsApp
            </>
          )}
        </Button>
        
      </form>
    </div>
  );
};

export default HeroForm;
