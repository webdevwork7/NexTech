
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <StatsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <HowWeWorkSection />
      <TechStackSection />
      <IndustriesSection />
      <PortfolioSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
