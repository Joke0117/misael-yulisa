import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import floralFrame from "../assets/floral-frame.png"; 
// Importamos la nueva imagen de fondo
import lujoFrame from "../assets/lujo-frame.png"; 
import MusicPlayer from "./MusicPlayer"; 

const Countdown = () => {
  const weddingDate = new Date("2026-01-10T10:00:00-05:00"); 
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = +weddingDate - +now;
      let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

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
    <section className="relative bg-background overflow-hidden min-h-[350px] flex flex-col items-center justify-center pt-0 pb-4 -mt-4">
      
      {/* Difuminado superior */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 md:h-48 z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--background)) 10%, transparent 100%)',
        }}
      />

      <div className="relative flex flex-col items-center justify-center w-full">
        
        {/* --- REPRODUCTOR DE MÚSICA --- */}
        <MusicPlayer />

        {/* --- CONTENEDOR PRINCIPAL --- */}
        <div className="relative mt-8 md:mt-12 w-full flex justify-center items-center max-w-4xl mx-auto">
            
            {/* --- DECORACIÓN DE FONDO (lujo-frame.png) --- */}
            {/* - z-0: Detrás de todo.
               - w-[150%]: Más ancho que el contenedor para que las ondas se extiendan bien a los lados.
               - opacity-90: Para que se vea claro pero no compita demasiado.
            */}
            <img 
              src={lujoFrame}
              alt="Decoración de fondo"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[120%] max-w-none h-auto object-cover z-0 opacity-90 pointer-events-none"
            />

            {/* --- IMAGEN FLORAL --- */}
            {/* z-10: Encima de la decoración de lujo */}
            <img 
              src={floralFrame} 
              alt="Decoración Floral"
              className="relative z-10 w-full min-w-[450px] max-w-[700px] h-auto object-contain drop-shadow-sm opacity-100"
            />

            {/* --- CONTADOR CIRCULAR --- */}
            {/* z-20: Encima de todo */}
            <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-full w-[220px] h-[220px] md:w-[360px] md:h-[360px] shadow-[0_0_30px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center border-4 border-[#F2EDE8]">
              
              {/* Título */}
              <h3 className="text-2xl md:text-5xl font-serif text-[#C49B74] mb-1 md:mb-5 font-bold tracking-wide">
                Falta
              </h3>

              {/* Números y Etiquetas */}
              <div className="flex items-center justify-center gap-1 md:gap-4">
                
                {/* Días */}
                <div className="flex flex-col items-center w-10 md:w-16">
                  <span className="text-2xl md:text-5xl font-bold text-[#6D8A9F] leading-none">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] md:text-base text-[#9EBECF] mt-0.5 md:mt-2 font-serif">
                    días
                  </span>
                </div>

                {/* Separador */}
                <div className="h-6 md:h-10 w-px bg-[#9EBECF]/50"></div>

                {/* Horas */}
                <div className="flex flex-col items-center w-10 md:w-16">
                  <span className="text-2xl md:text-5xl font-bold text-[#6D8A9F] leading-none">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[10px] md:text-base text-[#9EBECF] mt-0.5 md:mt-2 font-serif">
                    hs
                  </span>
                </div>

                {/* Separador */}
                <div className="h-6 md:h-10 w-px bg-[#9EBECF]/50"></div>

                {/* Minutos */}
                <div className="flex flex-col items-center w-10 md:w-16">
                  <span className="text-2xl md:text-5xl font-bold text-[#6D8A9F] leading-none">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-[10px] md:text-base text-[#9EBECF] mt-0.5 md:mt-2 font-serif">
                    min
                  </span>
                </div>

                {/* Separador */}
                <div className="h-6 md:h-10 w-px bg-[#9EBECF]/50"></div>

                {/* Segundos */}
                <div className="flex flex-col items-center w-10 md:w-16">
                  <span className="text-2xl md:text-5xl font-bold text-[#6D8A9F] leading-none">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-[10px] md:text-base text-[#9EBECF] mt-0.5 md:mt-2 font-serif">
                    seg
                  </span>
                </div>

              </div>

              {/* Corazón */}
              <div className="mt-2 md:mt-6 text-[#C49B74] animate-pulse">
                 <Heart fill="currentColor" className="w-5 h-5 md:w-8 md:h-8" />
              </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;