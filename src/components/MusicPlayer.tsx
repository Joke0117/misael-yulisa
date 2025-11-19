import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
// Importa tu archivo de audio. Asegúrate de que el archivo 'por-siempre.mp3' esté en la carpeta 'src/assets'
import weddingMusic from "@/assets/por-siempre.mp3"; 

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Función central para intentar reproducir la música
    const playMusic = async () => {
      if (audioRef.current) {
        // Reinicia el elemento de audio para asegurar que está listo al recargar
        audioRef.current.load(); 
        
        try {
          // 1. Intenta reproducir inmediatamente (Autoplay). Fallará en la mayoría de navegadores.
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          // 2. Si es bloqueado, establece el estado en pausa y espera interacción.
          console.log("Autoplay bloqueado. La música se iniciará con el primer clic en la página.");
          setIsPlaying(false);
        }
      }
    };

    // Función que se ejecuta con la primera interacción del usuario
    const handleInteraction = () => {
      playMusic(); // Vuelve a intentar la reproducción
      // Una vez que la música comienza (o lo intenta), eliminamos el listener.
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };

    // Intentamos reproducir al montar el componente (en cada recarga)
    playMusic();

    // Se configuran los listeners para detectar la primera interacción del usuario en la página.
    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);
    document.addEventListener("keydown", handleInteraction);

    // Función de limpieza para desmontar el componente
    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Reproducir (este intento siempre funciona porque es un clic directo del botón)
        audioRef.current.play().catch((e) => console.error("Error al reproducir:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={togglePlay}
        size="lg"
        // Mostramos el efecto 'pulse' si no está sonando para animar al usuario a hacer clic
        className={`rounded-full w-16 h-16 shadow-2xl bg-wedding-gold hover:bg-wedding-gold/90 text-white transition-all ${
          !isPlaying ? 'animate-pulse hover:animate-none' : ''
        }`}
      >
        {isPlaying ? (
          <Volume2 className="w-8 h-8" />
        ) : (
          <VolumeX className="w-8 h-8" />
        )}
      </Button>
      <audio
        ref={audioRef}
        loop
        src={weddingMusic} 
      />
    </div>
  );
};

export default MusicPlayer;