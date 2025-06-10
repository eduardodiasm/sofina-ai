
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useSimpleAnalytics } from "@/hooks/useSimpleAnalytics";

interface WaitlistFormData {
  name: string;
  email: string;
  phone: string;
  income_range: string;
  current_investments: string;
  main_challenge: string;
}

const WaitlistForm = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    email: '',
    phone: '',
    income_range: '',
    current_investments: '',
    main_challenge: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { trackCTAClick } = useSimpleAnalytics();

  const handleInputChange = (field: keyof WaitlistFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
      trackCTAClick("Form Submission - Waitlist");
      
      const { error } = await supabase
        .from('waitlist_leads')
        .insert({
          name: formData.name,
          email: formData.email || null,
          phone: formData.phone,
          income_range: formData.income_range || null,
          current_investments: formData.current_investments || null,
          main_challenge: formData.main_challenge || null,
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
        email: '',
        phone: '',
        income_range: '',
        current_investments: '',
        main_challenge: ''
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

  const handleCTAClick = () => {
    trackCTAClick("Quero meu plano no WhatsApp");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm" id="waitlist-form">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">Seu nome ou apelido *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Como gostaria de ser chamado?"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="border-gray-300"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">Seu WhatsApp com DDD *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="border-gray-300"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700">E-mail (opcional)</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="border-gray-300"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-gray-700 text-sm font-medium">Informações opcionais (ajudam a personalizar sua experiência):</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-gray-600 text-sm">Qual sua renda mensal média hoje?</Label>
              <Select value={formData.income_range} onValueChange={(value) => handleInputChange('income_range', value)}>
                <SelectTrigger className="border-gray-300">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6k-8k">R$ 6k - R$ 8k</SelectItem>
                  <SelectItem value="8k-12k">R$ 8k - R$ 12k</SelectItem>
                  <SelectItem value="12k-20k">R$ 12k - R$ 20k</SelectItem>
                  <SelectItem value="20k+">+ R$ 20k</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-600 text-sm">Você já investiu quanto até agora?</Label>
              <Select value={formData.current_investments} onValueChange={(value) => handleInputChange('current_investments', value)}>
                <SelectTrigger className="border-gray-300">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nao-invisto">Não invisto</SelectItem>
                  <SelectItem value="0-10k">Menos de R$ 10k</SelectItem>
                  <SelectItem value="10k-50k">R$ 10k - R$ 50k</SelectItem>
                  <SelectItem value="50k-500k">R$ 50k - R$ 500k</SelectItem>
                  <SelectItem value="500k+">+ R$ 500k</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-600 text-sm">O que mais trava sua evolução financeira hoje?</Label>
              <Select value={formData.main_challenge} onValueChange={(value) => handleInputChange('main_challenge', value)}>
                <SelectTrigger className="border-gray-300">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="falta-tempo">Falta de tempo</SelectItem>
                  <SelectItem value="falta-clareza">Falta de clareza</SelectItem>
                  <SelectItem value="medo-perder">Medo de perder dinheiro</SelectItem>
                  <SelectItem value="dificuldade-constancia">Dificuldade em investir todo mês</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <Button 
          type="submit" 
          size="lg" 
          disabled={isSubmitting}
          onClick={handleCTAClick}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 text-lg disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Cadastrando...
            </>
          ) : (
            <>
              <Phone className="w-5 h-5 mr-2" />
              Quero meu plano no WhatsApp
            </>
          )}
        </Button>
        
        <p className="text-gray-500 text-sm text-center">
          * Ao se cadastrar, você concorda em receber comunicações da Finwise via WhatsApp. 
          Seus dados estão seguros e você pode cancelar a qualquer momento.
        </p>
      </form>
    </div>
  );
};

export default WaitlistForm;
