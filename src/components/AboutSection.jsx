import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // ⛔ Prevent GSAP from loading during SSG

    // 🔹 Dynamically import GSAP only in browser
    (async () => {
      const gsapModule = await import("gsap");
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");
      
      const gsap = gsapModule.gsap;
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from('.about-content', {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
             once: true, 
            toggleActions: 'play none none none',
            onEnter: () => setIsVisible(true),
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    })();
  }, []);


const Counter = ({ end, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1500), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration]);

  return (
    <>
      {count}
      <span className="text-orange-400 ml-1">{suffix}</span>
    </>
  );
};


  return (
    <section
      id="about"
      ref={sectionRef}
      className="pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16 bg-gradient-dark relative overflow-hidden"    >
      <div className="container mx-auto px-4">
        <div className="about-content max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="relative mb-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-gold relative z-10">
              About MSJ Traders
            </h2>
          </div>
          
          {/* Company Established Badge */}
          <div className="inline-block bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6 max-w-xs mx-auto">
            <p className="text-orange-300 font-semibold text-sm md:text-lg">
              Est. 1987 • 35+ Years
            </p>
          </div>

          {/* Content Text - Mobile Optimized */}
          <div className="space-y-4 text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
            <p className="text-sm md:text-base lg:text-lg text-left md:text-center">
              Founded in <span className="text-primary font-semibold">1987</span> by our visionary leader{' '}
              <span className="text-primary font-semibold">Mr. J. Mohideen</span>, MSJ Traders has been 
              a pioneering force in the industry for over three decades.
            </p>
            
            <p className="text-sm md:text-base lg:text-lg text-left md:text-center">
              We are committed to delivering the <span className="text-primary font-semibold">best quality services </span> 
              with exceptional speed and efficiency, ensuring every project is completed within the shortest possible timeframe 
              without compromising on excellence.
            </p>
            
            <p className="text-sm md:text-base lg:text-lg text-left md:text-center font-semibold">
              Equipped with <span className="text-primary font-semibold">Chennai's most advanced machinery</span> and 
              backed by <span className="text-primary font-semibold">35 years of hands-on experience</span>, we bring 
              unmatched expertise and reliability to every project we undertake.
            </p>
          </div>

          {/* Enhanced Services Button */}
          <div className="mt-8 md:mt-12">
            <Link 
              to="/services"
              className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-orange-500/30 relative overflow-hidden group"
            >
              <span className="relative z-10">View Our Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Enhanced Stats Section - Non-scrolling Grid Layout */}
          <div className="mt-8 md:mt-12 lg:mt-16 pt-5">
            {/* Desktop Grid - 3 cards in one row */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-card/50 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-border hover:border-orange-500 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <Counter end={35} suffix="+" duration={2} />
                </h3>
                <p className="text-muted-foreground text-base relative z-10 font-semibold">Years of Experience</p>
                <p className="text-orange-400 text-sm mt-2 relative z-10">Since 1987</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-border hover:border-yellow-500 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <Counter end={1000} suffix="+" duration={2.5} />
                </h3>
                <p className="text-muted-foreground text-base relative z-10 font-semibold">Projects Completed</p>
                <p className="text-yellow-400 text-sm mt-2 relative z-10">Across Chennai</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-border hover:border-orange-500 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <Counter end={100} suffix="%" duration={2} />
                </h3>
                <p className="text-muted-foreground text-base relative z-10 font-semibold">Quality Commitment</p>
                <p className="text-orange-400 text-sm mt-2 relative z-10">Best in Class</p>
              </div>
            </div>

            {/* Mobile Layout - 2x1 Grid */}
            <div className="md:hidden">
              {/* First Row - 2 Cards */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-orange-500/50 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-3xl font-bold text-primary mb-2 relative z-10">
                    <Counter end={100} suffix="%" duration={1.5} />
                  </h3>
                  <p className="text-muted-foreground text-xs relative z-10 font-semibold">Quality Commitment</p>
                  <p className="text-orange-400 text-xs mt-1 relative z-10">Best in Class</p>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-yellow-500/50 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-3xl font-bold text-primary mb-2 relative z-10">
                    <Counter end={1000} suffix="+" duration={2} />
                  </h3>
                  <p className="text-muted-foreground text-xs relative z-10 font-semibold">Projects Done</p>
                  <p className="text-yellow-400 text-xs mt-1 relative z-10">Across Chennai</p>
                </div>
              </div>
              
              {/* Second Row - 1 Card (Centered) */}
              <div className="flex justify-center">
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-orange-500/50 transition-all duration-300 group relative overflow-hidden w-full max-w-[calc(50%-0.5rem)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-3xl font-bold text-primary mb-2 relative z-10">
                    <Counter end={35} suffix="+" duration={1.5} />
                  </h3>
                  <p className="text-muted-foreground text-xs relative z-10 font-semibold">Years Experience</p>
                  <p className="text-orange-400 text-xs mt-1 relative z-10">Since 1987</p>
                </div>
              </div>
            </div>
          </div>


            </div>
          </div>     
    </section>
  );
};

export default AboutSection;