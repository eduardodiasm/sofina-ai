
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const WhatsAppChat = () => {
  const slides = [
    {
      title: "Diagnóstico em 3 perguntas",
      messages: [
        { sender: 'user', text: 'Oi! Quero entender onde estou errando com meu dinheiro.' },
        { sender: 'sofina', text: 'Oi! Sou a Sofina, seu copiloto financeiro imparcial. Em 3 min faço seu diagnóstico. Bora? 🚀' },
        { sender: 'sofina', text: 'Qual sua **renda líquida mensal**?' },
        { sender: 'user', text: 'R$ 12.000' },
        { sender: 'sofina', text: 'Você já tem alguma **reserva** hoje?' },
        { sender: 'user', text: 'R$ 20.000' },
        { sender: 'sofina', text: 'Qual **parcela mensal** de investimento seria confortável?' },
        { sender: 'user', text: 'R$ 2.400' },
        { sender: 'sofina', text: '…', isTyping: true }
      ]
    },
    {
      title: "Seu plano em segundos",
      messages: [
        { sender: 'sofina', text: 'Plano pronto! 🎯 Para chegar a **R$ 10 mil/mês de renda passiva** aos 50 você precisará de ~R$ 3 mi.' },
        { sender: 'sofina', text: 'Com aportes de **R$ 2.400/mês** e rentabilidade líquida média 4,8% a.a. *(Monte Carlo p50 = 5,3%, p95 = 7,1%)*, alcançamos em **22 anos**.' },
        { sender: 'sofina', text: '💸 **Alocação sugerida**\n• 40% Tesouro IPCA 2045 (taxa 0%)\n• 30% ETFs **BOVA11 + IVVB11** (custo 0,20%)\n• 20% Fundo multimercado (vol. baixa, D+1)\n• 10% Caixa estratégico (CDB 110% CDI)' },
        { sender: 'sofina', text: '**Custos totais**: ~0,34% a.a. — **zero comissão para a Sofina**.' }
      ]
    },
    {
      title: "Acompanhamento contínuo",
      messages: [
        { sender: 'sofina', text: '📆 Salário na conta? Hora do aporte! Sugestão de hoje:\n• R$ 960 Tesouro IPCA\n• R$ 960 ETFs\n• R$ 480 Fundo' },
        { sender: 'sofina', text: 'Quer **ajustar metas ou valores**? Me avise que recalculo na hora 😉' },
        { sender: 'sofina', text: 'Ativar **reajuste automático anual** pela inflação do salário? *(Sim / Não)*' }
      ]
    }
  ];

  const scrollToForm = () => {
    const waitlistForm = document.querySelector('#waitlist-form');
    if (waitlistForm) {
      waitlistForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderMessage = (message: any, index: number) => {
    const isTyping = message.isTyping;
    
    return (
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
            } ${isTyping ? 'animate-pulse' : ''}`}
          >
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {message.text.split('**').map((part: string, i: number) => 
                i % 2 === 0 ? part : <strong key={i}>{part}</strong>
              )}
            </p>
          </div>

          {message.sender === 'user' && (
            <div className="w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center mt-1 flex-shrink-0">
              <User className="w-5 h-5 text-white" />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="sofina-chat-demo" className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Conversa real com a Sofina no WhatsApp
          </h2>
          <p className="text-lg text-slate-600">
            Diagnóstico, plano e acompanhamento — tudo em mensagens simples. Veja como funciona na prática.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slide, slideIndex) => (
                <CarouselItem key={slideIndex}>
                  <Card className="w-full h-[520px] overflow-hidden shadow-lg" style={{ borderRadius: '20px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
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
                    <CardContent className="p-0 bg-gray-50 h-[456px] overflow-y-auto">
                      <div className="p-4 space-y-4 font-inter">
                        {/* Slide Title */}
                        <div className="text-center">
                          <span className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full">
                            {slide.title}
                          </span>
                        </div>
                        
                        {/* Messages */}
                        {slide.messages.map((message, messageIndex) => 
                          renderMessage(message, messageIndex)
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-slate-600 mb-6">
            Receba sua primeira conversa com a Sofina em 3 min. É grátis e 100% via WhatsApp.
          </p>
          <Button 
            onClick={scrollToForm}
            className="bg-[#25D366] hover:bg-[#1fb855] text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg"
          >
            Receber meu plano grátis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppChat;
