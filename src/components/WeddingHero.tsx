import { Heart } from "lucide-react";
import heroBackground from "@/assets/hero-background.png"; 

const WeddingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Fondo de Imagen HD con Capa Oscura (z-0) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        {/* Capa de Oscurecimiento (40% de negro) para asegurar que el texto blanco resalte */}
        <div className="absolute inset-0 bg-black/40" /> 
      </div>
      
      {/* MODIFICADO: Capa de Difuminado (Fade-Out) - Aumentada la altura para una transición más suave */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 z-5" // Altura aumentada a h-64
        style={{
          background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)',
        }}
      />
      
      {/* Contenido (z-10) */}
      <div className="container mx-auto px-4 text-center z-10 text-white">
        
        {/* Names (Texto principal se mantiene en blanco/dorado) */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Heart className="w-12 h-12 mx-auto mb-6 text-wedding-gold fill-wedding-gold" />
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white drop-shadow-lg">
            Misael <span className="text-wedding-gold">&</span> Yulisa
          </h1>
        </div>

        {/* Date */}
        <div className="animate-fade-in-up mt-8" style={{ animationDelay: "0.4s" }}>
          <div className="text-2xl md:text-3xl mb-2 text-white/90">
            Nos casamos
          </div>
          <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
            10 de Enero, 2026
          </div>
          <div className="text-xl md:text-2xl mt-2 text-white/90">
            Providencia, Bolívar
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center my-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="w-20 h-0.5 bg-wedding-gold" />
          <Heart className="w-6 h-6 mx-4 text-wedding-gold fill-wedding-gold" />
          <div className="w-20 h-0.5 bg-wedding-gold" />
        </div>

        {/* MODIFICADO: Versículo Bíblico con texto oscuro y fondo semitransparente */}
        <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-lg md:text-xl italic text-wedding-deep drop-shadow-sm bg-white/50 p-2 rounded-lg backdrop-blur-sm">
            "Y nosotros hemos conocido y creído el amor que Dios tiene para con nosotros. Dios es amor, y el que permanece en amor permanece en Dios y Dios en él. (1 Juan 4:16)"
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;