import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ClientsSection = () => {
  const sectionRef = useRef(null);
  const topClientsRef = useRef(null);

  // Top featured clients
  const topClients = [
    { name: 'Aveng Group', color: 'from-blue-500 to-blue-600' },
    { name: 'Murray & Roberts', color: 'from-green-500 to-green-600' },
    { name: 'WBHO Construction', color: 'from-red-500 to-red-600' },
    { name: 'Stefanutti Stocks', color: 'from-purple-500 to-purple-600' },
    { name: 'Group Five', color: 'from-orange-500 to-orange-600' },
  ];

  // Other clients grid
  const otherClients = [
    'Basil Read', 'Raubex Group', 'Concor', 'Wilson Bayly', 'Grinaker-LTA',
    'Liviero Group', 'Shaft Sinkers', 'Esor Construction', 'Haw & Inglis', 'Matomo Projects',
    'Bombela Civils', 'Hlahatsi Group', 'Franki Africa', 'Esorfranki', 'Mzansi Civil',
    'Civils 2000', 'Roadmac', 'KWV Construction', 'Umso Construction', 'Khato Civils',
    'Nyeleti Consulting', 'Umhlaba Consulting', 'NMC Construction', 'Tenza Holdings', 'BKS Projects',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.clients-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.clients-title',
          start: 'top 80%',
        },
      });

      // Top clients diagonal reveal
      gsap.from('.top-client-card', {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -80 : 80),
        y: (index) => (index % 2 === 0 ? 40 : -40),
        rotation: (index) => (index % 2 === 0 ? -5 : 5),
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: topClientsRef.current,
          start: 'top 70%',
        },
      });

      // Other clients grid reveal
      gsap.from('.other-client-card', {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: {
          amount: 1,
          from: 'start',
          grid: 'auto',
        },
        scrollTrigger: {
          trigger: '.other-clients-grid',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="clients" ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="clients-title text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-gold">
          Our Trusted Clients
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Partnering with South Africa's leading construction and development companies
        </p>

        {/* Top Featured Clients */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
            Featured Partners
          </h3>
          <div
            ref={topClientsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
          >
            {topClients.map((client, index) => (
              <div
                key={client.name}
                className="top-client-card group"
              >
                <div className="relative bg-card rounded-lg p-8 border-2 border-border hover:border-primary transition-all duration-300 hover-glow cursor-pointer h-full flex flex-col items-center justify-center text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {client.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Clients Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
            Other Valued Clients
          </h3>
          <div className="other-clients-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {otherClients.map((client) => (
              <div
                key={client}
                className="other-client-card group cursor-pointer"
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary hover:bg-card transition-all duration-300 h-full flex items-center justify-center text-center hover:shadow-gold">
                  <p className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                    {client}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;