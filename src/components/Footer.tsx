
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Returns Policy", href: "/returns" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
  contact: [
    { name: "Contact Us", href: "/contact" },
    { name: "Industries", href: "/industries" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: COMPANY_CONFIG.SOCIAL.linkedin, icon: Linkedin },
  { name: "Twitter", href: COMPANY_CONFIG.SOCIAL.twitter, icon: Twitter },
  { name: "GitHub", href: COMPANY_CONFIG.SOCIAL.github, icon: Github },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-white/10">
      <div className="container-padding">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link 
                to="/" 
                className="text-xl font-bold gradient-text hover:scale-105 transition-transform inline-block"
                onClick={scrollToTop}
              >
                {COMPANY_CONFIG.COMPANY_NAME}
              </Link>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                {COMPANY_CONFIG.DESCRIPTION}
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  {COMPANY_CONFIG.EMAIL}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  {COMPANY_CONFIG.PHONE}
                </div>
                <div className="flex items-start text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  {COMPANY_CONFIG.ADDRESS}
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Company</h3>
              <ul className="mt-6 space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={scrollToTop}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Legal</h3>
              <ul className="mt-6 space-y-3">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={scrollToTop}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Connect</h3>
              <ul className="mt-6 space-y-3">
                {footerLinks.contact.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={scrollToTop}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <div className="flex space-x-4">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {COMPANY_CONFIG.COMPANY_NAME}. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-4 md:mt-0">
                Made with ❤️ for innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
