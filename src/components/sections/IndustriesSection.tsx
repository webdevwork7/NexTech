
import { Building2, Heart, ShoppingCart, Truck, Banknote, GraduationCap } from "lucide-react";

const industries = [
  {
    icon: Banknote,
    title: "Finance & Banking",
    description: "Secure, compliant financial solutions",
    color: "from-green-400 to-blue-500"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant healthcare platforms",
    color: "from-red-400 to-pink-500"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Scalable online retail solutions",
    color: "from-orange-400 to-red-500"
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Supply chain optimization tools",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property management platforms",
    color: "from-purple-400 to-blue-500"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Learning management systems",
    color: "from-yellow-400 to-orange-500"
  }
];

export const IndustriesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-blue-900/10">
      <div className="container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We bring deep industry expertise to deliver solutions that understand your business challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={industry.title}
                className="group p-6 glass-effect border-white/10 rounded-xl hover:border-primary/50 transition-all duration-300 transform hover:scale-105 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
