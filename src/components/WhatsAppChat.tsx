
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from 'lucide-react';

const WhatsAppChat = () => {
  const messages = [
    // Bloco 1 - Onboarding & Diagnóstico
    { sender: 'user', text: 'Oi, quero entender onde estou errando com meu dinheiro.' },
    { sender: 'sofina', text: 'Oi! Sou a Sofina, seu copiloto financeiro imparcial. Em 3 min montamos seu plano inicial. Bora? 🚀' },
    { sender: 'sofina', text: 'Qual sua renda líquida mensal?' },
    { sender: 'user', text: 'R$ 12.000' },
    { sender: 'sofina', text: 'Tem alguma reserva hoje?' },
    { sender: 'user', text: 'R$ 20.000' },
    { sender: 'sofina', text: 'Show! Qual seu maior objetivo?' },
    { sender: 'user', text: 'Ter renda passiva aos 50.' },

    // Bloco 2 - Plano Personalizado
    { sender: 'sofina', text: 'Plano pronto! 🎯\nPara chegar a R$ 10 mil/mês de renda passiva aos 50 você precisa de ~R$ 3 mi.\nCom aportes de R$ 2.400/mês e 6% a.a. reais, chegamos lá em 22 anos.' },
    { sender: 'sofina', text: '💸 Alocação sugerida\n• 40% Tesouro IPCA 2045\n• 30% ETFs BOVA11 + IVVB11\n• 20% Fundo multimercado\n• 10% Caixa estratégico' },
    { sender: 'sofina', text: 'Quer ver o passo a passo pra investir agora?' },

    // Bloco 3 - Acompanhamento Contínuo
    { sender: 'sofina', text: '📆 Salário na conta? Hora do aporte!\nSugestão de hoje:\n• R$ 960 Tesouro IPCA\n• R$ 960 ETFs\n• R$ 480 Fundo' },
    { sender: 'sofina', text: 'Se quiser ajustar valores ou metas, me avisa aqui e recalculo na hora. 😉' }
  ];

  const scrollToForm = () => {
    const waitlistForm = document.querySelector('#waitlist-form');
    if (waitlistForm) {
      waitlistForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Conversa real com a Sofina no WhatsApp
          </h2>
          <p className="text-lg text-slate-600">
            Veja, na prática, como o copiloto financeiro funciona — diagnóstico, plano e acompanhamento, tudo em mensagens simples.
          </p>
        </div>

        {/* Chat Container */}
        <Card className="max-w-2xl mx-auto mb-8 overflow-hidden shadow-lg">
          {/* Chat Header */}
          <div className="bg-[#25D366] p-4 text-white">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/fd78fa33-45f4-446a-b755-5a2c417a9d4e.png" 
                alt="Sofina" 
                className="w-10 h-10 rounded-full bg-white p-1"
              />
              <div>
                <h3 className="font-semibold">Sofina</h3>
                <p className="text-sm opacity-90">online agora ✅</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <CardContent className="p-0 bg-gray-50 min-h-[600px]">
            <div className="p-4 space-y-4 font-inter">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'both' }}
                >
                  <div className="flex items-start gap-2 max-w-[80%]">
                    {message.sender === 'sofina' && (
                      <img 
                        src="/lovable-uploads/fd78fa33-45f4-446a-b755-5a2c417a9d4e.png" 
                        alt="Sofina" 
                        className="w-8 h-8 rounded-full bg-white p-1 mt-1 flex-shrink-0"
                      />
                    )}
                    
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-[#F1F1F1] text-slate-900 rounded-br-sm'
                          : 'bg-[#25D366] text-white rounded-bl-sm'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line">
                        {message.text}
                      </p>
                    </div>

                    {message.sender === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center mt-1 flex-shrink-0">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-slate-600 mb-6">
            Receba sua primeira conversa com a Sofina em 3 min. É grátis e 100% via WhatsApp.
          </p>
          <Button 
            onClick={scrollToForm}
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg font-semibold"
          >
            Quero meu plano no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppChat;
