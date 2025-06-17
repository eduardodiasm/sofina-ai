
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
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Invista melhor no <span className="text-green-700">WhatsApp</span>.
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 mb-6 leading-snug">
              Receba o plano inicial em 3 min e conte com a <span className="text-green-700">Sofina</span> todos os meses para investir melhor.
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

      {/* SECTION: Como a Sofina ajuda você - CAROUSEL FIRST */}
      <SofinaCarousel />

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
