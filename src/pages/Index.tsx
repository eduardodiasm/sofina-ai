
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Users, Shield, TrendingUp, DollarSign, BarChart3, AlertCircle, Zap, BookOpen, Clock, Heart, Brain, MessageCircle, Check, X, Handshake, ShieldCheck, Vault, Calendar, PiggyBank, Rocket, Award } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-emerald-50/40 overflow-x-hidden font-manrope">
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
          <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50 font-medium shadow-sm">
            30 dias grátis
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
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

            {/* Enhanced TRUST-BAR with icons */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-6 mb-8 text-sm text-slate-600">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-green-100/50">
                <Brain className="h-5 w-5 text-green-600" />
                <span>Powered by <strong className="text-slate-700 font-semibold">OpenAI Enterprise</strong></span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-green-100/50">
                <Award className="h-5 w-5 text-green-600" />
                <span>Auditoria <strong className="text-slate-700 font-semibold">CFA®</strong></span>
              </div>
            </div>
            
          </div>

          {/* Hero Form - Formulário Principal */}
          <section id="form" className="mb-12 md:mb-16">
            <HeroForm />
          </section>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-10 text-slate-600 text-sm mb-8 md:mb-10">
            <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm">
              <Zap className="w-5 h-5 text-green-600" />
              <span>Plano pronto em <span className="font-semibold">3 min</span></span>
            </div>
            <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm">
              <Shield className="w-5 h-5 text-green-600" />
              <span><span className="font-semibold">30 d</span> grátis, sem compromisso</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm">
              <BarChart3 className="w-5 h-5 text-green-600" />
              <span>Valores e ativos específicos</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-3 text-slate-500 text-sm bg-white/50 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm w-fit mx-auto">
            <Users className="w-5 h-5" />
            <span><span className="font-semibold">+500</span> profissionais já na lista de espera</span>
          </div>
        </div>
      </section>

      {/* SECTION: Como a Sofina ajuda você - CAROUSEL FIRST */}
      <SofinaCarousel />

      {/* SECTION: Benefícios da Sofina - Enhanced */}
      <BenefitsSection />

      {/* SECTION: Antes vs Depois - Enhanced with icons and better styling */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white to-gray-50/50">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 max-w-[800px] mx-auto leading-[1.3]">
              Como você se sente hoje vs. depois de <span className="text-green-600 font-bold">30 dias</span> com a Sofina
            </h3>
            <p className="text-base font-medium text-slate-600 leading-[1.6] max-w-[800px] mx-auto">
              A diferença de ter um copiloto financeiro do seu lado.
            </p>
          </div>
          
          {/* Enhanced GRID - Duas colunas com melhor elevação */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto mb-12 md:mb-16">
            {/* COLUNA ESQUERDA - ANTES */}
            <div className="bg-gradient-to-br from-white to-red-50/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10 border border-red-100/50 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 flex items-center justify-center gap-3">
                  😩 <span>Antes da Sofina</span>
                </h4>
              </div>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-slate-700 leading-[1.6] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Não sei se guardo ou gasto</span>
                </li>
                <li className="flex items-start gap-4 text-slate-700 leading-[1.6] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Dinheiro parado rendendo <span className="font-semibold">&lt;2% ao ano</span></span>
                </li>
                <li className="flex items-start gap-4 text-slate-700 leading-[1.6] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Medo de ser enrolado por banco ou corretora</span>
                </li>
                <li className="flex items-start gap-4 text-slate-700 leading-[1.6] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Horas perdidas em vídeos e planilhas</span>
                </li>
                <li className="flex items-start gap-4 text-slate-700 leading-[1.6] text-base">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Insegurança total sobre como investir</span>
                </li>
              </ul>
            </div>

            {/* COLUNA DIREITA - DEPOIS */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10 border border-green-200/50 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-green-800 flex items-center justify-center gap-3">
                  🚀 <span>Depois da Sofina</span>
                </h4>
              </div>
              
              <ul className="space-y-6">
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
                  <span>Só <span className="font-semibold">5 minutos</span> por semana para manter tudo em dia</span>
                </li>
                <li className="flex items-start gap-4 text-slate-700 leading-[1.6] text-base">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Confiança e constância nos seus aportes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enhanced CTA with better styling */}
          <div className="text-center bg-gradient-to-br from-white to-green-50/30 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 max-w-3xl mx-auto border border-green-100/50">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-[1.3]">
                🎯 Pronto para sair do modo "dinheiro parado"?
              </h4>
              <p className="text-base font-medium text-slate-600 leading-[1.6] max-w-[600px] mx-auto">
                Veja seu plano financeiro em <span className="font-bold text-green-600">3 minutos</span>, grátis por <span className="font-bold text-green-600">30 dias</span>.
              </p>
            </div>
            
            <Button 
              onClick={scrollToForm}
              className="bg-green-600 hover:bg-green-700 text-white text-base py-3 px-8 font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Quero meu plano agora
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced PARA QUEM É section */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-gradient-to-br from-green-50/20 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-[1.3]">Para quem é a Sofina?</h3>
          </div>
          
          <div className="grid gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10 border border-gray-100/50 backdrop-blur-sm">
              <div className="flex gap-6 leading-[1.6] text-base">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">Falta de tempo</h4>
                  <p className="text-slate-700">Não gaste horas em vídeos de finanças — a IA faz tudo por você.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10 border border-gray-100/50 backdrop-blur-sm">
              <div className="flex gap-6 leading-[1.6] text-base">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">Falta de confiança</h4>
                  <p className="text-slate-700"><span className="font-semibold">Zero</span> metas de venda, <span className="font-semibold">zero</span> comissão escondida.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10 border border-gray-100/50 backdrop-blur-sm">
              <div className="flex gap-6 leading-[1.6] text-base">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">Medo de errar</h4>
                  <p className="text-slate-700">Planos auditados por <span className="font-semibold">CFA®</span> — sem termos complicados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="px-6 md:px-10 py-16 bg-gradient-to-br from-gray-50 to-slate-100/50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/fd78fa33-45f4-446a-b755-5a2c417a9d4e.png" 
                alt="Sofina Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-slate-900">Sofina</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-600 text-base mb-2 font-medium">
                Seu copiloto financeiro via WhatsApp
              </p>
              <p className="text-slate-500 text-sm">
                © 2024 Sofina. Todos os direitos reservados.
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-500 text-sm leading-[1.6] max-w-[800px] mx-auto">
              <strong className="text-slate-600 font-semibold">Importante:</strong> Sofina oferece orientação educacional e não substitui aconselhamento financeiro profissional personalizado. 
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
