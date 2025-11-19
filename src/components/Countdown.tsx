import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const Countdown = () => {
  const weddingDate = new Date("2026-01-10T16:00:00"); // 10 de enero de 2026 a las 4 PM
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = +weddingDate - +now;

      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 bg-background text-wedding-deep overflow-hidden">
      
      {/* NUEVO: Capa de Difuminado (Fade-In) en la parte superior */}
      {/* Esto ayuda a mezclar la sección Countdown con el degradado inferior de WeddingHero */}
      <div 
        className="absolute top-0 left-0 right-0 h-48 z-5" // h-48 para que coincida o sea similar a la de WeddingHero
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 100%)',
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10"> {/* Añadido relative z-10 */}
        <h2 className="text-4xl md:text-5xl font-bold text-wedding-deep mb-4">
          Cuenta Regresiva
        </h2>
        <p className="text-xl md:text-2xl text-wedding-medium mb-12">
          ¡Faltan solo...!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <Card key={unit} className="p-6 text-center shadow-lg border-wedding-medium bg-gradient-to-br from-white to-background hover:shadow-xl transition-all duration-300">
              <div className="text-5xl md:text-6xl font-extrabold text-wedding-gold mb-2">
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-lg md:text-xl font-semibold text-wedding-deep capitalize">
                {unit === 'days' && 'Días'}
                {unit === 'hours' && 'Horas'}
                {unit === 'minutes' && 'Minutos'}
                {unit === 'seconds' && 'Segundos'}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;