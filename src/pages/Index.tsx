
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageCircle, Target, Star, Users, Shield, TrendingUp, Clock, DollarSign, BarChart3, AlertCircle, Phone } from 'lucide-react';
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
            Você ganha bem. <br />
            Mas seu dinheiro <span className="text-blue-900">não acompanha</span>.
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Entenda por que seus investimentos não <strong className="text-blue-900">evoluem</strong> — e <strong className="text-blue-900">corrija</strong> em 30 dias com a ajuda de um <strong className="text-blue-900">copiloto</strong> financeiro imparcial no WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <SimpleTrackedButton 
              ctaName="HERO_CTA"
              size="lg" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-4 text-lg rounded-lg flex items-center gap-2"
              onClick={scrollToForm}
            >
              <Phone className="w-5 h-5" />
              Quero meu plano no WhatsApp
            </SimpleTrackedButton>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-600 text-sm mb-8">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-blue-900" />
              <span>Estratégia personalizada via IA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-900" />
              <span>Em menos de 3 minutos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-900" />
              <span>Sem conflito de interesse</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <Users className="w-4 h-4" />
            <span>+500 profissionais já na lista de espera</span>
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
                Responda 5 perguntas no WhatsApp e descubra onde está o erro nos seus investimentos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-900 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Estratégia Personalizada</h3>
              <p className="text-slate-600 leading-relaxed">
                Receba um plano claro com quanto investir, onde e por quê — baseado no seu perfil.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-900 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Acompanhamento Inteligente</h3>
              <p className="text-slate-600 leading-relaxed">
                Mantenha a consistência com lembretes, explicações e evolução mês a mês.
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-slate-200 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">100% Imparcial</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nossa receita vem só da sua mensalidade. Não vendemos produtos.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Via WhatsApp</h3>
                <p className="text-slate-600 leading-relaxed">
                  Sem app, sem burocracia. Tudo direto no canal que você já usa.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Baseado em Dados</h3>
                <p className="text-slate-600 leading-relaxed">
                  IA treinada com estratégias de sucesso e dados reais do mercado.
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

      {/* Target Audience Section */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Para quem é a Finwise?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-700">
              <div className="flex flex-col items-center">
                <Target className="w-8 h-8 text-blue-900 mb-2" />
                <span className="font-medium">Profissionais de 28-40 anos</span>
              </div>
              <div className="flex flex-col items-center">
                <DollarSign className="w-8 h-8 text-blue-900 mb-2" />
                <span className="font-medium">Já investe R$10k-R$500k ou quer começar direito</span>
              </div>
              <div className="flex flex-col items-center">
                <BarChart3 className="w-8 h-8 text-blue-900 mb-2" />
                <span className="font-medium">Resultado: plano claro + evolução real todo mês</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Receba seu plano financeiro no WhatsApp
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Preencha em 1 minuto e comece a investir com clareza e confiança.
          </p>
          
          <WaitlistForm />
          
          <div className="mt-8 flex items-center justify-center text-slate-500 text-sm">
            <Shield className="w-4 h-4 mr-2" />
            <span>Seus dados estão protegidos. Sem spam. Você pode sair quando quiser.</span>
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
