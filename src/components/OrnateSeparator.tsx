// src/components/OrnateSeparator.tsx

import * as React from "react";
import { Separator } from "@/components/ui/separator"; 
import { Heart } from "lucide-react";

const OrnateSeparator = () => {
  return (
    // Un separador elegante y centrado con el ícono de corazón dorado.
    <div className="relative w-full py-6 flex justify-center bg-transparent">
      <div className="flex items-center w-full max-w-lg">
        {/* Línea Izquierda */}
        <Separator className="flex-1 bg-wedding-gold h-px shadow-md opacity-60" />
        
        {/* Corazón Central */}
        <Heart className="w-5 h-5 mx-4 text-wedding-gold fill-wedding-gold opacity-80" />
        
        {/* Línea Derecha */}
        <Separator className="flex-1 bg-wedding-gold h-px shadow-md opacity-60" />
      </div>
    </div>
  );
};

export default OrnateSeparator;