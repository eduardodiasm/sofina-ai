
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { MessageCircle, CheckCheck } from 'lucide-react';

const WhatsAppCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const conversations = [
    {
      type: "diagnosis",
      title: "Diagnóstico Inicial",
      messages: [
        { sender: "sofina", text: "Olá! 👋 Vou fazer algumas perguntas para entender seu perfil financeiro. Qual sua renda mensal líquida?", time: "14:32" },
        { sender: "user", text: "Oi Sofina! Minha renda líquida é R$ 8.500", time: "14:33" },
        { sender: "sofina", text: "Perfeito! E quanto você consegue guardar por mês atualmente?", time: "14:33" },
        { sender: "user", text: "Consigo guardar uns R$ 1.200 por mês", time: "14:35" },
        { sender: "sofina", text: "Ótimo! Com base no seu perfil, vou montar sua estratégia personalizada... 🔄", time: "14:35" }
      ]
    },
    {
      type: "plan",
      title: "Plano Personalizado",
      messages: [
        { sender: "sofina", text: "✅ Seu plano está pronto! Aqui está sua estratégia:", time: "09:15" },
        { sender: "sofina", text: "💰 R$ 600/mês → Tesouro IPCA+ 2029\n💹 R$ 400/mês → Fundos de ações\n🏦 R$ 200/mês → Reserva de emergência", time: "09:15" },
        { sender: "user", text: "Nossa, bem específico! E se eu quiser mudar algo?", time: "09:18" },
        { sender: "sofina", text: "Claro! Posso ajustar qualquer coisa. O plano é 100% flexível às suas necessidades 😊", time: "09:18" }
      ]
    },
    {
      type: "reminder",
      title: "Lembretes Mensais",
      messages: [
        { sender: "sofina", text: "🔔 Lembrete do mês: Hora de investir seus R$ 1.200!", time: "10:00" },
        { sender: "sofina", text: "Links diretos:\n• Tesouro IPCA: [link]\n• Fundo XP Ações: [link]\n• Nubank (reserva): [link]", time: "10:00" },
        { sender: "user", text: "Já fiz os aportes! 🚀", time: "15:30" },
        { sender: "sofina", text: "Parabéns! 🎉 Você está R$ 1.200 mais próximo da sua liberdade financeira", time: "15:31" }
      ]
    },
    {
      type: "insights",
      title: "Insights Semanais", 
      messages: [
        { sender: "sofina", text: "📊 Seu relatório semanal:", time: "08:00" },
        { sender: "sofina", text: "✅ Você investiu R$ 3.600 nos últimos 3 meses\n📈 Rentabilidade: +2.1% (acima da meta)\n🎯 Faltam R$ 86.400 para sua reserva ideal", time: "08:00" },
        { sender: "sofina", text: "💡 Dica: Com a Selic em queda, considere aumentar 10% em ações este mês", time: "08:01" },
        { sender: "user", text: "Adorei a sugestão! Como faço?", time: "12:22" }
      ]
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 leading-[1.3]">
            Veja como é na prática
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-[1.5]">
            Conversas reais no WhatsApp — do diagnóstico aos insights semanais
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel 
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              slidesToScroll: 1
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {conversations.map((conversation, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-4/5 lg:basis-3/5">
                  <Card className="border-0 bg-gradient-to-br from-green-50 to-white shadow-xl rounded-3xl overflow-hidden h-full">
                    <CardContent className="p-0 h-full">
                      {/* Phone Header */}
                      <div className="bg-green-600 text-white p-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">Sofina AI</h3>
                          <p className="text-green-100 text-xs">online</p>
                        </div>
                      </div>

                      {/* Chat Messages */}
                      <div className="p-4 space-y-3 bg-gray-50 min-h-[400px] max-h-[400px] overflow-y-auto">
                        {conversation.messages.map((message, msgIndex) => (
                          <div key={msgIndex} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                              message.sender === 'user' 
                                ? 'bg-green-500 text-white rounded-br-md' 
                                : 'bg-white text-slate-700 rounded-bl-md shadow-sm'
                            }`}>
                              <p className="whitespace-pre-line leading-[1.4]">{message.text}</p>
                              <div className={`flex items-center justify-end gap-1 mt-1 text-xs ${
                                message.sender === 'user' ? 'text-green-100' : 'text-slate-400'
                              }`}>
                                <span>{message.time}</span>
                                {message.sender === 'user' && <CheckCheck className="w-3 h-3" />}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Type Indicator */}
                      <div className="p-4 bg-gray-50 border-t">
                        <h4 className="font-semibold text-slate-900 text-center text-sm">
                          {conversation.title}
                        </h4>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute left-4 lg:-left-12 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 hover:border-green-300 transition-all duration-200 w-12 h-12 shadow-lg hover:shadow-xl" />
            <CarouselNext className="absolute right-4 lg:-right-12 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 hover:border-green-300 transition-all duration-200 w-12 h-12 shadow-lg hover:shadow-xl" />
          </Carousel>
          
          {/* Slide indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current - 1
                    ? 'w-8 bg-green-600 shadow-md'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para conversa ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCarousel;
