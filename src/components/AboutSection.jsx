import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom'; // Add this import

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
            About MSJ Traders
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed">
            <p>
              With over <span className="text-primary font-semibold">20 years</span> of excellence in the demolition industry, 
              MSJ Traders has established itself as a trusted partner for complex demolition and site clearance projects.
            </p>
            
            <p>
              Our commitment to <span className="text-primary font-semibold">safety, precision, and environmental responsibility</span> sets us apart. 
              We combine state-of-the-art equipment with highly trained professionals to deliver results that exceed expectations.
            </p>
            
            <p>
              From residential teardowns to large-scale commercial demolitions, we've successfully completed hundreds of projects, 
              earning the trust of South Africa's leading construction companies and developers.
            </p>
          </div>

          {/* Add the Services Button */}
          <div className="mt-12">
            <Link 
              to="/services"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
            >
              View Our Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary transition-all duration-300">
              <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary transition-all duration-300">
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary transition-all duration-300">
              <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
              <p className="text-muted-foreground">Safety Record</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;