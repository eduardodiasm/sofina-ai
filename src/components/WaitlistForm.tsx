
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Preencha todos os campos obrigatórios",
        description: "Nome e email são obrigatórios para entrar na lista.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const utmParams = getUTMParams();
      
      const { error } = await supabase
        .from('waitlist_leads')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          income_range: formData.income_range || null,
          current_investments: formData.current_investments || null,
          main_challenge: formData.main_challenge || null,
          ...utmParams,
          user_agent: navigator.userAgent
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Email já cadastrado",
            description: "Este email já está na nossa lista de espera!",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
      }

      toast({
        title: "Bem-vindo à Finwise! 🎉",
        description: "Você está na nossa waitlist. Em breve entraremos em contato!",
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

  return (
    <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Nome completo *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">WhatsApp (opcional)</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label className="text-white">Faixa de renda mensal</Label>
            <Select value={formData.income_range} onValueChange={(value) => handleInputChange('income_range', value)}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6k-10k">R$ 6.000 - R$ 10.000</SelectItem>
                <SelectItem value="10k-20k">R$ 10.000 - R$ 20.000</SelectItem>
                <SelectItem value="20k-30k">R$ 20.000 - R$ 30.000</SelectItem>
                <SelectItem value="30k+">Acima de R$ 30.000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-white">Patrimônio investido atual</Label>
            <Select value={formData.current_investments} onValueChange={(value) => handleInputChange('current_investments', value)}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-10k">R$ 0 - R$ 10.000</SelectItem>
                <SelectItem value="10k-50k">R$ 10.000 - R$ 50.000</SelectItem>
                <SelectItem value="50k-100k">R$ 50.000 - R$ 100.000</SelectItem>
                <SelectItem value="100k-500k">R$ 100.000 - R$ 500.000</SelectItem>
                <SelectItem value="500k+">Acima de R$ 500.000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-white">Maior desafio atual</Label>
            <Select value={formData.main_challenge} onValueChange={(value) => handleInputChange('main_challenge', value)}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nao-sei-investir">Não sei como investir</SelectItem>
                <SelectItem value="falta-tempo">Falta de tempo</SelectItem>
                <SelectItem value="desconfianca-assessores">Desconfiança dos assessores</SelectItem>
                <SelectItem value="falta-constancia">Falta de constância</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button 
          type="submit" 
          size="lg" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 text-lg disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Cadastrando...
            </>
          ) : (
            <>
              <Users className="w-5 h-5 mr-2" />
              Garantir Meu Acesso Gratuito
            </>
          )}
        </Button>
        
        <p className="text-slate-400 text-sm text-center">
          * Ao se cadastrar, você concorda em receber comunicações da Finwise. 
          Seus dados estão seguros e você pode cancelar a qualquer momento.
        </p>
      </form>
    </Card>
  );
};

export default WaitlistForm;
