import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Hammer, Truck, Shield, Recycle, Award, Home, ChevronLeft, ChevronRight, Play, Pause, Check, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

// Import your media files - update these paths to match your actual files
import workImage1 from './assets/demo1.jpg';
import workImage2 from './assets/demo2.jpg';
import workImage3 from './assets/demo3.jpg';
import workVideo1 from './assets/videos/demovideo1.mp4';
import workVideo2 from './assets/videos/demovideo2.mp4';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Get current year for footer
  const currentYear = new Date().getFullYear();

  // Reset scroll to top when Services page loads
  useEffect(() => {
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
      type: 'video',
      src: workVideo1,
      title: 'Residential Demolition Process',
      description: 'Time-lapse of complete house demolition'
    },
    {
      type: 'image',
      src: workImage2,
      title: 'Site Clearance',
      description: 'Professional site preparation and clearance'
    },
    {
      type: 'video',
      src: workVideo2,
      title: 'Controlled Implosion',
      description: 'Expert controlled demolition techniques'
    },
    {
      type: 'image',
      src: workImage3,
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

  // Animation effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Our Work section animation
      gsap.from('.our-work-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.our-work-title',
          start: 'top 80%',
        },
      });

      gsap.from('.slider-container', {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: '.slider-container',
          start: 'top 80%',
        },
      });

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

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Function to navigate back to home
  const goToHome = () => {
    navigate('/');
  };

  // Form functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
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

  // Additional services bullet points
  const additionalServices = [
    'Complete site preparation and clearance services',
    'Expert safety assessments and consulting',
    'Environmentally responsible disposal and recycling'
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

      {/* Our Work Section - Reduced bottom padding */}
      <section className="pt-16 pb-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="our-work-title text-4xl md:text-5xl font-bold text-center mb-8 text-gradient-gold">
            OUR WORK
          </h2>
         
          {/* Slider Container - Reduced size */}
          <div className="slider-container relative max-w-5xl mx-auto">
            {/* Main Slider - Smaller size */}
            <div className="relative bg-card/20 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-border shadow-2xl">
              {/* Media Display - Reduced height */}
              <div className="relative aspect-video w-full max-h-[500px]">
                {ourWorkMedia[currentSlide].type === 'image' ? (
                  <img
                    src={ourWorkMedia[currentSlide].src}
                    alt={ourWorkMedia[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={ourWorkMedia[currentSlide].src}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay={isPlaying}
                    muted
                    loop
                  />
                )}
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Media Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">
                    {ourWorkMedia[currentSlide].title}
                  </h3>
                  <p className="text-base text-gray-200 drop-shadow-md">
                    {ourWorkMedia[currentSlide].description}
                  </p>
                </div>

                {/* Play/Pause Button for Videos */}
                {ourWorkMedia[currentSlide].type === 'video' && (
                  <button
                    onClick={togglePlayPause}
                    className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                )}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 z-10"
                disabled={isAnimating}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 z-10"
                disabled={isAnimating}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Indicator - Centered below slider */}
            <div className="text-center mt-4">
              <span className="text-sm text-foreground">
                {currentSlide + 1} / {ourWorkMedia.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section - Reduced top spacing */}
      <section ref={sectionRef} className="pt-0 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="services-title text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-gold">
            Our Core Services
          </h2>

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

          {/* Additional Services - Single Row with Bullet Points */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Additional Services
            </h3>
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-foreground text-lg font-medium">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section bg-gradient-to-br from-slate-900 to-orange-900/20 rounded-2xl p-8 border border-border mb-20">
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

          {/* Three Empty Boxes Section - Reduced spacing */}
          <div className="mb-8 space-y-8 max-w-6xl mx-auto">
            {/* Box 1 - Left */}
            <div className="flex justify-start">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border-2 border-border hover:border-primary transition-all duration-300 hover-glow h-48 w-2/3 flex items-center justify-center">
                <div className="text-center text-foreground/60">
                  {/* Empty box - ready for your content */}
                </div>
              </div>
            </div>
            
            {/* Box 2 - Right */}
            <div className="flex justify-end">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border-2 border-border hover:border-primary transition-all duration-300 hover-glow h-48 w-2/3 flex items-center justify-center">
                <div className="text-center text-foreground/60">
                  {/* Empty box - ready for your content */}
                </div>
              </div>
            </div>
            
            {/* Box 3 - Left */}
            <div className="flex justify-start">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border-2 border-border hover:border-primary transition-all duration-300 hover-glow h-48 w-2/3 flex items-center justify-center">
                <div className="text-center text-foreground/60">
                  {/* Empty box - ready for your content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Contact Info Boxes - Reduced top padding */}
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
            {/* Contact Form - Takes 2/3 of the row */}
            <div className="lg:col-span-2 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
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
                      Email Address *
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
                    Message *
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
                  className="w-full hover:scale-105 font-semibold py-4 text-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info Boxes - Takes 1/3 of the row */}
            <div className="space-y-6">
              {/* Phone Box */}
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 group hover-glow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                    <a 
                      href="tel:‪+919841040740‬" 
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      ‪+91 9841040740‬
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Box */}
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

              {/* Location Box */}
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