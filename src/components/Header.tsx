
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
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <nav className="container-padding">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold gradient-text hover:scale-105 transition-transform"
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
                  className={`text-sm font-medium transition-colors hover:text-primary ${
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
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 border border-green-400/50 hover:shadow-lg hover:shadow-green-400/25"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now: {COMPANY_CONFIG.PHONE}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-effect border-b border-white/10 animate-slide-up">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
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
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 border border-green-400/50"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: {COMPANY_CONFIG.PHONE}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
