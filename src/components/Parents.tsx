import { Card } from "@/components/ui/card";
import { Heart, Users } from "lucide-react";
import blueFlower from "../assets/blue-flower-accent.png";

const Parents = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Heart className="w-12 h-12 mx-auto mb-6 text-wedding-gold" />
          <h2 className="text-3xl md:text-4xl font-bold text-wedding-deep mb-6">
            Con la bendición de Dios y de nuestros padres
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Bride's Parents */}
          <Card className="relative overflow-hidden p-8 bg-white/90 backdrop-blur-sm border-wedding-medium hover:shadow-xl transition-all duration-300">
            <img src={blueFlower} alt="Decoración" className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" />
            
            <div className="relative z-10">
              <Users className="w-10 h-10 mx-auto mb-4 text-wedding-gold" />
              <h3 className="text-2xl font-bold text-wedding-deep mb-6 text-center">
                Padres de la Novia
              </h3>
              <div className="space-y-3 text-center">
                <p className="text-xl text-wedding-medium font-semibold">
                  Nacira Chamorro
                </p>
                <p className="text-xl text-wedding-medium font-semibold">
                  José Daniel Gómez
                </p>
              </div>
            </div>
          </Card>

          {/* Groom's Parents */}
          <Card className="relative overflow-hidden p-8 bg-white/90 backdrop-blur-sm border-wedding-medium hover:shadow-xl transition-all duration-300">
            <img src={blueFlower} alt="Decoración" className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" />
            
            <div className="relative z-10">
              <Users className="w-10 h-10 mx-auto mb-4 text-wedding-gold" />
              <h3 className="text-2xl font-bold text-wedding-deep mb-6 text-center">
                Padres del Novio
              </h3>
              <div className="space-y-3 text-center">
                <p className="text-xl text-wedding-medium font-semibold">
                  Cristina Crespo
                </p>
                <p className="text-xl text-wedding-medium font-semibold">
                  Ángel Rodelo
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Parents;