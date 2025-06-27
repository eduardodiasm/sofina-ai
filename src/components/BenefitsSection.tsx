
import { Target, BarChart3, Bell, TrendingUp, MessageCircle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Criação da carteira ideal",
      description: "Está completamente perdido? A Sofina monta uma carteira personalizada com base no seu perfil, renda e objetivos. É o seu primeiro passo rumo à liberdade financeira."
    },
    {
      icon: BarChart3,
      title: "Análise da sua carteira atual",
      description: "Já investe, mas sente que poderia estar fazendo melhor? A Sofina analisa sua carteira e sugere melhorias e rebalanceamentos, sem conflito de interesses."
    },
    {
      icon: Bell,
      title: "Lembretes inteligentes de aporte",
      description: "Você escolhe a data. A Sofina te lembra, insiste e acompanha até o dinheiro cair na conta certa. É o fim da desculpa de \"esqueci de investir\"."
    },
    {
      icon: TrendingUp,
      title: "Plano de ação + acompanhamento de meta",
      description: "Ex: Meta R$5 milhões em 10 anos. Status: 15%. Parabéns, você avançou 3% nos últimos 60 dias. A Sofina acompanha cada passo da sua liberdade financeira."
    },
    {
      icon: MessageCircle,
      title: "Tire qualquer dúvida, a qualquer hora",
      description: "ETF ou Tesouro? Dólar ou CDI? Com a Sofina, você tem respostas confiáveis no bolso — sem precisar virar especialista nem confiar em assessor."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-jakarta">
            Sua liberdade financeira começa aqui
          </h2>
          <p className="text-lg md:text-xl text-slate-700 max-w-4xl mx-auto font-inter leading-relaxed">
            A Sofina cuida da sua estratégia de investimentos de ponta a ponta, com inteligência e clareza. 
            Você só precisa responder no WhatsApp.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-green-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 font-poppins">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 font-inter leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
