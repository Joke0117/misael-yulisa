import { Card } from "@/components/ui/card";
import { Gift } from "lucide-react";
import blueFlower from "../assets/blue-flower-accent.png";

const Gifts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
        <Card className="relative overflow-hidden max-w-4xl mx-auto p-12 text-center border-wedding-gold bg-white/95 backdrop-blur-sm shadow-2xl">
          
          {/* Fondo Floral */}
          <img src={blueFlower} alt="Decoración" className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" />

          <div className="relative z-10">
            <Gift className="w-12 h-12 mx-auto mb-6 text-wedding-gold" />
            <h2 className="text-3xl md:text-4xl font-bold text-wedding-deep mb-4">
              Obsequios
            </h2>
            <div className="w-20 h-0.5 bg-wedding-gold mx-auto my-6" />
            <p className="text-xl md:text-2xl text-wedding-deep leading-relaxed mb-4">
              Los obsequios son siempre bienvenidos, pero nunca obligatorios.
            </p>
            <p className="text-lg md:text-xl text-wedding-medium italic">
              ¡Todo lo que te pedimos es que estés aquí con nosotros!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Gifts;