
import { Building2, Heart, ShoppingCart, Truck, Banknote, GraduationCap, Factory, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const industries = [
  {
    icon: Banknote,
    title: "Finance & Banking",
    description: "Secure, compliant financial solutions that meet regulatory requirements and enhance customer experiences.",
    solutions: [
      "Digital banking platforms",
      "Payment processing systems",
      "Risk management tools",
      "Cryptocurrency exchanges",
      "Regulatory compliance software",
      "Financial analytics dashboards"
    ],
    challenges: ["Security", "Compliance", "Real-time processing", "Scalability"],
    color: "from-green-400 to-blue-500"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant healthcare platforms that improve patient outcomes and streamline operations.",
    solutions: [
      "Electronic health records",
      "Telemedicine platforms",
      "Patient management systems",
      "Medical imaging software",
      "Clinical decision support",
      "Healthcare analytics"
    ],
    challenges: ["Data privacy", "Interoperability", "Regulatory compliance", "User experience"],
    color: "from-red-400 to-pink-500"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description: "Scalable online retail solutions that drive sales and enhance customer satisfaction.",
    solutions: [
      "Multi-vendor marketplaces",
      "Inventory management systems",
      "Customer relationship platforms",
      "Mobile commerce apps",
      "AI-powered recommendations",
      "Analytics and reporting"
    ],
    challenges: ["Scalability", "Performance", "User experience", "Integration"],
    color: "from-orange-400 to-red-500"
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Supply chain optimization tools that improve efficiency and reduce operational costs.",
    solutions: [
      "Fleet management systems",
      "Warehouse management",
      "Route optimization",
      "Inventory tracking",
      "Supplier portals",
      "Predictive maintenance"
    ],
    challenges: ["Real-time tracking", "Integration", "Scalability", "Cost optimization"],
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property management platforms that streamline operations and enhance tenant experiences.",
    solutions: [
      "Property management systems",
      "Virtual property tours",
      "Tenant portals",
      "Maintenance scheduling",
      "Financial reporting",
      "Market analysis tools"
    ],
    challenges: ["Multi-property management", "Integration", "Mobile accessibility", "Reporting"],
    color: "from-purple-400 to-blue-500"
  },
  {
    icon: GraduationCap,
    title: "Education & E-learning",
    description: "Learning management systems that enhance educational experiences and outcomes.",
    solutions: [
      "Learning management systems",
      "Student information systems",
      "Virtual classrooms",
      "Assessment platforms",
      "Educational content delivery",
      "Analytics and reporting"
    ],
    challenges: ["Accessibility", "Scalability", "Engagement", "Data security"],
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial solutions that optimize production processes and improve quality control.",
    solutions: [
      "MES systems",
      "Quality management",
      "Production planning",
      "Equipment monitoring",
      "Supply chain integration",
      "Predictive analytics"
    ],
    challenges: ["Integration", "Real-time monitoring", "Compliance", "Efficiency"],
    color: "from-gray-400 to-blue-500"
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Travel and hospitality solutions that enhance guest experiences and operational efficiency.",
    solutions: [
      "Booking systems",
      "Customer management",
      "Revenue optimization",
      "Mobile check-in",
      "Guest experience platforms",
      "Analytics dashboards"
    ],
    challenges: ["Seasonality", "Integration", "User experience", "Real-time availability"],
    color: "from-cyan-400 to-blue-500"
  }
];

const Industries = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Industries We <span className="gradient-text">Serve</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We bring deep industry expertise and domain knowledge to deliver solutions that 
              understand your unique business challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card 
                  key={industry.title}
                  className="glass-effect border-white/10 hover:border-primary/50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mr-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold">{industry.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-base">
                      {industry.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Our Solutions:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {industry.solutions.map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Challenges We Address:</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.challenges.map((challenge) => (
                            <span 
                              key={challenge}
                              className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full"
                            >
                              {challenge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry <span className="gradient-text">Expertise</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">8+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">200+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
