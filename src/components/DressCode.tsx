import { Card } from "@/components/ui/card";
import { Shirt, Sparkles } from "lucide-react";

const DressCode = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-wedding-deep mb-12">
          Código de Vestimenta
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {/* Women */}
          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-wedding-medium bg-gradient-to-br from-white to-background">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-wedding-gold" />
            <h3 className="text-3xl font-bold text-wedding-deep mb-4">Ellas</h3>
            <p className="text-2xl text-wedding-medium font-semibold">
              Divinas
            </p>
          </Card>

          {/* Men */}
          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-wedding-medium bg-gradient-to-br from-white to-background">
            <Shirt className="w-12 h-12 mx-auto mb-4 text-wedding-gold" />
            <h3 className="text-3xl font-bold text-wedding-deep mb-4">Ellos</h3>
            <p className="text-2xl text-wedding-medium font-semibold">
              Guapos
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DressCode;