
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80",
    content: "NexTech Solutions transformed our business with their innovative approach. The AI-powered analytics platform they built increased our efficiency by 300%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CTO, FinanceFlow",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    content: "Outstanding technical expertise and project management. They delivered our complex trading platform ahead of schedule with exceptional quality.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, HealthTech Pro",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffbab6d0?w=150&q=80",
    content: "The team's attention to HIPAA compliance and user experience was remarkable. They created a healthcare platform that our patients absolutely love.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the leaders who've transformed their businesses with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="glass-effect border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/30" />
                  <p className="text-muted-foreground italic pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
