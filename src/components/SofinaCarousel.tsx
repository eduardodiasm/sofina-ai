
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const SofinaCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
    <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-14 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.02),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Como a Sofina ajuda você
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Descubra como nossa IA transforma sua jornada financeira em apenas alguns passos
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto overflow-x-hidden">
          <Carousel 
            setApi={setApi}
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
            <CarouselContent className="-ml-2 sm:-ml-4">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80 hover:-translate-y-1 rounded-2xl overflow-hidden h-full group">
                    <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col items-center text-center h-full">
                      {/* Image container with optimized sizing */}
                      <div className="mb-3 sm:mb-4 lg:mb-5 w-full flex justify-center">
                        <div className="relative">
                          <img 
                            src={slide.image} 
                            alt={slide.title}
                            className="w-48 sm:w-56 lg:w-48 h-auto rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300 max-w-[200px] sm:max-w-[224px] lg:max-w-[192px]"
                          />
                          {/* Subtle overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                        </div>
                      </div>
                      
                      {/* Content with improved typography */}
                      <div className="flex-1 flex flex-col justify-center space-y-3">
                        <h3 className="text-lg sm:text-xl font-bold text-green-700 leading-tight group-hover:text-green-800 transition-colors duration-200">
                          {slide.title}
                        </h3>
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                          {slide.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Enhanced navigation buttons - positioned to avoid overflow */}
            <CarouselPrevious className="absolute left-2 sm:left-4 lg:-left-12 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 hover:border-green-300 transition-all duration-200 w-10 h-10 sm:w-12 sm:h-12 shadow-lg hover:shadow-xl" />
            <CarouselNext className="absolute right-2 sm:right-4 lg:-right-12 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 hover:border-green-300 transition-all duration-200 w-10 h-10 sm:w-12 sm:h-12 shadow-lg hover:shadow-xl" />
          </Carousel>
          
          {/* Modern slide indicators */}
          <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current - 1
                    ? 'w-8 bg-green-600 shadow-md'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SofinaCarousel;
