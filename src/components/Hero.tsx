import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/igreja-hero.jpg";

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("introducao");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Patrimônio Histórico
          <span className="block text-italian-cream">Rotas Italianas</span>
        </h1>
        <p className="font-inter text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          A Imigração Italiana no Bairro Nereu Ramos
        </p>
        <p className="font-inter text-base md:text-lg mb-12 max-w-3xl mx-auto opacity-90">
          Descubra a rica história da comunidade italiana que moldou Jaraguá do Sul, preservando tradições, fé e cultura através das gerações.
        </p>
        
        <Button 
          onClick={scrollToContent}
          variant="outline"
          size="lg"
          className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-500 backdrop-blur-sm shadow-elegant"
        >
          Explorar História
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;