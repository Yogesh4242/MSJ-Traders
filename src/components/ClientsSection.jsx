import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, X, MapPin, Calendar, Award } from 'lucide-react';
import lntLogo from './assets/images/clients/lntlogo.png';
import tatalogo from './assets/images/clients/tatalogo.png';
import bnrlogo from './assets/images/clients/bnrlogo.png';
import afconlogo from './assets/images/clients/afconslogo.png';
import ujwala from './assets/images/clients/ujwalalogo.png';


import lntCard from './assets/images/clients/lntcard1.png';
import tatacard from './assets/images/clients/tatacard.png';
import bnrcard from './assets/images/clients/bnrcard.png';
import afconscard from './assets/images/clients/afconscard.jpg';
import ujwalacard from './assets/images/clients/ujwalacard.jpg';

gsap.registerPlugin(ScrollTrigger);

const ClientsSection = () => {
  const sectionRef = useRef(null);
  const topClientsRef = useRef(null);
  const [selectedClient, setSelectedClient] = useState(null);

  // Top featured clients with detailed information and logos
  const topClients = [
    { 
      name: 'L&T', 
      color: 'from-blue-500 to-blue-600',
      logo: lntLogo,
      headerImage: lntCard,
      description: 'A leading infrastructure and resources group with operations across Africa, Australia, and Southeast Asia.',
      projects: ['Mooikloof Mega City', 'Gautrain Rapid Rail', 'Medupi Power Station'],
      location: 'Johannesburg, South Africa',
      since: 2000,
      specialization: 'Large-scale Infrastructure & Mining'
    },
    { 
      name: 'TATA', 
      color: 'from-green-500 to-green-600',
      logo: tatalogo, // Using L&T logo as fallback temporarily
      headerImage: tatacard, // Using L&T header as fallback temporarily
      description: 'A multinational engineering and construction company with expertise in underground mining, oil and gas, and infrastructure.',
      projects: ['Bokpoort CSP Plant', 'Gauteng Freeway Improvement', 'Sasol Mining Operations'],
      location: 'Johannesburg, South Africa',
      since: 1902,
      specialization: 'Engineering & Construction'
    },
    { 
      name: 'BNR', 
      color: 'from-red-500 to-red-600',
      logo: bnrlogo, // Using L&T logo as fallback temporarily
      headerImage: bnrcard, // Using L&T header as fallback temporarily
      description: 'One of the largest construction companies in South Africa with significant international presence in Australia and UK.',
      projects: ['Moses Mabhida Stadium', 'Gateway Theatre of Shopping', 'Pearl Qatar'],
      location: 'Johannesburg, South Africa',
      since: 1970,
      specialization: 'Building & Civil Engineering'
    },
    { 
      name: 'AFCONS', 
      color: 'from-purple-500 to-purple-600',
      logo: afconlogo, // Using L&T logo as fallback temporarily
      headerImage: afconscard , // Using L&T header as fallback temporarily
      description: 'A multi-disciplinary construction company offering services across building, civil engineering, and roads earthworks.',
      projects: ['King Shaka International Airport', 'Menlyn Maine Precinct', 'Durban Container Terminal'],
      location: 'Johannesburg, South Africa',
      since: 1976,
      specialization: 'Multi-disciplinary Construction'
    },
    { 
      name: 'UJWALA', 
      color: 'from-orange-500 to-orange-600',
      logo: ujwala, // Using L&T logo as fallback temporarily
      headerImage: ujwalacard, // Using L&T header as fallback temporarily
      description: 'A diversified construction, materials, and infrastructure investments group with operations across Africa.',
      projects: ['Kusile Power Station', 'Nelson Mandela Bridge', 'Mozal Aluminium Smelter'],
      location: 'Johannesburg, South Africa',
      since: 1974,
      specialization: 'Construction & Infrastructure'
    },
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

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedClient && !event.target.closest('.popup-content')) {
        setSelectedClient(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedClient]);

  return (
    <section id="clients" ref={sectionRef} className="section-padding bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="clients-title text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-gold">
          Our Top Clients
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Working with India's leading construction and development companies
        </p>

        {/* Top Featured Clients */}
        <div className="mb-20">
          <div
            ref={topClientsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
          >
            {topClients.map((client, index) => (
              <div
                key={client.name}
                className="top-client-card group"
                onClick={() => setSelectedClient(client)}
              >
                <div className="relative bg-card rounded-lg p-8 border-2 border-border hover:border-primary transition-all duration-300 hover-glow cursor-pointer h-full flex flex-col items-center justify-center text-center">
                  {/* Scale only the image, not the container */}
                  <div className="logo-container bg-black rounded-lg mb-4 transition-all duration-300 shadow-sm overflow-hidden">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="logo-image group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {client.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click for details
                  </p>
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
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary hover:bg-card transition-all duration-300 h-full flex items-center justify-center text-center hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                  <p className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                    {client}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="popup-content bg-card border-2 border-primary rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in-zoom-in">
            {/* Header with Full Landscape Image */}
            <div 
              className="relative p-6 rounded-t-lg overflow-hidden min-h-[180px] flex items-end"
              style={{
                backgroundImage: `url('${selectedClient.headerImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              <div className="relative z-10 flex justify-between items-end w-full">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <img 
                      src={selectedClient.logo} 
                      alt={`${selectedClient.name} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{selectedClient.name}</h3>
                    <p className="text-white/90 drop-shadow-md">{selectedClient.specialization}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedClient(null)}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-colors backdrop-blur-sm border border-white/30"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">About</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedClient.description}
                </p>
              </div>

              {/* Company Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">{selectedClient.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Partnership Since</p>
                    <p className="font-medium text-foreground">{selectedClient.since}</p>
                  </div>
                </div>
              </div>

              {/* Notable Projects */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Award className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">Notable Projects</h4>
                </div>
                <ul className="space-y-2">
                  {selectedClient.projects.map((project, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedClient.color} mt-2 flex-shrink-0`} />
                      <span className="text-foreground/90">{project}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partnership Highlights */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Partnership Highlights</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Long-term strategic partnership</li>
                  <li>• Multiple successful project collaborations</li>
                  <li>• Industry-leading safety standards</li>
                  <li>• Innovative construction solutions</li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border p-4 bg-muted/20">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Trusted partner for {new Date().getFullYear() - selectedClient.since} years
                </span>
                <button
                  onClick={() => setSelectedClient(null)}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClientsSection;