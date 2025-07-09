
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FinTech Trading Platform",
    description: "Real-time cryptocurrency trading platform with advanced analytics and AI-powered insights.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&crop=center&q=80",
    tech: ["React", "Node.js", "WebSocket", "AI/ML"],
    category: "Finance"
  },
  {
    title: "Healthcare Management System",
    description: "Comprehensive patient management system with telemedicine capabilities and HIPAA compliance.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center&q=80",
    tech: ["Vue.js", "Python", "PostgreSQL", "WebRTC"],
    category: "Healthcare"
  },
  {
    title: "E-commerce Marketplace",
    description: "Multi-vendor marketplace with AI-powered recommendations and advanced analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center&q=80",
    tech: ["Next.js", "Microservices", "MongoDB", "Stripe"],
    category: "E-commerce"
  }
];

export const PortfolioSection = () => {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore some of our recent work that showcases our expertise across different industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group glass-effect border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.currentTarget.src = `https://via.placeholder.com/600x400/1a1a1a/ffffff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="opacity-90">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                    <Button size="sm" variant="secondary" className="opacity-90">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-2 py-1 bg-white/10 text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
