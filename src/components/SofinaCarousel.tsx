
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
    <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Como a Sofina ajuda você
          </h2>
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
            <CarouselContent className="-ml-2 sm:-ml-4">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                  <Card className="border border-slate-200 rounded-lg shadow-sm bg-white h-full">
                    <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center h-full">
                      <div className="mb-4 sm:mb-6 w-full max-w-xs mx-auto">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-auto rounded-lg shadow-sm"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-lg sm:text-xl font-bold text-[#00A86B] mb-2 sm:mb-3 leading-tight">
                          {slide.title}
                        </h3>
                        <p className="text-[#333333] text-sm sm:text-base leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute -left-8 sm:-left-12 top-1/2 -translate-y-1/2 border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B] hover:text-white transition-colors duration-200 w-8 h-8 sm:w-10 sm:h-10" />
            <CarouselNext className="absolute -right-8 sm:-right-12 top-1/2 -translate-y-1/2 border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B] hover:text-white transition-colors duration-200 w-8 h-8 sm:w-10 sm:h-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SofinaCarousel;
