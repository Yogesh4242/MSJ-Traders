import { Building2, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="w-8 h-8 text-primary mr-2" />
              <span className="text-2xl font-bold text-gradient-gold">MSJ TRADERS</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              MSJ Traders is a leading contractor specializing in the demolition of  buildings, heavy concrete structures, multistory buildings, and commercial properties, handling all types of demolition work.
            </p>
          </div>

          {/* Licensing & Registration */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Licensing & Registration</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>CIDB Registration: CE Grade 9</li>
              <li>License No: DM/2024/001234</li>
              <li>VAT No: 4123456789</li>
              <li>Company Reg: 2004/123456/07</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Clients
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} MSJ Traders. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;