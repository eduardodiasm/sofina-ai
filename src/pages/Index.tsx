
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Shield, TrendingUp, DollarSign, BarChart3, Zap, Brain, MessageCircle, Check, X, Clock, Handshake, ShieldCheck, Target, Bell, Heart } from 'lucide-react';
import HeroForm from "@/components/HeroForm";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { useSimpleAnalytics } from "@/hooks/useSimpleAnalytics";
import { useEffect } from "react";
import HowItWorksTimeline from "@/components/HowItWorksTimeline";
import WhatsAppCarousel from "@/components/WhatsAppCarousel";
import BenefitsSection from "@/components/BenefitsSection";
import EmotionalCTA from "@/components/EmotionalCTA";

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
      <header className="relative z-10 px-6 md:px-10 py-8">
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

      {/* Hero Section - Improved */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-base md:text-lg text-green-600 font-medium mb-4">
              Conheça a Sofina
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-[1.2]">
              O primeiro private banker <br className="hidden sm:block" />
              por <span className="text-green-600">WhatsApp</span> do Brasil.
            </h1>
            
            <h2 id="hero-subtitle" className="text-lg md:text-xl font-medium text-slate-700 mb-4 md:mb-6 leading-[1.5] max-w-[800px] mx-auto">
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

          {/* Hero Benefits Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-white rounded-xl p-4 shadow-md border border-green-100 text-center">
              <Zap className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-slate-700">Plano pronto em <strong>3 min</strong></span>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border border-green-100 text-center">
              <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-slate-700"><strong>30 d</strong> grátis, sem compromisso</span>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border border-green-100 text-center">
              <BarChart3 className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-slate-700">Valores e ativos específicos</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <Users className="w-4 h-4" />
            <span><span className="font-medium">+500</span> profissionais já na lista de espera</span>
          </div>
        </div>
      </section>

      {/* SECTION: Como funciona - NEW TIMELINE */}
      <HowItWorksTimeline />

      {/* SECTION: WhatsApp Carousel - NEW */}
      <WhatsAppCarousel />

      {/* SECTION: Benefícios da Sofina - IMPROVED */}
      <BenefitsSection />

      {/* SECTION: Antes vs Depois - IMPROVED VERSION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 max-w-[800px] mx-auto leading-[1.3]">
              Como você se sente hoje vs. depois de <span className="font-semibold">30 dias</span> com a Sofina
            </h3>
            <p className="text-base font-medium text-slate-600 leading-[1.5] max-w-[800px] mx-auto">
              A diferença de ter um copiloto financeiro do seu lado.
            </p>
          </div>
          
          {/* GRID - Duas colunas bem definidas */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
            {/* COLUNA ESQUERDA - ANTES */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-red-300 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-red-800 flex items-center justify-center gap-2">
                  😩 <span>Antes da Sofina</span>
                </h4>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700 leading-[1.5] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Não sei se guardo ou gasto</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 leading-[1.5] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Dinheiro parado rendendo <span className="font-medium">&lt;2% ao ano</span></span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 leading-[1.5] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Medo de ser enrolado por banco ou corretora</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 leading-[1.5] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Horas perdidas em vídeos e planilhas</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 leading-[1.5] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Insegurança total sobre como investir</span>
                </li>
              </ul>
            </div>

            {/* COLUNA DIREITA - DEPOIS */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-green-400 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-green-800 flex items-center justify-center gap-2">
                  🚀 <span>Depois da Sofina</span>
                </h4>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700 leading-[1.5] text-base">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Plano claro de quanto guardar e onde investir</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 leading-[1.5] text-base">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Sugestões semanais pelo WhatsApp</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 leading-[1.5] text-base">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>IA imparcial, sem comissão ou conflito de interesse</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 leading-[1.5] text-base">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Só <span className="font-medium">5 minutos</span> por semana para manter tudo em dia</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 leading-[1.5] text-base">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Confiança e constância nos seus aportes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA INTEGRADO */}
          <div className="text-center bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto border border-gray-100">
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-2 leading-[1.3]">
                🎯 Pronto para sair do modo "dinheiro parado"?
              </h4>
              <p className="text-base font-medium text-slate-600 leading-[1.5] max-w-[800px] mx-auto">
                Veja seu plano financeiro em <span className="font-semibold">3 minutos</span>, grátis por <span className="font-semibold">30 dias</span>.
              </p>
            </div>
            
            <Button 
              onClick={scrollToForm}
              className="bg-green-600 hover:bg-green-700 text-white text-base py-3 px-6 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Quero meu plano agora
            </Button>
          </div>
        </div>
      </section>

      {/* PARA QUEM É - IMPROVED WITH CARDS */}
      <section className="px-6 md:px-10 py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 leading-[1.3]">Para quem é a Sofina?</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Falta de tempo</h4>
              <p className="text-slate-600 text-sm leading-[1.5]">
                Não gaste horas em vídeos de finanças — a IA faz tudo por você.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Falta de confiança</h4>
              <p className="text-slate-600 text-sm leading-[1.5]">
                <strong>Zero</strong> metas de venda, <strong>zero</strong> comissão escondida.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Medo de errar</h4>
              <p className="text-slate-600 text-sm leading-[1.5]">
                Planos auditados por <strong>CFA®</strong> — sem termos complicados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONAL CTA - NEW */}
      <EmotionalCTA onScrollToForm={scrollToForm} />

      {/* Footer */}
      <footer className="px-6 md:px-10 py-12 bg-gray-50 border-t border-slate-200">
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
            <p className="text-slate-500 text-sm leading-[1.5] max-w-[800px] mx-auto">
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
