import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const WeddingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden wedding-gradient">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-wedding-gold blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-wedding-medium blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        {/* Names */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Heart className="w-12 h-12 mx-auto mb-6 text-wedding-gold" />
          <h1 className="text-6xl md:text-8xl font-bold text-wedding-deep mb-4">
            Misael <span className="text-wedding-gold">&</span> Yulisa
          </h1>
        </div>

        {/* Date */}
        <div className="animate-fade-in-up mt-8" style={{ animationDelay: "0.4s" }}>
          <div className="text-2xl md:text-3xl text-wedding-medium mb-2">
            Nos casamos
          </div>
          <div className="text-4xl md:text-5xl font-bold text-wedding-deep">
            10 de Enero, 2026
          </div>
          <div className="text-xl md:text-2xl text-wedding-medium mt-2">
            Providencia, Bolívar
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center my-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="w-20 h-0.5 bg-wedding-gold" />
          <Heart className="w-6 h-6 mx-4 text-wedding-gold fill-wedding-gold" />
          <div className="w-20 h-0.5 bg-wedding-gold" />
        </div>

        {/* Bible verse preview */}
        <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-lg md:text-xl text-wedding-deep italic">
            "Dios ha llenado nuestros corazones con su inmenso amor..."
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-wedding-medium rounded-full flex justify-center">
            <div className="w-1 h-3 bg-wedding-medium rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;
