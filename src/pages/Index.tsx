import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Star, Users, Shield, TrendingUp, DollarSign, BarChart3, AlertCircle, Zap, BookOpen, Clock, Heart, Brain, MessageCircle } from 'lucide-react';
import WaitlistForm from "@/components/WaitlistForm";
import HeroForm from "@/components/HeroForm";
import WhatsAppChat from "@/components/WhatsAppChat";
import { useSimpleAnalytics } from "@/hooks/useSimpleAnalytics";
import { useEffect } from "react";

const Index = () => {
  const { trackPageVisit } = useSimpleAnalytics();

  useEffect(() => {
    trackPageVisit();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/fd78fa33-45f4-446a-b755-5a2c417a9d4e.png" 
              alt="Sofina Logo" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-slate-900">Sofina</span>
          </div>
          <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
            30 dias grátis
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Invista melhor no <span className="text-green-700">WhatsApp</span>.
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 mb-6 leading-snug">
            <span className="text-green-700">IA da Sofina</span> cria seu plano em 3 min e acompanha mês a mês — 30 d grátis.
            </h2>

            
          </div>

          {/* Hero Form */}
          <div className="mb-12">
            <HeroForm />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-600 text-sm mb-8">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-green-700" />
              <span>Plano pronto em 3 minutos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-700" />
              <span>30 dias grátis, sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-green-700" />
              <span>Valores e ativos específicos</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <Users className="w-4 h-4" />
            <span>+500 profissionais já na lista de espera</span>
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Section */}
      <WhatsAppChat />

      {/* Comparison */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Sofina vs Assessoria Tradicional
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-slate-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-600 mb-6 text-center">Assessoria Tradicional</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Te vendem o que dá mais comissão</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Só atende quem tem R$500k+</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Formal, engessado, cheio de jargões</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Horário comercial, demorado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-green-700 mb-6 text-center">Sofina</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Recomendação com base em dados</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">A partir de R$39/mês, sem exigência</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Simples, direto, via WhatsApp</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">24h com IA e suporte de verdade</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos simulados */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Resultados reais em 30 dias
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-semibold text-sm">MC</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Marina C.</div>
                    <div className="text-xs text-slate-600">Advogada, 29 anos</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  "Finalmente entendi onde investir meus R$ 8k/mês. O plano foi super claro e agora invisto com confiança."
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-semibold text-sm">RS</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Roberto S.</div>
                    <div className="text-xs text-slate-600">Engenheiro, 35 anos</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  "Estava perdido com tantas opções. A Sofina me mostrou exatamente os 3 ativos certos para meu perfil."
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-700 font-semibold text-sm">AL</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Ana L.</div>
                    <div className="text-xs text-slate-600">Consultora, 31 anos</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  "Os lembretes no WhatsApp me ajudaram a criar o hábito. Já investi 3 meses seguidos pela primeira vez!"
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Para quem é a Sofina?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-700">
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-green-700 mb-2" />
                <span className="font-medium">Para quem não tem tempo para estudar investimentos</span>
              </div>
              <div className="flex flex-col items-center">
                <Heart className="w-8 h-8 text-green-700 mb-2" />
                <span className="font-medium">Para quem não confia em assessores tradicionais</span>
              </div>
              <div className="flex flex-col items-center">
                <Brain className="w-8 h-8 text-green-700 mb-2" />
                <span className="font-medium">Para quem não quer ser um expert em finanças</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Comece seus 30 dias grátis agora
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Preencha em 1 minuto e receba seu plano financeiro personalizado no WhatsApp.
          </p>
          
          <WaitlistForm />
          
          <div className="mt-8 flex items-center justify-center text-slate-500 text-sm">
            <Shield className="w-4 h-4 mr-2" />
            <span>30 dias grátis • Cancele quando quiser • Sem compromisso</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/fd78fa33-45f4-446a-b755-5a2c417a9d4e.png" 
                alt="Sofina Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-slate-900">Sofina</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-600 text-sm mb-2">
                Seu copiloto financeiro via WhatsApp
              </p>
              <p className="text-slate-500 text-xs">
                © 2024 Sofina. Todos os direitos reservados.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-500 text-sm">
              <strong className="text-slate-600">Importante:</strong> Sofina oferece orientação educacional e não substitui aconselhamento financeiro profissional personalizado. 
              Investimentos envolvem riscos e rentabilidade passada não garante resultados futuros.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
