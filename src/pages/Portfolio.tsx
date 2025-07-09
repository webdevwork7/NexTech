
import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "FinTech Trading Platform",
    description: "Real-time cryptocurrency trading platform with advanced analytics, portfolio management, and AI-powered insights for institutional investors.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    tech: ["React", "Node.js", "WebSocket", "Redis", "PostgreSQL", "AI/ML"],
    category: "Finance",
    features: ["Real-time data", "Advanced analytics", "Risk management", "API integration"],
    results: "300% increase in trading volume, 50% reduction in latency"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Comprehensive patient management system with telemedicine capabilities, appointment scheduling, and HIPAA-compliant data handling.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80",
    tech: ["Vue.js", "Python", "PostgreSQL", "WebRTC", "Docker", "AWS"],
    category: "Healthcare",
    features: ["Telemedicine", "Patient records", "Appointment system", "Billing integration"],
    results: "40% reduction in administrative overhead, 95% patient satisfaction"
  },
  {
    id: 3,
    title: "E-commerce Marketplace",
    description: "Multi-vendor marketplace with AI-powered recommendations, advanced search capabilities, and comprehensive seller dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tech: ["Next.js", "Microservices", "MongoDB", "Stripe", "Elasticsearch", "Docker"],
    category: "E-commerce",
    features: ["Multi-vendor support", "AI recommendations", "Payment processing", "Analytics"],
    results: "200% increase in sales, 60% improvement in conversion rate"
  },
  {
    id: 4,
    title: "Supply Chain Analytics",
    description: "Comprehensive supply chain optimization platform with predictive analytics, inventory management, and real-time tracking.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
    tech: ["Angular", "Python", "TensorFlow", "Kafka", "Cassandra", "Kubernetes"],
    category: "Logistics",
    features: ["Predictive analytics", "Real-time tracking", "Inventory optimization", "Route planning"],
    results: "25% reduction in operational costs, 35% improvement in delivery times"
  },
  {
    id: 5,
    title: "EdTech Learning Platform",
    description: "Comprehensive learning management system with interactive content delivery, assessment tools, and progress tracking.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    tech: ["React", "Node.js", "MongoDB", "WebRTC", "Redis", "AWS"],
    category: "Education",
    features: ["Interactive content", "Video conferencing", "Assessment tools", "Progress tracking"],
    results: "85% student engagement rate, 30% improvement in learning outcomes"
  },
  {
    id: 6,
    title: "Real Estate CRM",
    description: "Complete real estate management platform with property listings, client management, and virtual tour capabilities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    tech: ["React", "Express", "PostgreSQL", "Three.js", "AWS S3", "Stripe"],
    category: "Real Estate",
    features: ["Property management", "Virtual tours", "Client CRM", "Document management"],
    results: "50% faster property sales, 40% increase in client satisfaction"
  }
];

const categories = ["All", "Finance", "Healthcare", "E-commerce", "Logistics", "Education", "Real Estate"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our recent work and see how we've helped businesses across various industries 
              achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8">
        <div className="container-padding">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                    : "border-white/20 hover:bg-white/10"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group glass-effect border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="opacity-90">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="secondary" className="opacity-90">
                        <Github className="w-4 h-4 mr-1" />
                        Case Study
                      </Button>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-xs px-2 py-1 bg-primary/90 text-white rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature) => (
                          <span 
                            key={feature}
                            className="text-xs px-2 py-1 bg-white/10 text-muted-foreground rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="text-xs px-2 py-1 bg-primary/20 text-primary rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-white/10">
                      <h4 className="text-sm font-semibold text-foreground mb-1">Results:</h4>
                      <p className="text-xs text-muted-foreground">{project.results}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container-padding">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us to discuss your next big idea.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
