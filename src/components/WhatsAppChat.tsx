
import { Card, CardContent } from "@/components/ui/card";
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
      title: "Você não está só",
      messages: [
        { sender: 'user', text: 'Oi, sinto que meu dinheiro não cresce como deveria.' },
        { sender: 'sofina', text: 'Eu te entendo — é frustrante trabalhar, ganhar bem e ver o dinheiro parado. Em 2 min vamos descobrir onde está o desvio e traçar o primeiro passo. Bora?' },
        { sender: 'sofina', text: '1️⃣ Quanto entra líquido por mês?' },
        { sender: 'user', text: 'R$ 12.000' },
        { sender: 'sofina', text: '2️⃣ E quanto você consegue investir sem apertar o orçamento?' },
        { sender: 'user', text: 'R$ 2.000' }
      ]
    },
    {
      title: "Radiografia financeira",
      messages: [
        { sender: 'sofina', text: 'Foto rápida da sua situação 👇' },
        { 
          sender: 'sofina', 
          text: '📊 **DASH RESUMO**\n• Reserva atual: R$ 20.000 (equiv. 2 meses de salário)\n• Reserva ideal: 6 meses → falta R$ 52.000\n• Objetivo declarado: independência aos 50 (em 22 anos)\n• Patrimônio alvo p/ renda de R$ 10.000/mês: R$ 3 mi',
          isStats: true
        },
        { sender: 'sofina', text: 'Se você continuar investindo R$ 2.000/mês em poupança (3% a.a.), chegará lá em **37 anos** 😕' },
        { sender: 'sofina', text: 'Boa notícia: redirecionando p/ ativos corretos (média 5% reais) o prazo cai para **22 anos** — **15 anos a menos**. Isso é o que chamamos de **Desvio de Liberdade**. Sentiu a diferença?' },
        { sender: 'user', text: 'Uau, faz sentido! E quais ativos?' }
      ]
    },
    {
      title: "Plano ação + Quick Win",
      messages: [
        { sender: 'sofina', text: 'Aqui está o primeiro passo de hoje (5 min) 🍀' },
        { 
          sender: 'sofina', 
          text: '✅ **PLANO QUICK WIN**\n• Transferir R$ 500 para Tesouro IPCA 2045 (link → passo a passo)\n• Ajustar aplicativo do banco para aportes automáticos de R$ 2.000 todo dia 5\n• Revisão mensal comigo: aviso quando for preciso rebalancear',
          isQuickWin: true
        },
        { sender: 'sofina', text: 'Fazendo só isso agora você:\n• Constrói reserva de emergência em 26 meses\n• Mantém patrimônio protegido da inflação\n• Garante probabilidade **> 70%** de independência em 22 anos' },
        { sender: 'sofina', text: 'Te ajudo a executar? É só clicar no botão "Começar agora" e continuamos por aqui.' }
      ]
    }
  ];

  const renderMessage = (message: any, index: number) => {
    const isTyping = message.isTyping;
    const isStats = message.isStats;
    const isQuickWin = message.isQuickWin;
    
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
                : isStats 
                ? 'bg-blue-50 border border-blue-200 text-slate-900 rounded-bl-sm'
                : isQuickWin
                ? 'bg-green-50 border border-green-200 text-slate-900 rounded-bl-sm'
                : 'bg-[#25D366] text-white rounded-bl-sm'
            } ${isTyping ? 'animate-pulse' : ''}`}
          >
            {(isStats || isQuickWin) && (
              <div className="mb-2">
                <span className={`text-xs font-semibold ${isStats ? 'text-blue-700' : 'text-green-700'}`}>
                  {isStats ? '📊 DASHBOARD' : '✅ AÇÃO IMEDIATA'}
                </span>
              </div>
            )}
            <p className={`text-sm leading-relaxed whitespace-pre-line ${isStats || isQuickWin ? 'text-slate-700' : ''}`}>
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
          <a 
            href="#form"
            className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1fb855] text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-colors"
          >
            Quero meu plano grátis
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppChat;
