import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Wifi, Zap, Shield } from "lucide-react";
import heroImage1 from "@/assets/hero-banner-1.jpg";
import heroImage2 from "@/assets/hero-banner-2.jpg";
import heroImage3 from "@/assets/hero-banner-3.jpg";

const slides = [
  {
    image: heroImage1,
    title: "Internet Fibra Óptica de Alta Velocidade",
    subtitle: "Conecte-se ao futuro com a SpeedNet",
    description: "Planos a partir de 100MB para sua casa ou empresa",
    cta: "Ver Planos"
  },
  {
    image: heroImage2,
    title: "Cobertura Total em Sobradinho",
    subtitle: "Levamos internet de qualidade para toda a região",
    description: "Atendemos Lagoa Grande, Vale da Conquista, Tataui e muito mais",
    cta: "Verificar Cobertura"
  },
  {
    image: heroImage3,
    title: "Suporte Técnico Especializado",
    subtitle: "Estamos sempre prontos para ajudar você",
    description: "Atendimento 24/7 e instalação gratuita",
    cta: "Falar Conosco"
  }
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-secondary">
                  {slide.subtitle}
                </p>
                <p className="text-lg mb-8 text-gray-200">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg"
                  >
                    {slide.cta}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-secondary scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Features Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-lg">
                <Wifi className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Fibra Óptica</h3>
                <p className="text-sm text-gray-300">Tecnologia de ponta</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-secondary p-2 rounded-lg text-secondary-foreground">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Alta Velocidade</h3>
                <p className="text-sm text-gray-300">Até 1GB de velocidade</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-lg">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Suporte 24/7</h3>
                <p className="text-sm text-gray-300">Sempre disponível</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;