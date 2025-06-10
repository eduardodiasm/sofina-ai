
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Phone, TrendingUp, Shield, Clock, Users, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useSimpleAnalytics } from "@/hooks/useSimpleAnalytics";
import WaitlistForm from "@/components/WaitlistForm";
import PersonalizedPlanExample from "@/components/PersonalizedPlanExample";
import ChatPreview from "@/components/ChatPreview";

interface HeroFormData {
  name: string;
  phone: string;
}

const Index = () => {
  const [heroFormData, setHeroFormData] = useState<HeroFormData>({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { trackPageVisit, trackCTAClick } = useSimpleAnalytics();

  useEffect(() => {
    trackPageVisit();
  }, [trackPageVisit]);

  const handleHeroInputChange = (field: keyof HeroFormData, value: string) => {
    setHeroFormData(prev => ({ ...prev, [field]: value }));
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

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!heroFormData.name || !heroFormData.phone) {
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
      
      trackCTAClick("Hero Form Submission");
      
      const { error } = await supabase
        .from('waitlist_leads')
        .insert({
          name: heroFormData.name,
          email: null,
          phone: heroFormData.phone,
          income_range: null,
          current_investments: null,
          main_challenge: null,
          ...utmParams,
          user_agent: navigator.userAgent
        });

      if (error) {
        if (error.code === '23505') {
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

      setHeroFormData({
        name: '',
        phone: ''
      });

      // Scroll to the example section
      document.getElementById('exemplo-plano')?.scrollIntoView({ behavior: 'smooth' });

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
    trackCTAClick("Hero CTA - Começar agora");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Seu planejamento financeiro <span className="text-blue-600">personalizado</span> no WhatsApp
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Descubra como investir seu dinheiro de forma inteligente com um plano feito especialmente para o seu perfil e objetivos.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
              <form onSubmit={handleHeroSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hero-name" className="text-gray-700">Seu nome *</Label>
                    <Input
                      id="hero-name"
                      type="text"
                      placeholder="Como gostaria de ser chamado?"
                      value={heroFormData.name}
                      onChange={(e) => handleHeroInputChange('name', e.target.value)}
                      className="border-gray-300"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="hero-phone" className="text-gray-700">Seu WhatsApp *</Label>
                    <Input
                      id="hero-phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={heroFormData.phone}
                      onChange={(e) => handleHeroInputChange('phone', e.target.value)}
                      className="border-gray-300"
                      required
                    />
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
                      Começar agora
                    </>
                  )}
                </Button>
                
                <p className="text-gray-500 text-sm text-center">
                  * Ao se cadastrar, você concorda em receber comunicações da Finwise via WhatsApp. 
                  Seus dados estão seguros e você pode cancelar a qualquer momento.
                </p>
              </form>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                100% Gratuito
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Sem compromisso
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Personalizado para você
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <ChatPreview />
          </div>
        </div>
      </div>

      {/* Exemplo de Plano Personalizado */}
      <PersonalizedPlanExample />

      {/* Waitlist Form Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pronto para começar?
            </h2>
            <p className="text-xl text-gray-600">
              Entre na nossa lista de espera e seja um dos primeiros a receber seu plano personalizado no WhatsApp.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Junte-se a milhares de brasileiros que já confiam na Finwise
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">+10.000 usuários</h3>
                <p className="text-gray-600">Brasileiros já descobriram como investir melhor</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">35% de retorno médio</h3>
                <p className="text-gray-600">Nossos usuários superam a Selic consistentemente</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">100% seguro</h3>
                <p className="text-gray-600">Seus dados protegidos e investimentos regulamentados</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-blue-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Não deixe seu dinheiro parado
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Comece hoje mesmo a construir sua independência financeira com um plano feito especialmente para você.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-4 px-8 text-lg"
              onClick={() => {
                trackCTAClick("Final CTA");
                document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Quero meu plano gratuito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
