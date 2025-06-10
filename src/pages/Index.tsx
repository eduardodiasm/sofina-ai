import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageCircle, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
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
          <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400/30">
            Em breve
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Seu Private Banker com IA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Acesso inteligente à gestão do seu
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> patrimônio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Finalmente, um conselheiro financeiro 100% imparcial, acessível e confiável. 
            <strong className="text-white"> Via WhatsApp.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 text-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Entrar na Lista de Espera
            </Button>
            <p className="text-slate-400 text-sm">Acesso gratuito por 30 dias</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">100% Imparcial</h3>
                <p className="text-slate-300 text-sm">Sem conflitos de interesse ou comissões. Só o melhor para você.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Via WhatsApp</h3>
                <p className="text-slate-300 text-sm">Interface simples e familiar. Sem apps complicados.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">IA Avançada</h3>
                <p className="text-slate-300 text-sm">Decisões baseadas em dados e algoritmos de última geração.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-red-950/20 to-orange-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            O sistema financeiro não foi feito para te ajudar
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Assessores presos a conflitos de interesse, metas de comissionamento e produtos que nem sempre são os melhores. 
            O resultado? Mesmo profissionais qualificados ficam sem clareza sobre como investir e construir patrimônio real.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-red-500/10 border-red-400/20">
              <CardContent className="p-6">
                <h3 className="text-red-300 font-semibold mb-4">Você provavelmente...</h3>
                <ul className="text-slate-300 space-y-2 text-left">
                  <li>• Ganha bem, mas sente que não evolui financeiramente</li>
                  <li>• Investe "de vez em quando", sem constância</li>
                  <li>• Não tem clareza sobre estratégia de longo prazo</li>
                  <li>• Desconfia dos "conselhos" do seu gerente</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-green-500/10 border-green-400/20">
              <CardContent className="p-6">
                <h3 className="text-green-300 font-semibold mb-4">Com a Finwise você...</h3>
                <ul className="text-slate-300 space-y-2 text-left">
                  <li>• Tem um plano claro em 3 minutos</li>
                  <li>• Investe com constância e propósito</li>
                  <li>• Recebe orientação 100% imparcial</li>
                  <li>• Evolui rumo à independência financeira</li>
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
              Como funciona
            </h2>
            <p className="text-xl text-slate-300">
              Simples, direto e eficiente. Exatamente como deveria ser.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Diagnóstico</h3>
              <p className="text-slate-300 text-sm">5 perguntas rápidas via WhatsApp sobre sua situação atual</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Plano Personalizado</h3>
              <p className="text-slate-300 text-sm">Estratégia sob medida com ativos e valores mensais específicos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Acompanhamento</h3>
              <p className="text-slate-300 text-sm">Lembretes inteligentes e educação financeira constante</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Evolução</h3>
              <p className="text-slate-300 text-sm">Progresso visível rumo à sua independência financeira</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-950/30 to-purple-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Por que a Finwise é diferente
            </h2>
            <p className="text-xl text-slate-300">
              Não vendemos produtos. Vendemos clareza e resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Zero Conflito de Interesse</h3>
                  <p className="text-slate-300">Não ganhamos comissão por produto vendido. Só evoluímos se você evoluir.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Interface Simples</h3>
                  <p className="text-slate-300">WhatsApp. Só isso. Sem apps complicados ou interfaces confusas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Educação Real</h3>
                  <p className="text-slate-300">Explicamos o "porquê" de cada decisão. Você evolui, não só executa.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Dados em Tempo Real</h3>
                  <p className="text-slate-300">IA alimentada com informações atualizadas do mercado financeiro.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Planos Acessíveis</h3>
                  <p className="text-slate-300">A partir de R$39/mês. Menos que um almoço executivo.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Teste Gratuito</h3>
                  <p className="text-slate-300">30 dias para conhecer e sentir a diferença na prática.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pare de adiar sua evolução financeira
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Entre na lista de espera e seja um dos primeiros a ter acesso à Finwise. 
            <strong className="text-blue-300"> Totalmente gratuito por 30 dias.</strong>
          </p>
          
          <WaitlistForm />
          
          <div className="mt-8 text-slate-400">
            <p className="mb-2">🎯 <strong className="text-white">Público-alvo:</strong> Profissionais de 28-40 anos, renda R$6k-R$30k</p>
            <p>💰 <strong className="text-white">Patrimônio atual:</strong> R$10k - R$500k em investimentos</p>
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
