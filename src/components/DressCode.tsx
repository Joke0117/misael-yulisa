import { Card } from "@/components/ui/card";
import { Shirt, Sparkles } from "lucide-react";
import blueFlower from "../assets/blue-flower-accent.png";

const DressCode = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-wedding-deep mb-12">
          Código de Vestimenta
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {/* Women */}
          <Card className="relative overflow-hidden p-8 text-center hover:shadow-xl transition-all duration-300 border-wedding-medium bg-gradient-to-br from-white to-background">
            <img src={blueFlower} alt="Decoración" className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" />
            
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-wedding-gold" />
              <h3 className="text-3xl font-bold text-wedding-deep mb-4">Ellas</h3>
              <p className="text-2xl text-wedding-medium font-semibold">
                Divinas
              </p>
            </div>
          </Card>

          {/* Men */}
          <Card className="relative overflow-hidden p-8 text-center hover:shadow-xl transition-all duration-300 border-wedding-medium bg-gradient-to-br from-white to-background">
             <img src={blueFlower} alt="Decoración" className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" />
            
            <div className="relative z-10">
              <Shirt className="w-12 h-12 mx-auto mb-4 text-wedding-gold" />
              <h3 className="text-3xl font-bold text-wedding-deep mb-4">Ellos</h3>
              <p className="text-2xl text-wedding-medium font-semibold">
                Guapos
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DressCode;