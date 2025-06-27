
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Shield, Zap } from 'lucide-react';

interface EmotionalCTAProps {
  onScrollToForm: () => void;
}

const EmotionalCTA = ({ onScrollToForm }: EmotionalCTAProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-[1.2]">
              Sua independência financeira está a{' '}
              <span className="text-green-200 relative">
                3 minutos
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-green-200 rounded-full opacity-60" />
              </span>{' '}
              de distância
            </h2>
            
            <p className="text-green-100 text-lg md:text-xl leading-[1.5] max-w-3xl mx-auto font-medium">
              Junte-se a <span className="text-white font-semibold">+500 profissionais</span> que já saíram do modo{' '}
              <span className="text-green-200 font-semibold">"dinheiro parado"</span> com a Sofina
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8 md:mb-10 text-green-100 text-sm">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-200" />
              <span>Resultado em <strong className="text-white">3 minutos</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-200" />
              <span><strong className="text-white">30 dias</strong> grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-200" />
              <span><strong className="text-white">+500</strong> já na lista</span>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="mb-8 md:mb-10">
            <Button 
              onClick={onScrollToForm}
              className="bg-white text-green-700 hover:bg-green-50 text-base md:text-lg py-4 px-8 md:py-5 md:px-10 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              Quero meu plano financeiro agora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>

          {/* Security Text */}
          <div className="text-green-100 text-sm leading-[1.5] max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-green-200" />
              <span className="font-medium text-white">Sem compromisso</span>
            </div>
            <p>
              Cancele quando quiser. Sem taxas escondidas, sem pegadinhas.{' '}
              <span className="text-white font-semibold">100% transparente.</span>
            </p>
          </div>

          {/* Urgency Element */}
          <div className="mt-8 md:mt-10 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 text-green-100 text-sm">
              <div className="w-2 h-2 bg-green-200 rounded-full animate-pulse" />
              <span>
                <strong className="text-white">127</strong> pessoas fizeram o diagnóstico hoje
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalCTA;
