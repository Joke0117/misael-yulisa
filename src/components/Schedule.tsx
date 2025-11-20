import { Clock, Camera, Utensils, Church } from "lucide-react";
// Asegúrate de tener la imagen o usar el color directo. 
// En este caso usaré un color azul vibrante (#5D9BCE) similar a tu imagen de referencia.

const Schedule = () => {
  const scheduleItems = [
    {
      time: "10:00 AM",
      title: "Ceremonia",
      subtitle: "Iglesia Centro Cristiano",
      icon: Church,
    },
    {
      time: "12:00 PM",
      title: "Fotografías",
      subtitle: "Sesión de fotos",
      icon: Camera,
    },
    {
      time: "12:45 PM",
      title: "Comida",
      subtitle: "Celebración",
      icon: Utensils,
    },
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-wedding-deep mb-16 animate-fade-in">
          Itinerario
        </h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Línea Vertical Central - Ahora más visible y azul */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#5D9BCE]/50 -translate-x-1/2 h-full z-0" />

          <div className="space-y-12 md:space-y-16 relative z-10">
            {scheduleItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="relative flex items-center justify-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.3}s` }} // Efecto escalonado (uno tras otro)
                >
                  
                  {/* Lado Izquierdo: Título y Subtítulo */}
                  <div className="flex-1 text-right pr-6 md:pr-10 transition-transform hover:-translate-x-2 duration-300">
                    <h3 className="text-2xl md:text-3xl font-serif text-wedding-deep font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-wedding-medium text-sm md:text-base font-sans">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Centro: Ícono Circular */}
                  {/* COLOR AZUL VIVO (#5D9BCE) para que no se vea opaco */}
                  <div className="relative z-10 shrink-0 group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#5D9BCE] flex items-center justify-center shadow-xl border-4 border-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-[#4A8AC0]">
                      <Icon className="w-8 h-8 md:w-9 md:h-9 text-white transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                  </div>

                  {/* Lado Derecho: Hora */}
                  {/* Texto con el mismo azul vivo */}
                  <div className="flex-1 pl-6 md:pl-10 transition-transform hover:translate-x-2 duration-300">
                    <p className="text-2xl md:text-3xl font-serif text-[#5D9BCE] font-bold">
                      {item.time}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
