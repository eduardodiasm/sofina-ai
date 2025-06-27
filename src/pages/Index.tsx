
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Users, Shield, TrendingUp, DollarSign, BarChart3, AlertCircle, Zap, BookOpen, Clock, Heart, Brain, MessageCircle, Check, X, Handshake, ShieldCheck, Rocket, Vault, Calendar, PiggyBank } from 'lucide-react';
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
    <div className="min-h-screen bg-white overflow-x-hidden font-manrope">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-white to-emerald-50/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.03),transparent_50%)] pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 px-6 md:px-10 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <img 
                src="/lovable-uploads/fd78fa33-45f4-446a-b755-5a2c417a9d4e.png" 
                alt="Sofina Logo" 
                className="w-7 h-7"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-slate-900">Sofina</span>
          </div>
          <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50 font-medium shadow-sm hover:shadow-md transition-shadow">
            30 dias grátis
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-base md:text-lg text-green-600 font-medium mb-6">
              Conheça a Sofina
            </p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-[1.2]">
              O primeiro private banker <br className="hidden sm:block" />
              por <span className="text-green-600">WhatsApp</span> do Brasil.
            </h1>
            
            <h2 id="hero-subtitle" className="text-base md:text-lg font-medium text-slate-700 mb-6 md:mb-8 leading-[1.6] max-w-[800px] mx-auto">
              Seu copiloto financeiro 24/7, sem comissão e sem economês.
            </h2>

            {/* Hero Visual Elements */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-6 mb-8">
              <div className="flex flex-col items-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-3 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <PiggyBank className="h-7 w-7 text-green-600" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-slate-700">Reserva de Emergência</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-3 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <Rocket className="h-7 w-7 text-green-600" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-slate-700">Crescimento</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-3 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <BarChart3 className="h-7 w-7 text-green-600" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-slate-700">Acompanhamento</span>
              </div>
            </div>

            {/* TRUST-BAR: Powered by OpenAI + CFA Audit */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 mb-8 text-sm text-slate-600">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-gray-100/50">
                <Brain className="h-5 w-5 text-green-600" />
                <span>Powered by <strong className="text-slate-700 font-medium">OpenAI Enterprise</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-gray-100/50">
                <Shield className="h-5 w-5 text-green-600" />
                <span>Auditoria <strong className="text-slate-700 font-medium">CFA®</strong></span>
              </div>
            </div>
            
          </div>

          {/* Hero Form - Formulário Principal */}
          <section id="form" className="mb-10 md:mb-14">
            <HeroForm />
          </section>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 text-slate-600 text-sm mb-8 md:mb-10">
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm">
              <Zap className="w-4 h-4 text-green-600" />
              <span>Plano pronto em <span className="font-medium">3 min</span></span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm">
              <Shield className="w-4 h-4 text-green-600" />
              <span><span className="font-medium">30 d</span> grátis, sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm">
              <BarChart3 className="w-4 h-4 text-green-600" />
              <span>Valores e ativos específicos</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm bg-white/40 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm border border-gray-100/50 max-w-fit mx-auto">
            <Users className="w-4 h-4" />
            <span><span className="font-medium">+500</span> profissionais já na lista de espera</span>
          </div>
        </div>
      </section>

      {/* SECTION: Como a Sofina ajuda você - CAROUSEL */}
      <SofinaCarousel />

      {/* SECTION: Benefícios da Sofina */}
      <BenefitsSection />

      {/* SECTION: Antes vs Depois - IMPROVED VERSION */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white to-gray-50/50 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,197,94,0.02),transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-10 md:mb-14">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 max-w-[800px] mx-auto leading-[1.3]">
              Como você se sente hoje vs. depois de <span className="text-green-600 font-bold">30 dias</span> com a Sofina
            </h3>
            <p className="text-base font-medium text-slate-600 leading-[1.6] max-w-[800px] mx-auto">
              A diferença de ter um copiloto financeiro do seu lado.
            </p>
          </div>
          
          {/* GRID - Duas colunas bem definidas */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto mb-10 md:mb-14">
            {/* COLUNA ESQUERDA - ANTES */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10 border-l-4 border-red-200 hover:scale-[1.01]">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <AlertCircle className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="text-lg font-semibold text-slate-700 flex items-center justify-center gap-2">
                  😩 <span>Antes da Sofina</span>
                </h4>
              </div>
              
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-slate-600 leading-[1.6] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Não sei se guardo ou gasto</span>
                </li>
                <li className="flex items-start gap-4 text-slate-600 leading-[1.6] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Dinheiro parado rendendo <span className="font-medium">&lt;2% ao ano</span></span>
                </li>
                <li className="flex items-start gap-4 text-slate-600 leading-[1.6] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Medo de ser enrolado por banco ou corretora</span>
                </li>
                <li className="flex items-start gap-4 text-slate-600 leading-[1.6] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Horas perdidas em vídeos e planilhas</span>
                </li>
                <li className="flex items-start gap-4 text-slate-600 leading-[1.6] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Insegurança total sobre como investir</span>
                </li>
              </ul>
            </div>

            {/* COLUNA DIREITA - DEPOIS */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10 border-l-4 border-green-400 hover:scale-[1.01]">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-green-800 flex items-center justify-center gap-2">
                  🚀 <span>Depois da Sofina</span>
                </h4>
              </div>
              
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-slate-700 leading-[1.6] text-base">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Plano claro de quanto guardar e onde investir</span>
                </li>
                <li className="flex items-start gap-4 text-slate-700 leading-[1.6] text-base">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Sugestões semanais pelo WhatsApp</span>
                </li>
                <li className="flex items-start gap-4 text-slate-700 leading-[1.6] text-base">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>IA imparcial, sem comissão ou conflito de interesse</span>
                </li>
                <li className="flex items-start gap-4 text-slate-700 leading-[1.6] text-base">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Só <span className="font-medium">5 minutos</span> por semana para manter tudo em dia</span>
                </li>
                <li className="flex items-start gap-4 text-slate-700 leading-[1.6] text-base">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Confiança e constância nos seus aportes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA INTEGRADO */}
          <div className="text-center bg-gradient-to-br from-white to-green-50/30 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 md:p-10 max-w-2xl mx-auto border border-gray-100/50">
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 leading-[1.3]">
                🎯 Pronto para sair do modo "dinheiro parado"?
              </h4>
              <p className="text-base font-medium text-slate-600 leading-[1.6] max-w-[800px] mx-auto">
                Veja seu plano financeiro em <span className="font-semibold">3 minutos</span>, grátis por <span className="font-semibold">30 dias</span>.
              </p>
            </div>
            
            <Button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-base py-3 px-6 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              Quero meu plano agora
            </Button>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-gradient-to-br from-green-50/20 to-white relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.02),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-[1.3]">Para quem é a Sofina?</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100/50 hover:scale-[1.02] hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Clock className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Falta de tempo</h4>
              <p className="text-slate-600 leading-[1.6] text-base">
                Não gaste horas em vídeos de finanças — a IA faz tudo por você.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100/50 hover:scale-[1.02] hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Handshake className="w-8 h-8 text-orange-600" strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Falta de confiança</h4>
              <p className="text-slate-600 leading-[1.6] text-base">
                <span className="font-medium">Zero</span> metas de venda, <span className="font-medium">zero</span> comissão escondida.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100/50 hover:scale-[1.02] hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <ShieldCheck className="w-8 h-8 text-green-600" strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Medo de errar</h4>
              <p className="text-slate-600 leading-[1.6] text-base">
                Planos auditados por <span className="font-medium">CFA®</span> — sem termos complicados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-16 bg-gradient-to-br from-gray-50 to-white border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <img 
                  src="/lovable-uploads/fd78fa33-45f4-446a-b755-5a2c417a9d4e.png" 
                  alt="Sofina Logo" 
                  className="w-7 h-7"
                />
              </div>
              <span className="text-xl font-bold text-slate-900">Sofina</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-600 text-sm mb-2 font-medium">
                Seu copiloto financeiro via WhatsApp
              </p>
              <p className="text-slate-500 text-xs">
                © 2024 Sofina. Todos os direitos reservados.
              </p>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-slate-200/50 text-center">
            <p className="text-slate-500 text-sm leading-[1.6] max-w-[800px] mx-auto">
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
