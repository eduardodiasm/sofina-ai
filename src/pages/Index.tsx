
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageCircle, Target, Star, Users, ArrowRight, Shield, TrendingUp, Zap } from 'lucide-react';
import WaitlistForm from "@/components/WaitlistForm";
import SimpleTrackedButton from "@/components/SimpleTrackedButton";
import { useSimpleAnalytics } from "@/hooks/useSimpleAnalytics";
import { useEffect } from "react";

const Index = () => {
  const { trackPageVisit } = useSimpleAnalytics();

  useEffect(() => {
    trackPageVisit();
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('waitlist-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

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
            Acesso Antecipado
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Seu Private Banker com <br />
            <span className="text-blue-900">Inteligência Artificial</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Estratégia financeira personalizada em 3 minutos. 
            Orientação contínua via WhatsApp. Sem conflito de interesse.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <SimpleTrackedButton 
              ctaName="HERO_CTA"
              size="lg" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-4 text-lg rounded-lg"
              onClick={scrollToForm}
            >
              Começar Agora
            </SimpleTrackedButton>
            <p className="text-sm text-slate-500">30 dias grátis • Sem compromisso</p>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-500 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>347+ profissionais cadastrados</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>Criado por especialistas em IA e finanças</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Como funciona
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Um processo simples para transformar sua relação com o dinheiro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-900 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Diagnóstico Rápido</h3>
              <p className="text-slate-600 leading-relaxed">
                5 perguntas via WhatsApp sobre sua situação financeira atual e objetivos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-900 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Estratégia Personalizada</h3>
              <p className="text-slate-600 leading-relaxed">
                Plano sob medida com valores exatos e produtos específicos para seu perfil.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-900 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Acompanhamento Contínuo</h3>
              <p className="text-slate-600 leading-relaxed">
                Lembretes inteligentes e educação financeira para evoluir constantemente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Por que escolher a Finwise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Orientação financeira sem conflito de interesse
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-slate-200 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">100% Imparcial</h3>
                <p className="text-slate-600 leading-relaxed">
                  Não vendemos produtos financeiros. Nossa receita vem apenas da sua mensalidade.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Via WhatsApp</h3>
                <p className="text-slate-600 leading-relaxed">
                  Sem apps complicados. Toda comunicação acontece no WhatsApp que você já usa.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Baseado em Dados</h3>
                <p className="text-slate-600 leading-relaxed">
                  IA treinada com estratégias testadas e dados do mercado em tempo real.
                </p>
              </CardContent>
            </Card>
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
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    </span>
                    <span className="text-slate-600">Conflito de interesse com comissões</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    </span>
                    <span className="text-slate-600">Patrimônio mínimo alto (R$500k+)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    </span>
                    <span className="text-slate-600">Atendimento formal e distante</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    </span>
                    <span className="text-slate-600">Custo elevado (R$2.000+/mês)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-6 text-center">Finwise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-900 mt-0.5" />
                    <span className="text-slate-700 font-medium">Zero conflito de interesse</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-900 mt-0.5" />
                    <span className="text-slate-700 font-medium">Acessível para todos (R$39/mês)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-900 mt-0.5" />
                    <span className="text-slate-700 font-medium">Comunicação simples via WhatsApp</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-900 mt-0.5" />
                    <span className="text-slate-700 font-medium">Disponível 24/7 com IA</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Comece sua jornada financeira hoje
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Garante sua vaga para ser um dos primeiros a usar a Finwise. 
            <strong className="text-slate-900"> 30 dias totalmente grátis.</strong>
          </p>
          
          <WaitlistForm />
          
          <div className="mt-8 text-slate-500 space-y-2 text-sm">
            <p>🎯 <strong className="text-slate-700">Para quem:</strong> Profissionais de 28-40 anos, renda R$6k-R$30k</p>
            <p>💰 <strong className="text-slate-700">Patrimônio atual:</strong> R$10k - R$500k investidos</p>
            <p>⚡ <strong className="text-slate-700">Resultado:</strong> Estratégia clara + evolução constante</p>
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
                Seu Private Banker com Inteligência Artificial
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
