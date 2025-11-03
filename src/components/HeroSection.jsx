import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from './ui/button';
import heroImage from './assets/hero-demolition.jpg';

const HeroSection = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.9,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToClients = () => {
    document.querySelector('#clients')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 w-full">
        <img
          src={heroImage}
          alt="Professional demolition site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      {/* Content */}
      <div ref={contentRef} className="relative z-10 container mx-auto px-4 text-center w-full max-w-7xl">
        <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white break-words">
          Building the Future by
          <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent mt-2 leading-tight">
            Dismantling the Past
          </span>
        </h1>
        
        <p className="hero-subtitle text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">
          Professional demolition services with over 20 years of excellence, precision, and safety
        </p>
        
        <Button
          onClick={scrollToClients}
          size="lg"
          className="hero-cta hover:scale-105 font-semibold px-8 py-6 text-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 hover:from-orange-600 hover:to-yellow-600"
        >
          View Our Clients
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;