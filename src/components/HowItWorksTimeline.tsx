
import { CheckCircle, Clipboard, Target, Bell, TrendingUp } from 'lucide-react';

const HowItWorksTimeline = () => {
  const steps = [
    {
      number: "01",
      icon: Clipboard,
      title: "Diagnóstico em 3 minutos",
      description: "Responda perguntas simples sobre sua renda, gastos e objetivos. A Sofina analisa seu perfil financeiro.",
      color: "bg-blue-500",
      delay: "delay-0"
    },
    {
      number: "02", 
      icon: Target,
      title: "Plano inicial personalizado",
      description: "Receba sua estratégia de investimentos completa, com valores específicos e produtos recomendados.",
      color: "bg-green-500",
      delay: "delay-100"
    },
    {
      number: "03",
      icon: Bell,
      title: "Nunca perca o dia de investir",
      description: "Todo mês, você recebe lembretes e orientações práticas via WhatsApp para manter sua estratégia em dia.",
      color: "bg-purple-500",
      delay: "delay-200"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Insights semanais personalizados",
      description: "Mantenha-se atualizado com dicas e ajustes na sua estratégia, sem precisar virar especialista em finanças.",
      color: "bg-orange-500",
      delay: "delay-300"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 leading-[1.3]">
            Como funciona a Sofina
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-[1.5]">
            Da análise inicial até o acompanhamento mensal — tudo automatizado e personalizado para você
          </p>
        </div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200" />
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className={`relative animate-fade-in ${step.delay}`}>
                  {/* Step Circle */}
                  <div className="relative z-10 mx-auto w-16 h-16 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-6">
                    <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 z-20 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-[1.3]">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-[1.5]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden space-y-8 max-w-md mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className={`relative flex items-start gap-4 animate-fade-in ${step.delay}`}>
                {/* Left Side - Icon & Line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-12 h-12 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-slate-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {step.number}
                    </div>
                  </div>
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-slate-300 to-slate-200 mt-2" />
                  )}
                </div>
                
                {/* Right Side - Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-[1.3]">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-[1.5]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>Processo 100% automático e personalizado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksTimeline;
