
import { BookOpen, Users, Brain, Target } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50/40 via-white to-slate-50/30">
      <div className="container mx-auto px-6 md:px-10">
        {/* Bloco 1 - Título com emoção + impacto visual */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="w-6 h-6 text-green-600" strokeWidth={1.5} />
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-[1.3]">
              Nossa missão
            </h2>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-[1.3] max-w-4xl mx-auto">
            Deixar seus investimentos no piloto automático — com clareza, confiança e zero enrolação.
          </h3>
        </div>

        {/* Bloco 2 - Parágrafo manifesto (storytelling) */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="bg-white/60 rounded-xl p-6 md:p-8 shadow-sm border border-green-100/50">
            <div className="space-y-4 text-slate-700 leading-[1.6] text-base md:text-lg">
              <p>
                A verdade é que o sistema financeiro tradicional nunca jogou do seu lado. 
                Cheio de burocracia, produtos empurrados e interesses escondidos.
              </p>
              <p>
                A Sofina nasceu pra mudar isso. Você não precisa mais perder horas estudando 
                trocentos ativos, nem confiar em bancário com meta de venda.
              </p>
              <p>
                Com a Sofina, você tem um copiloto imparcial que cuida da sua estratégia 
                de ponta a ponta — direto no WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Bloco 3 - Cards com ícones e frases curtas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-8 h-8 text-gray-500" strokeWidth={1.5} />
            </div>
            <p className="text-lg font-semibold text-slate-900 leading-[1.3]">
              Sem estudar trocentos ativos
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-8 h-8 text-gray-500" strokeWidth={1.5} />
            </div>
            <p className="text-lg font-semibold text-slate-900 leading-[1.3]">
              Sem gerente tentando te empurrar produto
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center">
            <div className="flex justify-center mb-4">
              <Brain className="w-8 h-8 text-gray-500" strokeWidth={1.5} />
            </div>
            <p className="text-lg font-semibold text-slate-900 leading-[1.3]">
              Só o que importa: plano claro e imparcial
            </p>
          </div>
        </div>

        {/* Bloco 4 - Frase de fechamento poderosa */}
        <div className="text-center">
          <div className="bg-white/80 rounded-xl p-6 md:p-8 shadow-sm border border-green-100/50 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-medium text-slate-900 leading-[1.4] italic">
              "É o fim dos 'meios de campo'. Seu dinheiro, seu plano, seu controle."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
