import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageCircle, Zap, Shield, TrendingUp, Users, Clock, X, ArrowRight, Target, Star } from 'lucide-react';
import WaitlistForm from "@/components/WaitlistForm";
import TrackedButton from "@/components/TrackedButton";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEffect } from "react";

const Index = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView('landing_page');
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('waitlist-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ce78f769-77f0-443a-ab6a-2c7ceb6b2ec1.png" 
              alt="Finwise Logo" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-white">Finwise</span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-400/30 animate-pulse">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              ACESSO ANTECIPADO
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Urgência */}
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2 mb-8">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Últimos dias de inscrição gratuita</span>
          </div>
          
          {/* Headline Brutal */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Pare de <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">perder dinheiro</span> por não saber investir
          </h1>
          
          {/* Subheadline de Benefício */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Em 3 minutos, você entende o que está fazendo de errado com seu dinheiro. 
            Em 30 dias, <strong className="text-white">começa a corrigir via WhatsApp.</strong>
          </p>
          
          {/* 3 Bullets de Dor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 bg-red-500/5 border border-red-400/10 rounded-lg p-4">
              <X className="w-6 h-6 text-red-400 flex-shrink-0" />
              <p className="text-slate-300 text-left">Você ganha R$10k+ mas sente que está <strong className="text-white">patinando financeiramente</strong></p>
            </div>
            <div className="flex items-center space-x-3 bg-red-500/5 border border-red-400/10 rounded-lg p-4">
              <X className="w-6 h-6 text-red-400 flex-shrink-0" />
              <p className="text-slate-300 text-left">Investe "quando sobra", sem <strong className="text-white">estratégia ou constância</strong></p>
            </div>
            <div className="flex items-center space-x-3 bg-red-500/5 border border-red-400/10 rounded-lg p-4">
              <X className="w-6 h-6 text-red-400 flex-shrink-0" />
              <p className="text-slate-300 text-left">Desconfia dos assessores mas não tem <strong className="text-white">tempo pra estudar</strong></p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <TrackedButton 
              ctaName="QUERO_MINHA_ESTRATEGIA"
              location="hero_section"
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-4 text-lg"
              onClick={scrollToForm}
            >
              <Target className="w-5 h-5 mr-2" />
              QUERO MINHA ESTRATÉGIA GRÁTIS
            </TrackedButton>
          </div>
          
          <p className="text-slate-400 text-sm mb-8">
            ✅ <strong className="text-green-400">30 dias 100% grátis</strong> • ✅ <strong className="text-blue-400">Sem compromisso</strong> • ✅ <strong className="text-purple-400">Cancela quando quiser</strong>
          </p>

          {/* Prova Social */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span><strong className="text-white">347 pessoas</strong> já garantiram acesso</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Criado por <strong className="text-white">especialistas em AI e mercado financeiro</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-red-950/20 to-orange-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Por que você ainda não é rico?
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            <strong className="text-red-300">A verdade brutal:</strong> O sistema financeiro não foi feito para te enriquecer. 
            Foi feito para <strong className="text-white">vender produtos com comissão alta.</strong>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-red-500/10 border-red-400/20">
              <CardContent className="p-8">
                <h3 className="text-red-300 font-bold text-xl mb-6">😤 Você provavelmente...</h3>
                <ul className="text-slate-300 space-y-4 text-left">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ganha bem, mas <strong className="text-white">não evolui financeiramente</strong></span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Investe "de vez em quando", <strong className="text-white">sem estratégia</strong></span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Não tem <strong className="text-white">clareza sobre longo prazo</strong></span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Desconfia</strong> dos "conselhos" do gerente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-green-500/10 border-green-400/20">
              <CardContent className="p-8">
                <h3 className="text-green-300 font-bold text-xl mb-6">🚀 Com a Finwise você...</h3>
                <ul className="text-slate-300 space-y-4 text-left">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tem um <strong className="text-white">plano claro em 3 minutos</strong></span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Investe com <strong className="text-white">constância e propósito</strong></span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recebe orientação <strong className="text-white">100% imparcial</strong></span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Evolui rumo à <strong className="text-white">independência financeira</strong></span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Como transformar sua vida financeira em 30 dias
            </h2>
            <p className="text-xl text-slate-300">
              <strong className="text-blue-300">É ridiculamente simples.</strong> Sem apps complicados, sem cursos chatos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Diagnóstico Brutal (3 min)</h3>
              <p className="text-slate-300">5 perguntas diretas via WhatsApp sobre sua situação atual. Sem enrolação.</p>
              <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                <ArrowRight className="w-6 h-6 text-slate-600" />
              </div>
            </div>
            
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Plano Personalizado</h3>
              <p className="text-slate-300">Estratégia sob medida com valores exatos e ativos específicos. Tudo explicado.</p>
              <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                <ArrowRight className="w-6 h-6 text-slate-600" />
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">Evolução Automática</h3>
              <p className="text-slate-300">Lembretes inteligentes + educação financeira. Você evolui sem perceber.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <TrackedButton 
              ctaName="COMECAR_AGORA"
              location="how_it_works"
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-4 text-lg"
              onClick={scrollToForm}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              COMEÇAR AGORA (GRÁTIS)
            </TrackedButton>
          </div>
        </div>
      </section>

      {/* Benefits vs Alternatives */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-950/30 to-purple-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Finwise vs. O resto do mercado
            </h2>
            <p className="text-xl text-slate-300">
              <strong className="text-red-300">Não vendemos produtos.</strong> Vendemos clareza e resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bancos/Corretoras */}
            <Card className="bg-red-500/10 border-red-400/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-red-300 font-bold text-xl mb-6">🏦 Bancos/Corretoras</h3>
                <ul className="text-slate-300 space-y-3 text-left">
                  <li>❌ Conflito de interesse</li>
                  <li>❌ Empurram produtos caros</li>
                  <li>❌ Atendimento robótico</li>
                  <li>❌ Você é só um número</li>
                </ul>
              </CardContent>
            </Card>

            {/* Assessoria Tradicional */}
            <Card className="bg-yellow-500/10 border-yellow-400/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-yellow-300 font-bold text-xl mb-6">👨‍💼 Assessoria Tradicional</h3>
                <ul className="text-slate-300 space-y-3 text-left">
                  <li>⚠️ Caro (R$500-2000/mês)</li>
                  <li>⚠️ Só para "ricos"</li>
                  <li>⚠️ Complexo e formal</li>
                  <li>⚠️ Difícil acesso</li>
                </ul>
              </CardContent>
            </Card>

            {/* Finwise */}
            <Card className="bg-green-500/20 border-green-400/40 ring-2 ring-green-400/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-green-300 font-bold text-xl mb-6">🚀 Finwise</h3>
                <ul className="text-slate-300 space-y-3 text-left">
                  <li>✅ <strong className="text-white">100% imparcial</strong></li>
                  <li>✅ <strong className="text-white">Via WhatsApp</strong></li>
                  <li>✅ <strong className="text-white">R$39/mês</strong></li>
                  <li>✅ <strong className="text-white">Educação real</strong></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              "Mas eu ainda tenho dúvidas..."
            </h2>
            <p className="text-xl text-slate-300">
              Normal. Respondemos as 3 principais:
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-blue-300 font-bold text-xl mb-4">💭 "Como sei que não é mais uma enganação?"</h3>
                <p className="text-slate-300 leading-relaxed">
                  <strong className="text-white">30 dias grátis.</strong> Se não gostar, cancela. Sem pegadinha, sem taxa, sem enrolação. 
                  Além disso, não vendemos produtos financeiros - nosso sucesso depende do seu.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-blue-300 font-bold text-xl mb-4">💭 "E se eu não entender nada de investimentos?"</h3>
                <p className="text-slate-300 leading-relaxed">
                  <strong className="text-white">Perfeito.</strong> A Finwise foi criada exatamente para quem não tem tempo de virar especialista. 
                  Explicamos tudo em linguagem simples, via WhatsApp.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-blue-300 font-bold text-xl mb-4">💭 "Posso confiar numa IA com meu dinheiro?"</h3>
                <p className="text-slate-300 leading-relaxed">
                  Nossa IA é <strong className="text-white">treinada com estratégias testadas</strong> e dados do mercado em tempo real. 
                  Não "chutamos" - seguimos princípios sólidos de investimento. E você sempre tem controle total.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2 mb-8">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Últimos dias de inscrição gratuita</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Chega de adiar sua liberdade financeira
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Garanta sua vaga para ser um dos primeiros a usar a Finwise. 
            <strong className="text-green-300"> 30 dias totalmente grátis.</strong>
          </p>
          
          <WaitlistForm />
          
          <div className="mt-8 text-slate-400 space-y-2">
            <p>🎯 <strong className="text-white">Para quem:</strong> Profissionais de 28-40 anos, renda R$6k-R$30k</p>
            <p>💰 <strong className="text-white">Patrimônio atual:</strong> R$10k - R$500k investidos</p>
            <p>⚡ <strong className="text-white">Resultado:</strong> Estratégia clara + evolução constante</p>
          </div>

          <div className="mt-8 p-4 bg-green-500/10 border border-green-400/20 rounded-lg">
            <p className="text-green-300 font-bold">🔒 GARANTIA TOTAL: 30 dias grátis + cancela quando quiser</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/ce78f769-77f0-443a-ab6a-2c7ceb6b2ec1.png" 
                alt="Finwise Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">Finwise</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm mb-2">
                Seu Private Banker com Inteligência Artificial
              </p>
              <p className="text-slate-500 text-xs">
                © 2024 Finwise. Todos os direitos reservados.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-sm">
              <strong className="text-slate-300">Importante:</strong> Finwise oferece orientação educacional e não substitui aconselhamento financeiro profissional personalizado. 
              Investimentos envolvem riscos e rentabilidade passada não garante resultados futuros.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
