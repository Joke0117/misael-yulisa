import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import weddingMusic from "@/assets/por-siempre.mp3"; 

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playMusic = async () => {
      if (audioRef.current) {
        audioRef.current.load(); 
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("Autoplay bloqueado. Esperando interacción.");
          setIsPlaying(false);
        }
      }
    };

    const handleInteraction = () => {
      playMusic();
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };

    playMusic();

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);
    document.addEventListener("keydown", handleInteraction);

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
        audioRef.current.play().catch((e) => console.error("Error:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    // Posicionado absolutamente para quedar centrado en la parte superior de su contenedor
    <div className="absolute z-50 top-[2%] md:top-[5%] left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in">
      
      {/* Texto "Toca aquí" */}
      <span className="text-[9px] md:text-xs uppercase tracking-widest text-[#C49B74] mb-2 font-bold animate-pulse drop-shadow-sm bg-white/80 px-3 py-1 rounded-full border border-[#C49B74]/20">
        Toca aquí
      </span>

      {/* Botón de Reproducción */}
      <button 
        onClick={togglePlay}
        className="bg-[#C49B74] hover:bg-[#a88b6d] text-white rounded-full p-3 md:p-4 shadow-xl transition-all transform hover:scale-110 flex items-center justify-center border-4 border-white/30"
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 md:w-6 md:h-6 fill-current" />
        ) : (
          <Play className="w-4 h-4 md:w-6 md:h-6 fill-current ml-1" />
        )}
      </button>

      <audio ref={audioRef} src={weddingMusic} loop />
    </div>
  );
};

export default MusicPlayer;