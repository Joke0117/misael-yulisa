import WeddingHero from "@/components/WeddingHero";
import Countdown from "@/components/Countdown";
import CeremonyDetails from "@/components/CeremonyDetails";
import Schedule from "@/components/Schedule";
import DressCode from "@/components/DressCode";
import Parents from "@/components/Parents";
import BibleVerse from "@/components/BibleVerse";
import Gifts from "@/components/Gifts";
import OrnateSeparator from "@/components/OrnateSeparator"; 

// ELIMINADO: import MusicPlayer ... (Ya está dentro de Countdown)

import { Instagram, Facebook, MessageCircle } from "lucide-react";

const DEVELOPER_NAME = "ING. Martínez Rodelo";
const INSTAGRAM_URL = "https://www.instagram.com/joke_0117?igsh=cmV5cTFhaTQzdnUw";
const FACEBOOK_URL = "https://www.facebook.com/share/1EwDGMVSGa/";
const WHATSAPP_NUMBER = "3142296307"; 
const WHATSAPP_MESSAGE = "Hola, me gustaría que me desarrollaras una web como esta.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeddingHero />
      
      {/* El MusicPlayer ahora vive dentro de Countdown, en la parte superior */}
      <Countdown />
      
      <OrnateSeparator /> 

      <CeremonyDetails />
      
      <OrnateSeparator /> 

      <Schedule />
      
      <OrnateSeparator /> 

      <DressCode />
      
      <OrnateSeparator /> 

      <Parents />
      
      <OrnateSeparator /> 

      <BibleVerse />
      
      <OrnateSeparator /> 

      <Gifts /> 
      
      {/* ELIMINADO: <MusicPlayer /> para evitar duplicados */}
      
      {/* Footer */}
      <footer className="py-8 bg-wedding-deep text-white text-center">
        
        <p className="text-sm opacity-80">
          Desarrollado por
        </p>
        <p className="text-xl font-bold text-wedding-gold mb-4">
          {DEVELOPER_NAME}
        </p>

        <div className="flex justify-center space-x-6 mb-4">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-6 h-6 text-white hover:text-wedding-gold transition-colors" />
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-6 h-6 text-white hover:text-wedding-gold transition-colors" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle className="w-6 h-6 text-white hover:text-wedding-gold transition-colors" />
          </a>
        </div>

        <p className="text-lg mb-2">
          Misael & Yulisa
        </p>
        <p className="text-sm opacity-80">
          10 de Enero, 2026 • Providencia, Bolívar
        </p>
      </footer>
    </div>
  );
};

export default Index;