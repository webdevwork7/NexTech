
import { Code, Smartphone, Palette, Cloud, Brain, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your unique business requirements.",
    features: ["Full-stack development", "API integration", "Legacy modernization"]
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    description: "Responsive web applications and native mobile apps that deliver exceptional user experiences.",
    features: ["Cross-platform apps", "Progressive web apps", "App store deployment"]
  },
  {
    icon: Palette,
    title: "UI/UX & Product Design",
    description: "Human-centered design solutions that combine beautiful aesthetics with seamless functionality.",
    features: ["User research", "Prototyping", "Design systems"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description: "Scalable cloud infrastructure and automated deployment pipelines for modern applications.",
    features: ["Cloud migration", "CI/CD pipelines", "Infrastructure as code"]
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Intelligent systems that leverage machine learning to automate processes and drive insights.",
    features: ["Predictive analytics", "Natural language processing", "Computer vision"]
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
    features: ["Security audits", "Penetration testing", "Compliance consulting"]
  }
];

export const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help businesses thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group glass-effect border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
