
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const SofinaCarousel = () => {
  const slides = [
    {
      image: "/lovable-uploads/8122a502-d622-4ffb-ad19-6aefca60c39b.png",
      title: "Diagnóstico em 3 minutos",
      description: "Clareza total sobre onde você está e onde quer chegar."
    },
    {
      image: "/lovable-uploads/b871262f-b92c-40eb-844d-5f77880a6a7c.png",
      title: "Plano inicial personalizado",
      description: "Estratégia simples, construída para seu objetivo."
    },
    {
      image: "/lovable-uploads/31d5bc3d-4a0b-4afc-8c63-6ced993f1457.png",
      title: "Nunca perca o dia de investir",
      description: "Lembretes mensais + orientação prática."
    },
    {
      image: "/lovable-uploads/debaecae-e2a1-43cb-9fa8-ac607c5fb4f9.png",
      title: "Insights semanais que mantêm você na rota",
      description: "Mantenha-se atualizado e com conceitos em dia, sem precisar maratonar o Primo Rico."
    }
  ];

  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Como a Sofina ajuda você
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              breakpoints: {
                '(min-width: 640px)': { slidesToScroll: 2 },
                '(min-width: 1024px)': { slidesToScroll: 3 }
              }
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="pl-3 sm:pl-4 basis-[90%] sm:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 h-full group">
                    <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center h-full">
                      {/* Imagem reduzida no mobile */}
                      <div className="mb-6 relative">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/20 group-hover:ring-green-400/50 transition-all duration-300">
                          <img 
                            src={slide.image} 
                            alt={slide.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        {/* Efeito de brilho */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-center space-y-4">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 leading-tight">
                          {slide.title}
                        </h3>
                        <p className="text-gray-200 text-sm sm:text-base leading-relaxed opacity-90">
                          {slide.description}
                        </p>
                      </div>
                      
                      {/* Indicador visual */}
                      <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute -left-8 sm:-left-12 top-1/2 -translate-y-1/2 border-green-400/30 bg-white/10 backdrop-blur-sm text-green-400 hover:bg-green-400 hover:text-white transition-all duration-200 w-10 h-10 sm:w-12 sm:h-12 shadow-lg" />
            <CarouselNext className="absolute -right-8 sm:-right-12 top-1/2 -translate-y-1/2 border-green-400/30 bg-white/10 backdrop-blur-sm text-green-400 hover:bg-green-400 hover:text-white transition-all duration-200 w-10 h-10 sm:w-12 sm:h-12 shadow-lg" />
          </Carousel>
          
          {/* Indicadores de slides na parte inferior */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 rounded-full bg-white/30 hover:bg-green-400/70 transition-colors duration-200"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SofinaCarousel;
