
import { Code, Smartphone, Palette, Cloud, Brain, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "End-to-end software development tailored to your specific business needs and requirements.",
    features: [
      "Full-stack web applications",
      "Enterprise software solutions",
      "API development and integration",
      "Legacy system modernization",
      "Microservices architecture",
      "Database design and optimization"
    ],
    technologies: ["React", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB"]
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    description: "Responsive web applications and cross-platform mobile apps that deliver exceptional user experiences.",
    features: [
      "Cross-platform mobile apps",
      "Progressive web applications",
      "Native iOS and Android apps",
      "App store deployment",
      "Mobile UI/UX design",
      "Performance optimization"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "PWA", "Ionic"]
  },
  {
    icon: Palette,
    title: "UI/UX & Product Design",
    description: "Human-centered design solutions that combine beautiful aesthetics with seamless functionality.",
    features: [
      "User experience research",
      "Interactive prototyping",
      "Design system creation",
      "Usability testing",
      "Brand identity design",
      "Accessibility compliance"
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle", "Framer"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description: "Scalable cloud infrastructure and automated deployment pipelines for modern applications.",
    features: [
      "Cloud migration strategies",
      "CI/CD pipeline setup",
      "Infrastructure as code",
      "Container orchestration",
      "Monitoring and logging",
      "Security best practices"
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Intelligent systems that leverage machine learning to automate processes and drive insights.",
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision applications",
      "Recommendation systems",
      "Chatbots and virtual assistants",
      "Data mining and analysis"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face"]
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
    features: [
      "Security audits and assessments",
      "Penetration testing",
      "Compliance consulting",
      "Incident response planning",
      "Security training programs",
      "Vulnerability management"
    ],
    technologies: ["OWASP", "NIST", "ISO 27001", "SOC 2", "GDPR", "HIPAA"]
  }
];

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive technology solutions to help businesses thrive in the digital age. 
              From concept to deployment, we're with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="glass-effect border-white/10 hover:border-primary/50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full"
                            >
                              {tech}
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container-padding">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
