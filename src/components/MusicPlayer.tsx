import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
// Importa tu nuevo archivo de audio. Asegúrate de que el archivo 'por-siempre.mp3' esté en la carpeta 'src/assets'
import weddingMusic from "@/assets/por-siempre.mp3"; 

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Función para intentar reproducir
    const playMusic = async () => {
      if (audioRef.current) {
        try {
          // Intenta reproducir inmediatamente
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          // Si es bloqueado, se mantiene en estado pausado y espera interacción
          console.log("Autoplay blocked by browser, waiting for user interaction. Click anywhere to start music.");
          setIsPlaying(false);
        }
      }
    };

    // 1. Intento inicial al cargar
    playMusic();

    // 2. Listener para activar el audio con la primera interacción del usuario
    const handleInteraction = () => {
      playMusic();
      // Una vez activado, limpiamos los listeners para que no se ejecuten más
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);
    document.addEventListener("keydown", handleInteraction);

    // Limpieza de listeners
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
        // Intenta reproducir si no está sonando
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
        className="rounded-full w-16 h-16 shadow-2xl bg-wedding-gold hover:bg-wedding-gold/90 text-white animate-pulse hover:animate-none transition-all"
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
        src={weddingMusic} // Usa el asset importado
      />
    </div>
  );
};

export default MusicPlayer;