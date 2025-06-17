
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Users, Shield, TrendingUp, DollarSign, BarChart3, AlertCircle, Zap, BookOpen, Clock, Heart, Brain, MessageCircle, Check, X, Handshake, ShieldCheck } from 'lucide-react';
import HeroForm from "@/components/HeroForm";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { useSimpleAnalytics } from "@/hooks/useSimpleAnalytics";
import { useEffect } from "react";
import SofinaCarousel from "@/components/SofinaCarousel";

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
            <p className="text-lg md:text-xl text-green-700 font-medium mb-4">
              Conheça a Sofina
            </p>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              O primeiro private banker <br className="hidden sm:block" />
              por <span className="text-green-700">WhatsApp</span> do Brasil.
            </h1>
            
            <h2 id="copiloto-text" className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 mb-6 leading-snug">
              Seu copiloto financeiro 24/7, sem comissão e sem economês.
            </h2>

            {/* TRUST-BAR: Powered by OpenAI + CFA Audit */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4 mb-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-green-700" />
                <span>Powered by <strong className="text-slate-700">OpenAI Enterprise</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-700" />
                <span>Auditoria <strong className="text-slate-700">CFA®</strong></span>
              </div>
            </div>
            
          </div>

          {/* Hero Form - Formulário Principal */}
          <section id="form" className="mb-12">
            <HeroForm />
          </section>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-600 text-sm mb-8">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-green-700" />
              <span>Plano pronto em 3 min</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-700" />
              <span>30 d grátis, sem compromisso</span>
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

      {/* SECTION: Como a Sofina ajuda você - MODERNIZED VERSION */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-green-50/30 to-blue-50/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Como funciona
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Como a Sofina ajuda você
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Sua jornada financeira simplificada em 3 passos
            </p>
          </div>

          <div className="grid gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 order-2 md:order-1">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      3 minutos
                    </Badge>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    Conte sobre você
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Responda perguntas simples sobre sua situação financeira atual, objetivos e perfil de risco.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      Renda e gastos mensais
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      Objetivos financeiros
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      Perfil de investidor
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-xl opacity-20"></div>
                  <img 
                    src="/lovable-uploads/2bde72de-edb6-4322-9798-5845661bc178.png"
                    alt="Formulário de perfil financeiro"
                    className="relative w-48 h-48 md:w-64 md:h-64 mx-auto object-contain rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl blur-xl opacity-20"></div>
                  <img 
                    src="/lovable-uploads/8122a502-d622-4ffb-ad19-6aefca60c39b.png"
                    alt="Plano de investimentos personalizado"
                    className="relative w-48 h-48 md:w-64 md:h-64 mx-auto object-contain rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                      Instantâneo
                    </Badge>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    Receba seu plano
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    A IA analisa seu perfil e cria um plano de investimentos personalizado com produtos específicos.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-600" />
                      Produtos específicos recomendados
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-600" />
                      Distribuição de ativos otimizada
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-600" />
                      Projeções de rendimento
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 order-2 md:order-1">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                      24/7
                    </Badge>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    Acompanhamento contínuo
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Receba lembretes, análises e ajustes via WhatsApp sempre que precisar.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600" />
                      Lembretes de investimento
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600" />
                      Análises de mercado
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600" />
                      Rebalanceamento automático
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-500 rounded-3xl blur-xl opacity-20"></div>
                  <img 
                    src="/lovable-uploads/ce78f769-77f0-443a-ab6a-2c7ceb6b2ec1.png"
                    alt="Acompanhamento via WhatsApp"
                    className="relative w-48 h-48 md:w-64 md:h-64 mx-auto object-contain rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Sem a Sofina x Com a Sofina - MOVED AFTER CAROUSEL */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Como você se sente hoje <br className="md:hidden" />
            vs. depois de 30&nbsp;dias com a Sofina
          </h3>
          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* EMOÇÃO 1 */}
            <div className="bg-white rounded-2xl shadow p-5 space-y-2">
              <p className="text-sm font-semibold text-slate-600">🙁 <span className="align-middle">Sem Sofina</span></p>
              <p className="text-slate-700 text-sm leading-snug">
                Não sei se guardo ou gasto; planilhas me assustam.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl shadow p-5 space-y-2">
              <p className="text-sm font-semibold text-green-700">🙂 <span className="align-middle">Com Sofina</span></p>
              <p className="text-slate-700 text-sm leading-snug">
                <strong>Plano de 3 min</strong>: quanto guardar, onde investir, revisões mensais.
              </p>
            </div>
            {/* EMOÇÃO 2 */}
            <div className="bg-white rounded-2xl shadow p-5 space-y-2">
              <p className="text-sm font-semibold text-slate-600">🙁</p>
              <p className="text-slate-700 text-sm leading-snug">
                Horas perdido em vídeos de finanças.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl shadow p-5 space-y-2">
              <p className="text-sm font-semibold text-green-700">🙂</p>
              <p className="text-slate-700 text-sm leading-snug">
                Só 5 min/semana respondendo WhatsApp.
              </p>
            </div>
            {/* EMOÇÃO 3 */}
            <div className="bg-white rounded-2xl shadow p-5 space-y-2">
              <p className="text-sm font-semibold text-slate-600">🙁</p>
              <p className="text-slate-700 text-sm leading-snug">
                Medo de ser enganado por banco/corretora.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl shadow p-5 space-y-2">
              <p className="text-sm font-semibold text-green-700">🙂</p>
              <p className="text-slate-700 text-sm leading-snug">
                IA imparcial, <strong>zero comissão</strong>.
              </p>
            </div>
            {/* EMOÇÃO 4 */}
            <div className="bg-white rounded-2xl shadow p-5 space-y-2">
              <p className="text-sm font-semibold text-slate-600">🙁</p>
              <p className="text-slate-700 text-sm leading-snug">
                Dinheiro parado rendendo &lt; 2&nbsp;% a.a.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl shadow p-5 space-y-2">
              <p className="text-sm font-semibold text-green-700">🙂</p>
              <p className="text-slate-700 text-sm leading-snug">
                Rumo à independência <strong>15&nbsp;anos mais cedo</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos simulados - REMOVED STARS */}
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
                <p className="text-sm text-slate-600">
                  "Finalmente entendi onde investir meus R$ 8k/mês. O plano foi super claro e agora invisto com confiança."
                </p>
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
                <p className="text-sm text-slate-600">
                  "Estava perdido com tantas opções. A Sofina me mostrou exatamente os 3 ativos certos para meu perfil."
                </p>
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
                <p className="text-sm text-slate-600">
                  "Os lembretes no WhatsApp me ajudaram a criar o hábito. Já investi 3 meses seguidos pela primeira vez!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Para quem é a Sofina?</h3>
          </div>
          
          <ul className="space-y-6 max-w-xl mx-auto text-slate-700">
            <li className="flex gap-3">
              <Clock className="w-6 h-6 text-green-600 flex-shrink-0" aria-hidden="true" />
              <span><strong>Falta de tempo:</strong> Não gaste horas em vídeos de finanças — a IA faz tudo por você.</span>
            </li>
            <li className="flex gap-3">
              <Handshake className="w-6 h-6 text-green-600 flex-shrink-0" aria-hidden="true" />
              <span><strong>Falta de confiança:</strong> Zero metas de venda, zero comissão escondida.</span>
            </li>
            <li className="flex gap-3">
              <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" aria-hidden="true" />
              <span><strong>Medo de errar:</strong> Planos auditados por CFA® — sem termos complicados.</span>
            </li>
          </ul>
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

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
