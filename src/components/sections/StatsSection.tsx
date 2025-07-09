
import { useEffect, useState } from "react";
import { COMPANY_CONFIG } from "@/config/company";

const stats = [
  { 
    id: 1, 
    name: "Years in Business", 
    value: parseInt(new Date().getFullYear().toString()) - parseInt(COMPANY_CONFIG.FOUNDED),
    suffix: "+"
  },
  { 
    id: 2, 
    name: "Projects Completed", 
    value: 200,
    suffix: "+"
  },
  { 
    id: 3, 
    name: "Happy Clients", 
    value: 150,
    suffix: "+"
  },
  { 
    id: 4, 
    name: "Team Members", 
    value: 50,
    suffix: "+"
  },
];

export const StatsSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            stats.forEach((stat, index) => {
              const duration = 2000;
              const stepTime = 20;
              const steps = duration / stepTime;
              const increment = stat.value / steps;
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  setCounters(prev => {
                    const newCounters = [...prev];
                    newCounters[index] = stat.value;
                    return newCounters;
                  });
                  clearInterval(timer);
                } else {
                  setCounters(prev => {
                    const newCounters = [...prev];
                    newCounters[index] = Math.floor(current);
                    return newCounters;
                  });
                }
              }, stepTime);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="stats-section" className="section-padding bg-gradient-to-r from-blue-900/20 to-purple-900/20">
      <div className="container-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2 counter-animate">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.name}
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
