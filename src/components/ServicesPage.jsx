import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Hammer, Truck, Shield, Recycle, Award, Home } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom'; // Add this import

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate function

  // Reset scroll to top when Services page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.services-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.services-title',
          start: 'top 80%',
        },
      });

      // Service cards animation
      gsap.from('.service-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 70%',
        },
      });

      // Stats animation
      gsap.from('.stat-item', {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Function to navigate back to home
  const goToHome = () => {
    navigate('/');
  };

  // Main services data
  const mainServices = [
    {
      icon: <Hammer className="w-12 h-12" />,
      title: 'Commercial Demolition',
      description: 'Large-scale demolition of commercial buildings, factories, and industrial structures with precision and safety.',
      features: [
        'Structural dismantling',
        'Controlled implosions',
        'Site clearance',
        'Debris management'
      ],
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Residential Demolition',
      description: 'Professional demolition of residential properties with minimal disruption to surrounding areas.',
      features: [
        'House demolitions',
        'Swimming pool removal',
        'Outbuilding clearance',
        'Site preparation'
      ],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  // Additional services
  const additionalServices = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'services 1',
      description: 'Complete site preparation and clearance services for new construction projects.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'services 2',
      description: 'Expert safety assessments and consulting for demolition and construction sites.'
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'services 3',
      description: 'Environmentally responsible disposal and recycling of demolition materials.'
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
    <div className="py-20 min-h-screen bg-background">
      {/* Hero Section */}
  
      {/* Back to Home Button - Added at the top */}
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="services-title text-4xl md:text-6xl font-bold mb-4 text-white">
          Professional
          <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent mt-2">
            Demolition Services
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Comprehensive demolition solutions with 20 years of excellence, precision, and unmatched safety standards
        </p>
      </div>

      {/* Main Services Section */}
      <section ref={sectionRef} className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <h2 className="services-title text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-gold">
            Our Core Services
          </h2>
          <p className="text-center text-foreground text-lg mb-16 max-w-2xl mx-auto">
            Specialized demolition services tailored to meet the unique requirements of each project
          </p>

          {/* Main Services Grid */}
          <div className="services-grid grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {mainServices.map((service, index) => (
              <div
                key={service.title}
                className="service-card group cursor-pointer"
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border-2 border-border hover:border-primary transition-all duration-300 hover-glow h-full">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-foreground/80">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Button 
                      variant="" 
                      className="w-full mt-8 hover:scale-105 transition-transform duration-300"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Additional Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => (
                <div
                  key={service.title}
                  className="service-card group"
                >
                  <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 text-center group hover:shadow-lg h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section bg-gradient-to-br from-slate-900 to-orange-900/20 rounded-2xl p-8 border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="stat-item text-center group"
                >
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-12 border border-border">
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and competitive quote on your demolition project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="hover:scale-105 font-semibold px-8 py-6 text-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 hover:from-orange-600 hover:to-yellow-600"
                >
                  Get Free Quote
                </Button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;