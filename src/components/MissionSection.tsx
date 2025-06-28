
import { BookOpen, Building2, Brain } from 'lucide-react';

const MissionSection = () => {
  const missionCards = [
    {
      icon: BookOpen,
      text: "Sem estudar trocentos ativos"
    },
    {
      icon: Building2,
      text: "Sem gerente tentando te empurrar produto"
    },
    {
      icon: Brain,
      text: "Só o que importa: plano claro e imparcial"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50/30 to-white">
      <div className="container mx-auto px-6 md:px-10">
        {/* Título principal */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 md:mb-12 leading-[1.3] max-w-[900px] mx-auto">
            Deixar seus investimentos no piloto automático — com{' '}
            <span className="text-green-600 relative">
              clareza, confiança
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600/30"></span>
            </span>
            {' '}e zero enrolação.
          </h2>
        </div>

        {/* Parágrafo manifesto */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="space-y-6 text-base md:text-lg leading-[1.6] text-slate-700">
            <p className="font-medium">
              A verdade é que o sistema financeiro tradicional nunca jogou do seu lado. 
              Cheio de burocracia, produtos empurrados e interesses escondidos.
            </p>
            <p className="font-medium">
              A Sofina nasceu pra mudar isso. Você não precisa mais perder horas estudando 
              trocentos ativos, nem confiar em bancário com meta de venda.
            </p>
            <p className="font-medium">
              Com a Sofina, você tem um copiloto imparcial que cuida da sua estratégia 
              de ponta a ponta — direto no WhatsApp.
            </p>
          </div>
        </div>

        {/* Cards com ícones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
          {missionCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-gray-500" strokeWidth={1.5} />
                  </div>
                </div>
                <p className="text-base font-semibold text-slate-900 leading-[1.4]">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Frase de fechamento */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-medium text-slate-900 leading-[1.4] max-w-[700px] mx-auto">
            <span className="text-green-700 font-semibold">"É o fim dos 'meios de campo'.</span>{' '}
            Seu dinheiro, seu plano, seu controle."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
