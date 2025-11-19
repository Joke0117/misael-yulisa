import { MapPin, Church, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
// Se eliminó la importación de LateralFlower

const CeremonyDetails = () => {
  return (
    // Aseguramos el color de fondo consistente
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Se eliminó la etiqueta <LateralFlower /> */}
      <div className="container mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-wedding-deep mb-16">
          Detalles de la Ceremonia
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Location */}
          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-wedding-medium bg-gradient-to-br from-white to-background">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-wedding-gold" />
            <h3 className="text-2xl font-bold text-wedding-deep mb-2">Lugar</h3>
            <p className="text-wedding-medium">
              Providencia, Bolívar
            </p>
          </Card>

          {/* Church */}
          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-wedding-medium bg-gradient-to-br from-white to-background">
            <Church className="w-12 h-12 mx-auto mb-4 text-wedding-gold" />
            <h3 className="text-2xl font-bold text-wedding-deep mb-2">Iglesia</h3>
            <p className="text-wedding-medium">
              Centro Cristiano Visión Pentecostés
            </p>
          </Card>

          {/* Time */}
          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-wedding-medium bg-gradient-to-br from-white to-background">
            <Clock className="w-12 h-12 mx-auto mb-4 text-wedding-gold" />
            <h3 className="text-2xl font-bold text-wedding-deep mb-2">Hora</h3>
            <p className="text-wedding-medium">
              10:00 AM
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CeremonyDetails;