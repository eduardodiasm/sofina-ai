
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const SofinaCarousel = () => {
  const slides = [
    {
      image: "/lovable-uploads/2bde72de-edb6-4322-9798-5845661bc178.png",
      title: "Diagnóstico em 3 minutos",
      description: "Clareza total sobre onde você está e onde quer chegar."
    },
    {
      image: "/lovable-uploads/ce78f769-77f0-443a-ab6a-2c7ceb6b2ec1.png",
      title: "Seu plano personalizado",
      description: "Estratégia simples, construída para seu objetivo."
    },
    {
      image: "/lovable-uploads/fd78fa33-45f4-446a-b755-5a2c417a9d4e.png",
      title: "Nunca perca o dia de investir",
      description: "Lembretes pontuais + orientação prática."
    },
    {
      image: "/lovable-uploads/2bde72de-edb6-4322-9798-5845661bc178.png",
      title: "Pílula Financeira",
      description: "Insights semanais para turbinar sua disciplina."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-900">
          Como a Sofina ajuda você
        </h3>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white rounded-lg shadow-sm border border-slate-200 h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="aspect-[4/5] mb-4 overflow-hidden rounded-lg bg-slate-100">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold mb-3" style={{ color: '#00A86B' }}>
                          {slide.title}
                        </h4>
                        <p className="text-sm leading-relaxed" style={{ color: '#333333' }}>
                          {slide.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="border-2 bg-white hover:bg-slate-50 -left-4 md:-left-12" 
              style={{ borderColor: '#00A86B', color: '#00A86B' }}
            />
            <CarouselNext 
              className="border-2 bg-white hover:bg-slate-50 -right-4 md:-right-12" 
              style={{ borderColor: '#00A86B', color: '#00A86B' }}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SofinaCarousel;
