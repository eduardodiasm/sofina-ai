
import { Target, BarChart3, Bell, TrendingUp, MessageCircle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Comece com uma carteira pensada pra você",
      description: "Sofina entende seu perfil e já sugere onde investir com base na sua renda e nos seus objetivos.",
    },
    {
      icon: BarChart3,
      title: "Investe mal? A Sofina corrige sua carteira",
      description: "Analisamos seus investimentos atuais e sugerimos o melhor caminho, sem empurrar produto.",
    },
    {
      icon: Bell,
      title: "Nunca mais esqueça de investir",
      description: "Você escolhe a data. A Sofina te cobra até o dinheiro cair na conta certa.",
    },
    {
      icon: TrendingUp,
      title: "Veja seu progresso rumo à liberdade financeira",
      description: "Ex: R$5mi em 10 anos. A cada mês, você acompanha sua evolução. Simples e visual.",
    },
    {
      icon: MessageCircle,
      title: "Dúvidas? A Sofina responde tudo no WhatsApp",
      description: "Renda fixa, ações, Tesouro? A Sofina te explica sem enrolação — sempre que precisar.",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 md:mb-6 leading-[1.3] max-w-[800px] mx-auto">
            Menos dúvida, mais patrimônio.
          </h2>
          <p className="text-base font-medium text-slate-700 max-w-[800px] mx-auto leading-[1.5]">
            A Sofina cuida da sua estratégia de investimentos de ponta a ponta. 
            Tudo <span className="font-semibold">100% personalizado</span> — direto no WhatsApp.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 md:mb-3 leading-[1.3] text-pretty">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-[1.5] text-base text-pretty">
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
