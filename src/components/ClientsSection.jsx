import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, X, MapPin, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import lntLogo from './assets/images/clients/lntlogo.png';
import tatalogo from './assets/images/clients/tatalogo.png';
import bnrlogo from './assets/images/clients/bnrlogo1.png';
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
  const carouselRef = useRef(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);

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
      logo: tatalogo,
      headerImage: tatacard,
      description: 'A multinational engineering and construction company with expertise in underground mining, oil and gas, and infrastructure.',
      projects: ['Bokpoort CSP Plant', 'Gauteng Freeway Improvement', 'Sasol Mining Operations'],
      location: 'Johannesburg, South Africa',
      since: 1902,
      specialization: 'Engineering & Construction'
    },
    { 
      name: 'BNR', 
      color: 'from-red-500 to-red-600',
      logo: bnrlogo,
      headerImage: bnrcard,
      description: 'One of the largest construction companies in South Africa with significant international presence in Australia and UK.',
      projects: ['Moses Mabhida Stadium', 'Gateway Theatre of Shopping', 'Pearl Qatar'],
      location: 'Johannesburg, South Africa',
      since: 1970,
      specialization: 'Building & Civil Engineering'
    },
    { 
      name: 'AFCONS', 
      color: 'from-purple-500 to-purple-600',
      logo: afconlogo,
      headerImage: afconscard,
      description: 'A multi-disciplinary construction company offering services across building, civil engineering, and roads earthworks.',
      projects: ['King Shaka International Airport', 'Menlyn Maine Precinct', 'Durban Container Terminal'],
      location: 'Johannesburg, South Africa',
      since: 1976,
      specialization: 'Multi-disciplinary Construction'
    },
    { 
      name: 'UJWALA', 
      color: 'from-orange-500 to-orange-600',
      logo: ujwala,
      headerImage: ujwalacard,
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

  // Carousel navigation with animation
  const navigateSlide = (direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const carousel = carouselRef.current;
    
    // Animate current slide out
    gsap.to(carousel, {
      x: direction === 'next' ? -50 : 50,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        // Update slide
        setCurrentSlide((prev) => 
          direction === 'next' 
            ? (prev === topClients.length - 1 ? 0 : prev + 1)
            : (prev === 0 ? topClients.length - 1 : prev - 1)
        );
        
        // Reset position and animate in
        gsap.set(carousel, { 
          x: direction === 'next' ? 50 : -50,
          opacity: 0 
        });
        
        gsap.to(carousel, {
          x: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => setIsAnimating(false)
        });
      }
    });
  };

  const nextSlide = () => navigateSlide('next');
  const prevSlide = () => navigateSlide('prev');

