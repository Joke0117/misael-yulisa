import { Card } from "@/components/ui/card";
import { Clock, Camera, Utensils } from "lucide-react";

const Schedule = () => {
  const scheduleItems = [
    {
      time: "10:00 AM",
      title: "Ceremonia",
      icon: Clock,
      description: "Iglesia Centro Cristiano Visión Pentecostés",
    },
    {
      time: "12:00 PM",
      title: "Fotografías",
      icon: Camera,
      description: "Sesión de fotos con los novios",
    },
    {
      time: "12:45 PM",
      title: "Comida",
      icon: Utensils,
      description: "Celebración y banquete",
    },
  ];

  return (
    <section className="py-20 wedding-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-wedding-deep mb-4">
          Itinerario
        </h2>
        <p className="text-center text-wedding-medium mb-12 text-lg">
          Programa del día especial
        </p>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-wedding-gold/30" />
          
          {scheduleItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative pl-20 pb-12 last:pb-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0">
                  <div className="w-16 h-16 rounded-full bg-wedding-gold flex items-center justify-center shadow-lg border-4 border-white">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-wedding-medium/20">
                  <div className="text-2xl font-bold text-wedding-gold mb-1">
                    {item.time}
                  </div>
                  <div className="text-xl font-semibold text-wedding-deep mb-1">
                    {item.title}
                  </div>
                  <div className="text-wedding-medium">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
