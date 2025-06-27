
import { Target, BarChart3, Bell, TrendingUp, MessageCircle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Comece com uma carteira pensada pra você",
      description: "Sofina entende seu perfil e já sugere onde investir com base na sua renda e nos seus objetivos.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-700"
    },
    {
      icon: BarChart3,
      title: "Investe mal? A Sofina corrige sua carteira",
      description: "Analisamos seus investimentos atuais e sugerimos o melhor caminho, sem empurrar produto.",
      bgColor: "bg-green-100",
      iconColor: "text-green-700"
    },
    {
      icon: Bell,
      title: "Nunca mais esqueça de investir",
      description: "Você escolhe a data. A Sofina te cobra até o dinheiro cair na conta certa.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-700"
    },
    {
      icon: TrendingUp,
      title: "Veja seu progresso rumo à liberdade financeira",
      description: "Ex: R$5mi em 10 anos. A cada mês, você acompanha sua evolução. Simples e visual.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-700"
    },
    {
      icon: MessageCircle,
      title: "Dúvidas? A Sofina responde tudo no WhatsApp",
      description: "Renda fixa, ações, Tesouro? A Sofina te explica sem enrolação — sempre que precisar.",
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-700"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-jakarta leading-tight">
            Menos dúvida, mais patrimônio.
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto font-inter leading-relaxed">
            A Sofina cuida da sua estratégia de investimentos de ponta a ponta. 
            Tudo <span className="font-poppins font-semibold">100% personalizado</span> — direto no WhatsApp.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                      <IconComponent className={`w-8 h-8 ${benefit.iconColor}`} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 font-jakarta leading-tight group-hover:text-slate-800 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 font-inter leading-relaxed text-base md:text-lg">
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
