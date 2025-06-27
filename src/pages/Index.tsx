
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Users, Shield, TrendingUp, DollarSign, BarChart3, AlertCircle, Zap, BookOpen, Clock, Heart, Brain, MessageCircle, Check, X, Handshake, ShieldCheck } from 'lucide-react';
import HeroForm from "@/components/HeroForm";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { useSimpleAnalytics } from "@/hooks/useSimpleAnalytics";
import { useEffect } from "react";
import SofinaCarousel from "@/components/SofinaCarousel";
import BenefitsSection from "@/components/BenefitsSection";

const Index = () => {
  const { trackPageVisit } = useSimpleAnalytics();

  useEffect(() => {
    trackPageVisit();
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden font-manrope">
      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/fd78fa33-45f4-446a-b755-5a2c417a9d4e.png" 
              alt="Sofina Logo" 
              className="w-10 h-10"
            />
            <span className="text-xl md:text-2xl font-bold text-slate-900">Sofina</span>
          </div>
          <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50 font-medium">
            30 dias grátis
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-lg md:text-xl text-green-600 font-medium mb-4">
              Conheça a Sofina
            </p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
              O primeiro private banker <br className="hidden sm:block" />
              por <span className="text-green-600">WhatsApp</span> do Brasil.
            </h1>
            
            <h2 id="hero-subtitle" className="text-lg md:text-xl font-medium text-slate-700 mb-4 md:mb-6 leading-relaxed max-w-3xl mx-auto">
              Seu copiloto financeiro 24/7, sem comissão e sem economês.
            </h2>

            {/* TRUST-BAR: Powered by OpenAI + CFA Audit */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-4 mb-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-green-600" />
                <span>Powered by <strong className="text-slate-700 font-medium">OpenAI Enterprise</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span>Auditoria <strong className="text-slate-700 font-medium">CFA®</strong></span>
              </div>
            </div>
            
          </div>

          {/* Hero Form - Formulário Principal */}
          <section id="form" className="mb-8 md:mb-12">
            <HeroForm />
          </section>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 text-slate-600 text-sm mb-6 md:mb-8">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-green-600" />
              <span>Plano pronto em <span className="font-medium">3 min</span></span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span><span className="font-medium">30 d</span> grátis, sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-green-600" />
              <span>Valores e ativos específicos</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <Users className="w-4 h-4" />
            <span><span className="font-medium">+500</span> profissionais já na lista de espera</span>
          </div>
        </div>
      </section>

      {/* SECTION: Como a Sofina ajuda você - CAROUSEL FIRST */}
      <SofinaCarousel />

      {/* SECTION: Benefícios da Sofina - NEW */}
      <BenefitsSection />

      {/* SECTION: Antes vs Depois - IMPROVED VERSION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 max-w-4xl mx-auto leading-tight">
              Como você se sente hoje vs. depois de <span className="font-semibold">30 dias</span> com a Sofina
            </h3>
            <p className="text-lg md:text-xl font-medium text-slate-600 leading-relaxed">
              A diferença de ter um copiloto financeiro do seu lado.
            </p>
          </div>
          
          {/* GRID - Duas colunas bem definidas */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
            {/* COLUNA ESQUERDA - ANTES */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-red-200">
              <div className="text-center mb-6">
                <h4 className="text-lg md:text-xl font-semibold text-slate-700 flex items-center justify-center gap-2">
                  😩 <span>Antes da Sofina</span>
                </h4>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Não sei se guardo ou gasto</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Dinheiro parado rendendo <span className="font-medium">&lt;2% ao ano</span></span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Medo de ser enrolado por banco ou corretora</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Horas perdidas em vídeos e planilhas</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 leading-relaxed">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Insegurança total sobre como investir</span>
                </li>
              </ul>
            </div>

            {/* COLUNA DIREITA - DEPOIS */}
            <div className="bg-green-50 rounded-xl shadow-md p-6 md:p-8 border-l-4 border-green-400">
              <div className="text-center mb-6">
                <h4 className="text-lg md:text-xl font-semibold text-green-800 flex items-center justify-center gap-2">
                  🚀 <span>Depois da Sofina</span>
                </h4>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Plano claro de quanto guardar e onde investir</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Sugestões semanais pelo WhatsApp</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>IA imparcial, sem comissão ou conflito de interesse</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Só <span className="font-medium">5 minutos</span> por semana para manter tudo em dia</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Confiança e constância nos seus aportes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA INTEGRADO */}
          <div className="text-center bg-white rounded-xl shadow-md p-6 md:p-8 max-w-2xl mx-auto">
            <div className="mb-6">
              <h4 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2 leading-tight">
                🎯 Pronto para sair do modo "dinheiro parado"?
              </h4>
              <p className="text-lg font-medium text-slate-600 leading-relaxed">
                Veja seu plano financeiro em <span className="font-semibold">3 minutos</span>, grátis por <span className="font-semibold">30 dias</span>.
              </p>
            </div>
            
            <Button 
              onClick={scrollToForm}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              Quero meu plano agora
            </Button>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="px-4 sm:px-6 py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 leading-tight">Para quem é a Sofina?</h3>
          </div>
          
          <ul className="space-y-6 max-w-xl mx-auto text-slate-700">
            <li className="flex gap-3 leading-relaxed">
              <Clock className="w-6 h-6 text-green-600 flex-shrink-0" aria-hidden="true" />
              <span><strong className="font-medium">Falta de tempo:</strong> Não gaste horas em vídeos de finanças — a IA faz tudo por você.</span>
            </li>
            <li className="flex gap-3 leading-relaxed">
              <Handshake className="w-6 h-6 text-green-600 flex-shrink-0" aria-hidden="true" />
              <span><strong className="font-medium">Falta de confiança:</strong> <span className="font-medium">Zero</span> metas de venda, <span className="font-medium">zero</span> comissão escondida.</span>
            </li>
            <li className="flex gap-3 leading-relaxed">
              <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" aria-hidden="true" />
              <span><strong className="font-medium">Medo de errar:</strong> Planos auditados por <span className="font-medium">CFA®</span> — sem termos complicados.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-12 bg-gray-50 border-t border-slate-200">
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
            <p className="text-slate-500 text-sm leading-relaxed">
              <strong className="text-slate-600 font-medium">Importante:</strong> Sofina oferece orientação educacional e não substitui aconselhamento financeiro profissional personalizado. 
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
