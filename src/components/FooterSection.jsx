import { Building2, MapPin, Phone, Mail, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Building2 className="w-10 h-10 text-primary mr-3" />
              <span className="text-3xl font-bold text-gradient-gold">MSJ TRADERS</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
              Professional demolition services with over 35 years of excellence, precision, and safety. 
              We specialize in residential, commercial, industrial, and specialized demolition projects.
            </p>
            {/* Rating section moved here */}
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm font-bold">5/5</span>
            </div>
            <p className="text-muted-foreground text-sm font-medium">
              Rated 5/5 based on customer reviews
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground border-b pb-3 border-border">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors flex items-center group font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors flex items-center group font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#clients" className="text-muted-foreground hover:text-primary transition-colors flex items-center group font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Clients
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center group font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center group font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground border-b pb-3 border-border">CONTACT INFO</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                    No.57/34, Perambur High Road,<br />
                    Jamaliya,<br />
                    Chennai - 600 012
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <a 
                    href="tel:+919841040740" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    +91 9841040740
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <a 
                    href="mailto:mohideenmsj@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm break-all font-medium"
                  >
                    mohideenmsj@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left side - Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm font-medium">
                © {currentYear} MSJ Traders. All rights reserved.
              </p>
            </div>

            {/* Right side - Designed by */}
            <div className="text-center md:text-right">
              <a 
                href="https://enhanzers.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Site by: ENHANZERS.COM
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;