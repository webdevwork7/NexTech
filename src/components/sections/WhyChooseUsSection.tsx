
import { Award, Users, Shield, Zap, Target, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "5+ years of experience delivering high-quality software solutions across various industries."
  },
  {
    icon: Users,
    title: "Scalable Teams",
    description: "Flexible team scaling to match your project requirements and timelines."
  },
  {
    icon: Shield,
    title: "Quality-First Approach",
    description: "Rigorous testing and quality assurance processes ensure reliable, bug-free software."
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development methodologies for rapid prototyping and quick time-to-market."
  },
  {
    icon: Target,
    title: "Client-Focused",
    description: "Your success is our priority. We work closely with you to achieve your business goals."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance for all our delivered solutions."
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-card/30 to-background">
      <div className="container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Us?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine technical expertise with business understanding to deliver solutions that drive real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={reason.title}
                className="group glass-effect border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
