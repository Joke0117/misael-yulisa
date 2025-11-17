import WeddingHero from "@/components/WeddingHero";
import Countdown from "@/components/Countdown";
import CeremonyDetails from "@/components/CeremonyDetails";
import Schedule from "@/components/Schedule";
import DressCode from "@/components/DressCode";
import Parents from "@/components/Parents";
import BibleVerse from "@/components/BibleVerse";
import MusicPlayer from "@/components/MusicPlayer";
import weddingFlowers from "@/assets/wedding-flowers.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Decorative flower image */}
      <div className="absolute top-0 left-0 w-full h-96 overflow-hidden pointer-events-none z-0 opacity-20">
        <img 
          src={weddingFlowers} 
          alt="Wedding flowers decoration" 
          className="w-full h-full object-cover"
        />
      </div>
      <WeddingHero />
      <Countdown />
      <CeremonyDetails />
      <Schedule />
      <DressCode />
      <Parents />
      <BibleVerse />
      <MusicPlayer />
      
      {/* Footer */}
      <footer className="py-8 bg-wedding-deep text-white text-center">
        <p className="text-lg">
          Misael & Yulisa
        </p>
        <p className="text-sm mt-2 opacity-80">
          10 de Enero, 2026 • Providencia, Bolívar
        </p>
        <p className="text-xs mt-4 opacity-60">
          Develop ING. Martínez Rodelo
        </p>
      </footer>
    </div>
  );
};

export default Index;
