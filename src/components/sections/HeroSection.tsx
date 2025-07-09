
import { ArrowRight, Play, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { COMPANY_CONFIG } from "@/config/company";

export const HeroSection = () => {
  const handleCallNow = () => {
    window.open(`tel:${COMPANY_CONFIG.PHONE}`, '_self');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-background"
      >
        <source src="https://cdn.pixabay.com/video/2019/04/01/22646-325240142_large.mp4" type="video/mp4" />
      </video>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20 z-10" />

      {/* Content */}
      <div className="relative z-20 container-padding text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Building the
            <span className="block gradient-text animate-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Future of Tech
            </span>
          </h1>
          
          {/* Key Value Proposition */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl font-semibold text-primary mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              🚀 Premium Software Solutions That Scale Your Business
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              We craft cutting-edge software solutions that transform businesses and drive innovation. 
              From AI-powered applications to scalable cloud architectures.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Play className="mr-2 w-5 h-5" />
                View Services
              </Button>
            </Link>
            
            <Button 
              onClick={handleCallNow}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 border border-green-400/50 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/25"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: {COMPANY_CONFIG.PHONE}
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};
