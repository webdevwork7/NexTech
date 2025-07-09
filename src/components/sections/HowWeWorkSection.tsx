
import { Search, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We analyze your requirements, understand your business goals, and research your target audience.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "Design",
    description: "Our design team creates intuitive user experiences and stunning visual interfaces.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Code,
    title: "Development",
    description: "Our developers bring designs to life using cutting-edge technologies and best practices.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Rocket,
    title: "Delivery",
    description: "We deploy, test, and launch your solution with ongoing support and maintenance.",
    color: "from-orange-500 to-red-500"
  }
];

export const HowWeWorkSection = () => {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process ensures successful project delivery from concept to launch
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.title}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
