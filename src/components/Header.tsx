
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_CONFIG } from "@/config/company";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    scrollToTop();
  };

  const handleCallNow = () => {
    window.open(`tel:${COMPANY_CONFIG.PHONE}`, '_self');
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-white/10 backdrop-blur-xl">
      <nav className="container-padding">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
              onClick={scrollToTop}
            >
              {COMPANY_CONFIG.COMPANY_NAME}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                    location.pathname === item.href 
                      ? "text-primary border-b-2 border-primary" 
                      : "text-muted-foreground"
                  }`}
                  onClick={scrollToTop}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={handleCallNow}
              size="sm"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-500 transform hover:scale-105 border border-green-400/50 hover:shadow-xl hover:shadow-green-400/30 text-xs px-3 py-2 h-9 backdrop-blur-sm"
            >
              <Phone className="w-3 h-3 mr-1" />
              <span className="hidden lg:inline">Call: </span>{COMPANY_CONFIG.PHONE}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-white/10 transition-all duration-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-effect border-b border-white/10 animate-slide-up backdrop-blur-xl">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:text-primary hover:bg-white/5 rounded-md ${
                    location.pathname === item.href 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  onClick={() => {
                    handleCallNow();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 border border-green-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-green-400/30 backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call: {COMPANY_CONFIG.PHONE}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
