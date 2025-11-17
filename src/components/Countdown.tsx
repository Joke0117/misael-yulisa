import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const Countdown = () => {
  const targetDate = new Date("2026-01-10T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const CountdownItem = ({ value, label }: { value: number; label: string }) => (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-wedding-medium shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="text-5xl md:text-6xl font-bold text-wedding-deep mb-2">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm md:text-base text-wedding-medium uppercase tracking-wider">
        {label}
      </div>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-background to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-wedding-deep mb-4">
          Cuenta Regresiva
        </h2>
        <p className="text-center text-wedding-medium mb-12 text-lg">
          ¡Faltan solo...!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          <CountdownItem value={timeLeft.days} label="Días" />
          <CountdownItem value={timeLeft.hours} label="Horas" />
          <CountdownItem value={timeLeft.minutes} label="Minutos" />
          <CountdownItem value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
