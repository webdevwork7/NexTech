
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <PortfolioSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
