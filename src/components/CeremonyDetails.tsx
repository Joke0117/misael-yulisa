import { MapPin, Church, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import blueFlower from "@/assets/blue-flower-accent.png";

const CeremonyDetails = () => {
  return (
    // Se mantiene el espaciado original (py-20) sin márgenes negativos
    <section className="py-20 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-wedding-deep mb-16">
          Detalles de la Ceremonia
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Location */}
          <Card className="relative overflow-hidden p-8 text-center hover:shadow-xl transition-all duration-300 border-wedding-medium bg-gradient-to-br from-white to-background">
            {/* Imagen de fondo floral */}
            <img 
              src={blueFlower} 
              alt="Decoración" 
              className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" 
            />
            
            {/* Contenido con z-10 para que esté sobre la imagen */}
            <div className="relative z-10">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-wedding-gold" />
              <h3 className="text-2xl font-bold text-wedding-deep mb-2">Lugar</h3>
              <p className="text-wedding-medium">
                Providencia, Bolívar
              </p>
            </div>
          </Card>

          {/* Church */}
          <Card className="relative overflow-hidden p-8 text-center hover:shadow-xl transition-all duration-300 border-wedding-medium bg-gradient-to-br from-white to-background">
            <img 
              src={blueFlower} 
              alt="Decoración" 
              className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" 
            />
            
            <div className="relative z-10">
              <Church className="w-12 h-12 mx-auto mb-4 text-wedding-gold" />
              <h3 className="text-2xl font-bold text-wedding-deep mb-2">Iglesia</h3>
              <p className="text-wedding-medium">
                Centro Cristiano Visión Pentecostés
              </p>
            </div>
          </Card>

          {/* Time */}
          <Card className="relative overflow-hidden p-8 text-center hover:shadow-xl transition-all duration-300 border-wedding-medium bg-gradient-to-br from-white to-background">
            <img 
              src={blueFlower} 
              alt="Decoración" 
              className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none" 
            />
            
            <div className="relative z-10">
              <Clock className="w-12 h-12 mx-auto mb-4 text-wedding-gold" />
              <h3 className="text-2xl font-bold text-wedding-deep mb-2">Hora</h3>
              <p className="text-wedding-medium">
                10:00 AM
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CeremonyDetails;