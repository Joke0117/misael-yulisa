import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number; // Qué tanto del elemento debe verse para activarse (0 a 1)
  delay?: number;     // Retraso en segundos
  width?: "full" | "auto"; // Para controlar el ancho del contenedor
}

const ScrollReveal = ({ 
  children, 
  className, 
  threshold = 0.1, 
  delay = 0,
  width = "full" 
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el elemento entra en pantalla...
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Una vez visible, dejamos de observar para que no parpadee al subir/bajar
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px" // Se activa un poco antes de que suba del todo
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        // Clases base para la transición
        "transition-all duration-1000 ease-out transform",
        // Estado Invisible vs Visible
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-16", // Empieza 16px más abajo y transparente
        width === "full" ? "w-full" : "w-auto",
        className
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;