import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const BibleVerse = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-12 border-wedding-gold bg-gradient-to-br from-wedding-light to-white shadow-2xl">
          <BookOpen className="w-12 h-12 mx-auto mb-6 text-wedding-gold" />
          <div className="text-center">
            <p className="text-2xl md:text-3xl text-wedding-deep leading-relaxed italic mb-6">
              "Dios ha llenado nuestros corazones con su inmenso amor y sabemos que, con él, lograremos construir un hogar fuerte, lleno de amor y paz."
            </p>
            <div className="w-20 h-0.5 bg-wedding-gold mx-auto my-6" />
            <p className="text-xl md:text-2xl text-wedding-medium leading-relaxed">
              Nos gustaría contar con tu presencia y tu apoyo al comenzar esta gran aventura juntos.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BibleVerse;
