import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Delay GSAP initialization to ensure DOM is ready
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Ensure elements are visible initially
        gsap.set(['.contact-content', '.contact-card'], { 
          opacity: 1, 
          y: 0,
          immediateRender: false 
        });

        gsap.from('.contact-content', {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });

        gsap.from('.contact-card', {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.contact-cards',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
      }, sectionRef);

      return () => {
        ctx.revert();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="contact-content max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/90">
            Ready to start your next project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="contact-cards grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="contact-card bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center group hover-glow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Phone</h3>
            <a 
              href="tel:‪+27123456789‬" 
              className="text-foreground hover:text-primary transition-colors"
            >
              +91 930384910
            </a>
          </div>

          <div className="contact-card bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center group hover-glow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
            <a 
              href="mailto:info@msjtraders.co.za" 
              className="text-foreground hover:text-primary transition-colors"
            >
              contact@msjtraders.com
            </a>
          </div>

          <div className="contact-card bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center group hover-glow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
            <p className="text-foreground">
              India,chennai
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            variant="hero"
            className="hover:scale-105 font-semibold px-8 py-6 text-lg bg-gray-800 hover:bg-primary text-white border border-gray-600 hover:border-primary transition-all duration-300 shadow-lg"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;