// Swipe handling
useEffect(() => {
  const carousel = carouselRef.current;
  if (!carousel) return;

  let startX = 0;
  let currentX = 0;
  let isSwipingLocal = false;
  let startTime = 0;
  let hasMoved = false;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    startTime = Date.now();
    isSwipingLocal = true;
    hasMoved = false;
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwipingLocal) return;
    currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    // Only consider it a swipe if movement is significant
    if (Math.abs(diff) > 15) {
      hasMoved = true;
      gsap.to(carousel, {
        x: -diff * 0.3,
        duration: 0.1,
        ease: 'power2.out'
      });
    }
  };

  const handleTouchEnd = (e) => {
    if (!isSwipingLocal) return;
    
    const endTime = Date.now();
    const timeDiff = endTime - startTime;
    const diff = startX - currentX;
    const swipeThreshold = 60; // Increased threshold
    const tapTimeThreshold = 300; // Increased time threshold
    
    // Reset position
    gsap.to(carousel, {
      x: 0,
      duration: 0.2,
      ease: 'power2.out'
    });

    // Only navigate if it was a clear swipe gesture
    if (hasMoved && Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide(); // Swipe left - next
      } else {
        prevSlide(); // Swipe right - previous
      }
    } 
    // Otherwise, if it was a quick tap with minimal movement, open details
    else if (!hasMoved || (timeDiff < tapTimeThreshold && Math.abs(diff) < 30)) {
      setSelectedClient(topClients[currentSlide]);
    }
    
    isSwipingLocal = false;
    setIsSwiping(false);
  };

  carousel.addEventListener('touchstart', handleTouchStart);
  carousel.addEventListener('touchmove', handleTouchMove);
  carousel.addEventListener('touchend', handleTouchEnd);

  return () => {
    carousel.removeEventListener('touchstart', handleTouchStart);
    carousel.removeEventListener('touchmove', handleTouchMove);
    carousel.removeEventListener('touchend', handleTouchEnd);
  };
}, [currentSlide, isAnimating]);

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

      // Desktop animations
      if (window.innerWidth >= 768) {
        // Top clients diagonal reveal (desktop only)
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
      } else {
        // Mobile animations - simpler fade up
        gsap.from('.top-client-card', {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: topClientsRef.current,
            start: 'top 80%',
          },
        });
      }

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
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h2 className="clients-title text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gradient-gold">
          Our Top Clients
        </h2>
        <p className="text-center text-muted-foreground text-base md:text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
          Working with India's leading construction and development companies
        </p>

        {/* Top Featured Clients - Desktop Grid */}
        <div className="mb-16 md:mb-20 hidden md:block">
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
                <div className="relative bg-card rounded-xl p-8 border-2 border-border hover:border-primary transition-all duration-300 hover-glow cursor-pointer h-full flex flex-col items-center justify-center text-center">
                  <div className="logo-container bg-black rounded-lg mb-4 transition-all duration-300 shadow-sm overflow-hidden w-24 h-24">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="logo-image w-full h-full object-contain p-0 group-hover:scale-110 transition-transform duration-300"
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

        {/* Top Featured Clients - Mobile Carousel */}
        <div className="mb-16 md:hidden">
          <div className="relative px-2">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                ref={carouselRef}
                className="carousel-slide"
              >
                <div
                  className="top-client-card bg-card rounded-2xl p-6 border-2 border-primary cursor-pointer h-full"
                  onClick={(e) => {
                    // Only open details if not swiping
                    if (!isSwiping) {
                      setSelectedClient(topClients[currentSlide]);
                    }
                  }}
                >
                  {/* Client Logo and Basic Info */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="logo-container bg-black rounded-lg shadow-sm overflow-hidden w-16 h-16 flex-shrink-0">
                      <img 
                        src={topClients[currentSlide].logo} 
                        alt={`${topClients[currentSlide].name} logo`}
                        className="w-full h-full object-contain p-0"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-foreground">
                        {topClients[currentSlide].name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {topClients[currentSlide].specialization}
                      </p>
                    </div>
                  </div>
                  
                  {/* Short Description */}
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4 text-left">
                    {topClients[currentSlide].description.substring(0, 100)}...
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-muted/50 rounded-lg p-3">
                      <Calendar className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Since</p>
                      <p className="text-sm font-semibold text-foreground">
                        {topClients[currentSlide].since}
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <MapPin className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-semibold text-foreground truncate">
                        {topClients[currentSlide].location.split(',')[0]}
                      </p>
                    </div>
                  </div>

                  {/* View Details CTA */}
                  <button 
                    className="w-full mt-4 bg-primary text-primary-foreground py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
                    onClick={() => setSelectedClient(topClients[currentSlide])}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-between items-center mt-4 px-4">
              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {topClients.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => !isAnimating && setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                    } ${isAnimating ? 'opacity-50' : ''}`}
                    disabled={isAnimating}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-2">
              <span className="text-sm text-muted-foreground">
                {currentSlide + 1} / {topClients.length}
              </span>
            </div>

            {/* Swipe Hint */}
            <div className="text-center mt-2">
              <span className="text-xs text-muted-foreground">
                Swipe to navigate
              </span>
            </div>
          </div>
        </div>

        {/* Other Clients Grid */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 md:mb-12 text-foreground">
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
              <div className="absolute inset-0 bg-black/40"></div>
              
              <div className="relative z-10 flex justify-between items-end w-full">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 overflow-hidden">
                    <img 
                      src={selectedClient.logo} 
                      alt={`${selectedClient.name} logo`}
                      className="w-10 h-10 object-contain p-0"
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
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">About</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedClient.description}
                </p>
              </div>

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