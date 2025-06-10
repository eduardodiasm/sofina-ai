
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Star, Users, Shield, TrendingUp, DollarSign, BarChart3, AlertCircle, Zap, BookOpen, Clock, Heart, Brain, MessageCircle } from 'lucide-react';
import WaitlistForm from "@/components/WaitlistForm";
import HeroForm from "@/components/HeroForm";
import PersonalizedPlanExample from "@/components/PersonalizedPlanExample";
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
              src="/lovable-uploads/ce78f769-77f0-443a-ab6a-2c7ceb6b2ec1.png" 
              alt="Finwise Logo" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-slate-900">Finwise</span>
          </div>
          <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
            30 dias grátis
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Você ganha bem. <br />
              Mas seu dinheiro <span className="text-blue-900">não acompanha</span>.
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Receba um <strong className="text-blue-900">plano financeiro personalizado</strong> em 3 minutos via WhatsApp — com valores exatos, ativos específicos e acompanhamento mensal para <strong className="text-blue-900">resultados reais</strong>.
            </p>
          </div>

          {/* Hero Form */}
          <div className="mb-12">
            <HeroForm />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-600 text-sm mb-8">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-blue-900" />
              <span>Plano pronto em 3 minutos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-900" />
              <span>30 dias grátis, sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-blue-900" />
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

      {/* Exemplo de Plano Personalizado */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Exemplo de plano personalizado
            </h2>
            <p className="text-lg text-slate-600">
              Veja como seria um plano real baseado no seu perfil
            </p>
          </div>
          
          <PersonalizedPlanExample />
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-slate-900 mb-3">💡 Por que essa alocação?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium text-blue-900">Tesouro IPCA:</span>
                <span className="text-slate-600 ml-1">Proteção contra inflação e previsibilidade</span>
              </div>
              <div>
                <span className="font-medium text-blue-900">ETFs:</span>
                <span className="text-slate-600 ml-1">Crescimento no Brasil (BOVA11) e EUA (IVVB11)</span>
              </div>
              <div>
                <span className="font-medium text-blue-900">Fundo:</span>
                <span className="text-slate-600 ml-1">Equilíbrio e liquidez para emergências</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Finwise vs Assessoria Tradicional
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

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-6 text-center">Finwise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Recomendação com base em dados</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">A partir de R$39/mês, sem exigência</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Simples, direto, via WhatsApp</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
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
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 font-semibold text-sm">MC</span>
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
                    <span className="text-green-900 font-semibold text-sm">RS</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Roberto S.</div>
                    <div className="text-xs text-slate-600">Engenheiro, 35 anos</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  "Estava perdido com tantas opções. A Finwise me mostrou exatamente os 3 ativos certos para meu perfil."
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
                    <span className="text-purple-900 font-semibold text-sm">AL</span>
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

      {/* Target Audience Section - Updated */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Para quem é a Finwise?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-700">
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-blue-900 mb-2" />
                <span className="font-medium">Para quem não tem tempo para estudar investimentos</span>
              </div>
              <div className="flex flex-col items-center">
                <Heart className="w-8 h-8 text-blue-900 mb-2" />
                <span className="font-medium">Para quem não confia em assessores tradicionais</span>
              </div>
              <div className="flex flex-col items-center">
                <Brain className="w-8 h-8 text-blue-900 mb-2" />
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
                src="/lovable-uploads/ce78f769-77f0-443a-ab6a-2c7ceb6b2ec1.png" 
                alt="Finwise Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-slate-900">Finwise</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-600 text-sm mb-2">
                Seu copiloto financeiro via WhatsApp
              </p>
              <p className="text-slate-500 text-xs">
                © 2024 Finwise. Todos os direitos reservados.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-500 text-sm">
              <strong className="text-slate-600">Importante:</strong> Finwise oferece orientação educacional e não substitui aconselhamento financeiro profissional personalizado. 
              Investimentos envolvem riscos e rentabilidade passada não garante resultados futuros.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
