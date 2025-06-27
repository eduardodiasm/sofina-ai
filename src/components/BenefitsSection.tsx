
import { Target, BarChart3, Bell, TrendingUp, MessageCircle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Comece com uma carteira pensada pra você",
      description: "Sofina entende seu perfil e já sugere onde investir com base na sua renda e nos seus objetivos.",
      gradient: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: BarChart3,
      title: "Investe mal? A Sofina corrige sua carteira",
      description: "Analisamos seus investimentos atuais e sugerimos o melhor caminho, sem empurrar produto.",
      gradient: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: Bell,
      title: "Nunca mais esqueça de investir",
      description: "Você escolhe a data. A Sofina te cobra até o dinheiro cair na conta certa.",
      gradient: "from-orange-100 to-orange-200",
      iconColor: "text-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Veja seu progresso rumo à liberdade financeira",
      description: "Ex: R$5mi em 10 anos. A cada mês, você acompanha sua evolução. Simples e visual.",
      gradient: "from-green-100 to-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: MessageCircle,
      title: "Dúvidas? A Sofina responde tudo no WhatsApp",
      description: "Renda fixa, ações, Tesouro? A Sofina te explica sem enrolação — sempre que precisar.",
      gradient: "from-emerald-100 to-emerald-200",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-green-50/40 via-white to-slate-50/30 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,197,94,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.02),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-14 md:mb-18">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8 leading-[1.3] max-w-[800px] mx-auto">
            Menos dúvida, mais patrimônio.
          </h2>
          <p className="text-base font-medium text-slate-700 max-w-[800px] mx-auto leading-[1.6]">
            A Sofina cuida da sua estratégia de investimentos de ponta a ponta. 
            Tudo <span className="font-semibold text-green-700">100% personalizado</span> — direto no WhatsApp.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:scale-[1.02] hover:-translate-y-1 group">
                <div className="flex items-start gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className={`w-7 h-7 ${benefit.iconColor}`} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 md:mb-5 leading-[1.3] text-pretty group-hover:text-green-800 transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-[1.6] text-base text-pretty">
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
