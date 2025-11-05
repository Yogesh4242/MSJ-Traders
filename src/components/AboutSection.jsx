import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-gradient-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="about-content max-w-4xl mx-auto text-center">
          {/* Header without underline */}
          <div className="relative mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-gold relative z-10">
              About MSJ Traders
            </h2>
          </div>
          
          {/* Company Established Badge */}
          <div className="inline-block bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-full px-6 py-3 mb-8">
            <p className="text-orange-300 font-semibold text-lg">
              Established in 1987 • 35+ Years of Excellence
            </p>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed">
            <p>
              Founded in <span className="text-primary font-semibold">1987</span> by our visionary leader{' '}
              <span className="text-primary font-semibold">Mr. J. Mohideen</span>, MSJ Traders has been 
              a pioneering force in the industry for over three decades.
            </p>
            
            <p>
              We are committed to delivering the <span className="text-primary font-semibold">best quality services</span> 
              with exceptional speed and efficiency, ensuring every project is completed within the shortest possible timeframe 
              without compromising on excellence.
            </p>
            
            <p>
              Equipped with <span className="text-primary font-semibold">Chennai's most advanced machinery</span> and 
              backed by <span className="text-primary font-semibold">35 years of hands-on experience</span>, we bring 
              unmatched expertise and reliability to every project we undertake.
            </p>
          </div>

          {/* Enhanced Services Button */}
          <div className="mt-12">
            <Link 
              to="/services"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl hover:shadow-orange-500/30 relative overflow-hidden group"
            >
              <span className="relative z-10">View Our Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-orange-500 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-5xl font-bold text-primary mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300">35+</h3>
              <p className="text-muted-foreground relative z-10 font-semibold">Years of Experience</p>
              <p className="text-orange-400 text-sm mt-2 relative z-10">Since 1987</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-yellow-500 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-5xl font-bold text-primary mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300">1000+</h3>
              <p className="text-muted-foreground relative z-10 font-semibold">Projects Completed</p>
              <p className="text-yellow-400 text-sm mt-2 relative z-10">Across Chennai</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-orange-500 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-5xl font-bold text-primary mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300">100%</h3>
              <p className="text-muted-foreground relative z-10 font-semibold">Quality Commitment</p>
              <p className="text-orange-400 text-sm mt-2 relative z-10">Best in Class</p>
            </div>
          </div>

          {/* Our Quality Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-white mb-4">Our Quality</h4>
            <p className="text-foreground/90 text-lg leading-relaxed">
              We are renowned for completing demolition jobs more quickly and cost-effectively than our competitors. 
              We have got high quality equipments for Dismantling and Demolitions, ensuring superior results 
              with unmatched efficiency and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;