// src/components/ServicesPage.jsx
import { useEffect, useRef, useState } from 'react';
import { Building2, Factory, Droplets, Home, RotateCcw, ChevronLeft, ChevronRight, Play, Pause, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, ChevronDown, ChevronUp, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

// Static media imports (keep as static imports — bundler will handle them)
import workImage1 from './assets/demo2.jpg';
import workImage2 from './assets/demo1.jpg';
import workImage3 from './assets/demo3.jpg';
import workVideo1 from './assets/videos/demovedio1.jpg';
import workVideo2 from './assets/videos/demovedio2.jpg';
import image1 from './assets/hoarding1.jpg';
import image2 from './assets/hoarding2.jpg';

const isBrowser = typeof window !== 'undefined';

const ServicesPage = () => {
  const sectionRef = useRef(null);
  const servicesGridRef = useRef(null);
  const mobileServiceCardsRef = useRef([]);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Get current year for footer
  const currentYear = new Date().getFullYear();

  // Reset scroll to top when Services page loads (browser only)
  useEffect(() => {
    if (!isBrowser) return;
    window.scrollTo(0, 0);
  }, []);

  // Our Work media data
  const ourWorkMedia = [
    {
      type: 'image',
      src: workImage1,
      title: 'Commercial Demolition Project',
      description: 'Large-scale industrial building demolition'
    },
    {
      type: 'image',
      src: workImage2,
      title: 'Residential Demolition Process',
      description: 'Time-lapse of complete house demolition'
    },
    {
      type: 'image',
      src: workImage3,
      title: 'Site Clearance',
      description: 'Professional site preparation and clearance'
    },
    {
      type: 'image',
      src: workVideo1,
      title: 'Controlled Implosion',
      description: 'Expert controlled demolition techniques'
    },
    {
      type: 'image',
      src: workVideo2,
      title: 'Project Completion',
      description: 'Finished site ready for new construction'
    }
  ];

  // Auto-play slider
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === ourWorkMedia.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, ourWorkMedia.length]);

  // SSG-safe GSAP + ScrollTrigger animations (dynamic import, browser only)
  useEffect(() => {
    if (!isBrowser) return;

    let ctx;
    let gsapInstance;
    let ScrollTrigger;

    (async () => {
      try {
        const gsapModule = await import('gsap');
        gsapInstance = gsapModule.default || gsapModule;
        // Dynamically import ScrollTrigger plugin; plugin registers to window when imported
        try {
          await import('gsap/ScrollTrigger');
          ScrollTrigger = (gsapInstance && gsapInstance.plugins && gsapInstance.plugins.ScrollTrigger) || (typeof window !== 'undefined' && window.ScrollTrigger);
          if (ScrollTrigger && gsapInstance.registerPlugin) {
            gsapInstance.registerPlugin(ScrollTrigger);
          }
        } catch (err) {
          // If ScrollTrigger import fails, continue without it (no ScrollTrigger animations)
          // console.warn('ScrollTrigger not available:', err);
        }

        // Create a context tied to this component root (sectionRef)
        ctx = gsapInstance.context(() => {
          // Our Work section animation
          try {
            gsapInstance.from('.our-work-title', {
              opacity: 0,
              y: 30,
              duration: 0.8,
              scrollTrigger: {
                trigger: '.our-work-title',
                start: 'top 80%',
              },
            });
          } catch (e) {}

          try {
            gsapInstance.from('.slider-container', {
              opacity: 0,
              y: 40,
              duration: 1,
              scrollTrigger: {
                trigger: '.slider-container',
                start: 'top 80%',
              },
            });
          } catch (e) {}

          // Title animation
          try {
            gsapInstance.from('.services-title', {
              opacity: 0,
              y: 30,
              duration: 0.8,
              scrollTrigger: {
                trigger: '.services-title',
                start: 'top 80%',
              },
            });
          } catch (e) {}

          // Service cards animation - Desktop
          try {
            gsapInstance.from('.service-card', {
              opacity: 0.5,
              y: 40,
              duration: 0.5,
              stagger: 0.1,
              scrollTrigger: {
                trigger: '.services-grid',
                start: 'top 70%',
              },
            });
          } catch (e) {}

          // Mobile service cards animation - Only once per reload
          try {
            if (window.innerWidth < 768) {
              mobileServiceCardsRef.current.forEach((card, index) => {
                if (card && !card.classList.contains('expanded')) {
                  gsapInstance.from(card, {
                    opacity: 0.8,
                    x: index % 2 === 0 ? -60 : 60,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                      trigger: card,
                      start: 'top 85%',
                      end: 'bottom 15%',
                      once: true,
                    },
                  });
                }
              });
            }
          } catch (e) {}

          // Stats animation
          try {
            gsapInstance.from('.stat-item', {
              opacity: 0,
              scale: 0.8,
              duration: 0.6,
              stagger: 0.15,
              scrollTrigger: {
                trigger: '.stats-section',
                start: 'top 80%',
              },
            });
          } catch (e) {}
        }, sectionRef);
      } catch (err) {
        // If GSAP couldn't be imported, fail gracefully without animations
        // console.warn('GSAP dynamic import failed:', err);
      }
    })();

    return () => {
      try {
        if (ctx && ctx.revert) ctx.revert();
        // Ensure ScrollTrigger.kill() if exists
        if (typeof window !== 'undefined' && window.ScrollTrigger && window.ScrollTrigger.getAll) {
          window.ScrollTrigger.getAll().forEach((st) => st.kill && st.kill());
        }
      } catch (e) {}
    };
  }, [expandedService]);

  // Add ref to each mobile service card
  const addToRefs = (el) => {
    if (el && !mobileServiceCardsRef.current.includes(el)) {
      mobileServiceCardsRef.current.push(el);
    }
  };

  // Handle service box click for mobile
  const handleServiceClick = (index) => {
    if (!isBrowser) return;
    if (window.innerWidth >= 768) return; // Only for mobile

    if (expandedService === index) {
      // Collapse the currently expanded box
      setExpandedService(null);
    } else {
      // Expand the clicked box
      setExpandedService(index);
      // scroll into view a bit for better UX
      setTimeout(() => {
        try {
          const el = mobileServiceCardsRef.current[index];
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        } catch (e) {}
      }, 200);
    }
  };

  // Navigation functions
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === ourWorkMedia.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? ourWorkMedia.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Function to navigate back to home
  const goToHome = () => {
    // useNavigate exists because your app provides Router on both SSR and client.
    try {
      navigate('/');
    } catch (e) {}
  };

  // Form functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert(result.message);

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      alert(result.message || 'Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Service page contact error:', error);
    alert('Failed to send message. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};



  // Service boxes data
  const serviceBoxes = [
    {
      title: 'Residential Demolition',
      icon: <Home className="w-6 h-6 md:w-8 md:h-8" />,
      description: 'Professional demolition of houses, apartments, and residential structures with minimal disruption to surrounding areas.',
      features: [
        'Complete house demolitions',
        'Swimming pool removal',
        'Outbuilding clearance',
        'Safe debris management'
      ],
      expandedContent: 'We specialize in residential demolition projects of all sizes. Our team ensures minimal disruption to your neighborhood while maintaining the highest safety standards. From single-family homes to apartment complexes, we handle every aspect of the demolition process with precision and care.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Commercial Demolition',
      icon: <Building2 className="w-6 h-6 md:w-8 md:h-8" />,
      description: 'Large-scale demolition of commercial buildings, offices, and retail spaces with precision and safety.',
      features: [
        'Office building demolition',
        'Shopping center dismantling',
        'Controlled implosions',
        'Structural dismantling'
      ],
      expandedContent: 'Our commercial demolition services are designed for large-scale projects requiring expert planning and execution. We work with businesses to minimize downtime and ensure safe, efficient demolition of commercial properties.',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Factory Demolition',
      icon: <Factory className="w-6 h-6 md:w-8 md:h-8" />,
      description: 'Industrial facility demolition including manufacturing plants, warehouses, and production units.',
      features: [
        'Industrial plant demolition',
        'Heavy machinery removal',
        'Hazardous material handling',
        'Site remediation'
      ],
      expandedContent: 'Factory and industrial demolitions require specialized expertise. We handle complex industrial facilities, including proper disposal of hazardous materials and heavy machinery removal, ensuring full compliance with environmental regulations.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tank Demolition',
      icon: <Droplets className="w-6 h-6 md:w-8 md:h-8" />,
      description: 'Specialized demolition of storage tanks, silos, and containment structures of all sizes.',
      features: [
        'Storage tank removal',
        'Underground tank excavation',
        'Chemical tank disposal',
        'Environmental compliance'
      ],
      expandedContent: 'Tank demolition requires precision and safety protocols. We specialize in removing storage tanks of all types - above ground, underground, chemical, and fuel tanks - with complete environmental compliance and safety measures.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Renovation Demolition',
      icon: <RotateCcw className="w-6 h-6 md:w-8 md:h-8" />,
      description: 'Selective demolition for renovation projects, preserving structural elements while removing unwanted sections.',
      features: [
        'Interior wall removal',
        'Partial structure demolition',
        'Kitchen & bathroom remodels',
        'Structural preservation'
      ],
      expandedContent: 'For renovation projects, we provide selective demolition services that preserve the structural integrity of your building while removing unwanted sections. Perfect for kitchen and bathroom remodels, office renovations, and space reconfiguration.',
      gradient: 'from-red-500 to-orange-500'
    }
  ];

  // Stats data
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '20+', label: 'Years Experience' },
    { number: '100%', label: 'Safety Record' },
    { number: '50+', label: 'Expert Team' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back to Home Button */}
      <div className="fixed top-5 left-5 z-50">
        <Button
          onClick={goToHome}
          variant=""
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white border border-gray-100/50 shadow-sm hover:shadow-md font-medium px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Button>
      </div>

      {/* Our Work Section */}
      <section className="pt-16 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="slider-container relative max-w-5xl mx-auto pt-5">
            <div className="relative bg-card/20 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-border shadow-2xl">
              <div className="relative aspect-video w-full max-h-[500px]">
                {ourWorkMedia[currentSlide].type === 'image' ? (
                  <img
                    src={ourWorkMedia[currentSlide].src}
                    alt={ourWorkMedia[currentSlide].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={ourWorkMedia[currentSlide].src}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay={isPlaying}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">
                    {ourWorkMedia[currentSlide].title}
                  </h3>
                  <p className="text-base text-gray-200 drop-shadow-md">
                    {ourWorkMedia[currentSlide].description}
                  </p>
                </div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 z-10"
                disabled={isAnimating}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/10 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 z-10"
                disabled={isAnimating}
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section ref={sectionRef} className="pt-0 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="services-title text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-gold">
            Our Core Services
          </h2>

          {/* Service Boxes Grid - Fixed for both mobile and desktop */}
          <div ref={servicesGridRef} className="services-grid max-w-6xl mx-auto mb-20">
            {/* Mobile */}
            <div className="flex flex-col gap-4 md:hidden">
              {serviceBoxes.map((service, index) => (
                <div
                  key={index}
                  className={`flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'} transition-all duration-300 ease-in-out`}
                >
                  <div
                    ref={addToRefs}
                    className={`mobile-service-card group w-[80%] ${expandedService === index ? 'expanded' : ''}`}
                    onClick={() => handleServiceClick(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleServiceClick(index); }}
                  >
                    <div className={`bg-card/50 backdrop-blur-sm rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover-glow flex flex-col ${expandedService === index ? 'p-6 min-h-[320px]' : 'p-4 min-h-[220px]'}`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                            {service.icon}
                          </div>
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                        </div>
                        <div className={`transform transition-transform duration-300 ${expandedService === index ? 'rotate-180' : ''}`}>
                          {expandedService === index ? (
                            <ChevronUp className="w-5 h-5 text-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>

                      <p className="text-foreground/80 mb-3 text-xs leading-relaxed">
                        {service.description}
                      </p>

                      {expandedService === index && (
                        <div className="animate-in fade-in-zoom-in duration-500">
                          <ul className="space-y-1 mb-4">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-foreground/70 text-xs">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="border-t border-border/50 pt-4 mt-4">
                            <p className="text-foreground/90 text-sm leading-relaxed mb-4">
                              {service.expandedContent}
                            </p>
                            <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                              <p className="text-primary text-xs font-semibold text-center">
                                Ready to start your {service.title.toLowerCase()} project?
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {expandedService !== index && (
                        <div className="mt-auto pt-2">
                          <p className="text-primary text-xs text-center font-medium">
                            Tap to learn more
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {serviceBoxes.slice(0, 3).map((service, index) => (
                  <div key={index} className="service-card group">
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border-2 border-border hover:border-primary transition-all duration-300 hover-glow h-full min-h-[280px] flex flex-col">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-foreground/80 mb-4 text-sm leading-relaxed flex-grow">
                        {service.description}
                      </p>

                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-foreground/70 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-6">
                {serviceBoxes.slice(3, 5).map((service, index) => (
                  <div key={index + 3} className="service-card group w-full max-w-md">
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border-2 border-border hover:border-primary transition-all duration-300 hover-glow h-full min-h-[280px] flex flex-col">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-foreground/80 mb-4 text-sm leading-relaxed flex-grow">
                        {service.description}
                      </p>

                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-foreground/70 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hoarding Barricade Section */}
          <section className="mb-20">
            <div className="max-w-7xl mx-auto bg-card/60 backdrop-blur-sm rounded-2xl border border-border shadow-2xl ">
              <div className="px-6 md:px-10 py-6 rounded-2xl border border-b border-border/70 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900">
                <h3 className="text-left text-2xl md:text-3xl font-bold text-gradient-gold pl-2">
                  Hoarding / Barricade Services
                </h3>
              </div>

              <div className="px-6 md:px-10 py-8 space-y-8">
                <div className="grid md:grid-cols-[1.1fr,1.3fr] gap-6 md:gap-10 items-center">
                  <div className="w-full">
                    <div className="aspect-[4/1.5] rounded-xl flex items-center justify-center text-background font-semibold text-lg md:text-xl shadow-lg pt-2">
                      <img src={image1} alt="Hoarding Barricade - Site View" className="w-full h-full object-cover rounded-xl" loading="lazy" />
                    </div>
                  </div>

                  <p className="text-large md:text-base text-foreground/90 leading-relaxed">
                    Along with demolition, <span className="font-semibold">we at (MSJ Traders)</span> provide professional <span className="font-semibold">Hoarding Barricade</span> services to secure your project site. Our steel panel systems create a clean, safe perimeter that keeps the public protected while giving your project a neat, professional look.
                  </p>
                </div>

                <div className="grid md:grid-cols-[1.4fr,1.1fr] gap-6 md:gap-10 items-center">
                  <p className="text-large md:text-base text-foreground/90 leading-relaxed">
                    Whether it&apos;s <span className="font-medium">Site Hoarding</span> for new builds, <span className="font-medium">Construction Hoarding</span> around active demolition zones, or <span className="font-medium">Safety Hoarding</span> for high-traffic areas, we design and install barricades that match your site conditions and local safety norms.
                  </p>

                  <div className="w-full">
                    <div className="aspect-[4/1.5] rounded-xl bg-orange-500 flex items-center justify-center text-background font-semibold text-lg md:text-xl shadow-lg">
                      <img src={image2} alt="Hoarding Barricade - Street Side" className="w-full h-full object-cover rounded-xl" loading="lazy" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-2">
                  <div className="bg-background/90 border border-border rounded-2xl p-5 md:p-6">
                    <h4 className="text-large font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary " />
                      What we provide
                    </h4>
                    <ul className="space-y-2 text-xs md:text-sm text-foreground/90">
                      <li>• Temporary steel hoarding barricades for demolition &amp; construction sites</li>
                      <li>• Custom lengths &amp; heights based on your site layout</li>
                      <li>• Strong footing for rough &amp; uneven ground</li>
                      <li>• Options for access gates and service openings</li>
                    </ul>
                  </div>

                  <div className="bg-background/90 border border-border rounded-2xl p-5 md:p-6">
                    <h4 className="text-large font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary " />
                      Why it matters
                    </h4>
                    <ul className="space-y-2 text-xs md:text-sm text-foreground/90">
                      <li>• Protects pedestrians, neighbours, and on-site workers</li>
                      <li>• Controls dust, noise, and visual clutter</li>
                      <li>• Creates a clear, secure site boundary</li>
                      <li>• Ready for branding, safety signage, and project details</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-5 mt-4 border-t border-border/70">
                  <p className="text-xs md:text-sm text-foreground/85">
                    Contact us at{' '}
                    <span className="font-semibold text-foreground">+91 9841040740</span> /{' '}
                    <span className="font-semibold text-foreground">mohideenmsj@gmail.com</span>
                  </p>

                  <Button
                    type="button"
                    className="w-full md:w-auto px-6 py-3 text-xs md:text-sm font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 hover:from-orange-600 hover:to-yellow-600 rounded-full transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      if (!isBrowser) return;
                      const contactSection = document.querySelector('#contact-section');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Enquire about Hoarding Barricade
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <div className="stats-section bg-gradient-to-br from-slate-900 to-orange-900/20 rounded-2xl p-8 border border-border mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <p className="text-foreground text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-section" className="pt-6 pb-16 bg-gradient-dark"></section>
      <section className="pt-6 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
              Contact Us
            </h2>
            <p className="text-lg text-foreground/90">
              Ready to start your next project? Contact us today for a free consultation and quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Let us know about your demolition project - we'll provide a free quote and expert advice!"
                  />
                </div>

                <Button
  type="submit"
  disabled={isSubmitting}
  className="w-full hover:scale-105 font-semibold py-4 text-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isSubmitting ? 'Sending...' : 'Send Message'}
</Button>

              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 group hover-glow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+919841040740"
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      +91 9841040740
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 group hover-glow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:mohideenmsj@gmail.com"
                      className="text-foreground hover:text-primary transition-colors text-sm break-all"
                    >
                      mohideenmsj@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 group hover-glow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground">Location</h3>
                    <p className="text-foreground text-sm">
                      No.57/34, Perambur High Road,<br />
                      Jamaliya,<br />
                      Chennai - 600 012
                    </p>
                    <a
                      href="https://maps.google.com/?q=No.57/34, Perambur High Road, Jamaliya, Chennai - 600 012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-orange-400 transition-colors text-xs mt-1 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-background py-8">
        <div className="container mx-auto px-4">
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
    </div>
  );
};

export default ServicesPage;
