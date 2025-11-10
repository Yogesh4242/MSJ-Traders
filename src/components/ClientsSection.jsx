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

// Separate Body Components for Each Client
const LNTBody = ({ client }) => (
  <div className="p-6 space-y-6">
    <div>
      <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 rounded-lg p-4 flex justify-between items-center border border-blue-500/30 shadow-2xl">
        <h4 className="text-lg font-semibold text-white">Total Area: 2,50,000 Sq.ft</h4>
        <h4 className="text-lg font-semibold text-white ">📍 Chennai </h4>
      </div>
    </div>

    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-blue-500/20 shadow-2xl">
      <h4 className="font-semibold text-white mb-3 text-blue-300">Manapakam complex</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h5 className="font-medium text-white mb-2">sq.ft: </h5>
          <ul className="text-sm text-gray-300 space-y-1">
            <h2>Data for this project is not yet avaliable</h2>
            <h2>Data for this project is not yet avaliable</h2>            
            <h2>Data for this project is not yet avaliable</h2>                  
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-blue-500/20 shadow-2xl">
      <h4 className="font-semibold text-white mb-3 text-blue-300">Siva Nadar School</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h5 className="font-medium text-white mb-2">sq.ft: </h5>
          <ul className="text-sm text-gray-300 space-y-1">
            <h2>Data for this project is not yet avaliable</h2>
            <h2>Data for this project is not yet avaliable</h2>                          
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const TATABody = ({ client }) => (
  <div className="p-6 space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 rounded-lg p-4 border border-green-500/30 shadow-2xl">
        <h4 className="text-lg font-semibold text-white text-center">1,50,000 Sq.ft</h4>
        <p className="text-green-300 text-center text-sm">Commercial Space</p>
      </div>
      <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 rounded-lg p-4 border border-green-500/30 shadow-2xl">
        <h4 className="text-lg font-semibold text-white text-center">Located in Chennai</h4>
        <p className="text-green-300 text-center text-sm">Main Office</p>
      </div>
    </div>

    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-blue-500/20 shadow-2xl">
      <h4 className="font-semibold text-white mb-3 text-blue-300">PADAPAI PROJECT</h4>
      <div className="space-y-3">
        <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/20">
          <h5 className="font-semibold text-white mb-2 text-green-300">Project Details</h5>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>• Demolished an 8 floor building in (PADAPAI)</li>
            <li>• Square feet: 1,50,000 (B2+8)</li>
            <li>• Time period: 3 months</li>
            <li>• Date: ------</li>
            <li>• Location: Padapai, chennai</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const BNRBody = ({ client }) => (
  <div className="p-6 space-y-6">
    <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 rounded-lg p-6 border border-red-500/30 shadow-2xl text-center">
      <h4 className="text-2xl font-bold text-white mb-2">3,20,000 Sq.ft</h4>
      <p className="text-red-300">Total area designated for demolition under the BNR projects.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-red-500/20 shadow-2xl">
        <h4 className="font-semibold text-white mb-3 text-red-300">Tirupati Thoda Building</h4>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>• Location: Tirupati</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-red-500/20 shadow-2xl">
        <h4 className="font-semibold text-white mb-3 text-red-300">Kilpauk Hospital</h4>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>• Location: chennai</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-red-500/20 shadow-2xl">
        <h4 className="font-semibold text-white mb-3 text-red-300">Tirupati Corporation Municipality</h4>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>• Location: Tirupathi</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-red-500/20 shadow-2xl">
        <h4 className="font-semibold text-white mb-3 text-red-300">Vikas College</h4>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>• Location: Inamkulathur</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-red-500/20 shadow-2xl">
        <h4 className="font-semibold text-white mb-3 text-red-300">Anna Rao Circle</h4>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>• Location: Tirupati</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-red-500/20 shadow-2xl">
        <h4 className="font-semibold text-white mb-3 text-red-300">College Opposite ---------name--</h4>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>• Location: Royapettah</li>
        </ul>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-red-500/20 shadow-2xl">
          <h4 className="font-semibold text-white mb-3 text-red-300">Madhavaram --name--</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>• Location: Madhavaram</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-red-500/20 shadow-2xl">
          <h4 className="font-semibold text-white mb-3 text-red-300">Kandigai --name--</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>• Location: Kandigai</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const AFCONSBody = ({ client }) => (
  <div className="p-6 space-y-6">
    <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 rounded-lg p-4 border border-purple-500/30 shadow-2xl">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-semibold text-white">Project Scale</h4>
          <p className="text-purple-300">4,50,000 Sq.ft Development</p>
        </div>
        <div className="text-right">
          <h4 className="text-lg font-semibold text-white">Tirupati</h4>
          <p className="text-purple-300">Andhra Pradesh</p>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-purple-500/20 shadow-2xl">
      <h4 className="font-bold text-white mb-4 text-purple-300 text-center">Project Details</h4>
      
      <div className="space-y-4">
        <div className ="">
          <h5 className="font-medium text-white mb-2">Tirumala Tirupati Devasthanam:</h5>
          <p className="text-gray-300 text-sm">Project - 1
     • tirumalai tirupati tevasthanam 
       Square feet : 
       Time period : 
       Date : 
       Location : tirupati 
Project - 2
     • tirupati 
       Square feet : 
       Time period : 
       Date : 
       Location : tirupati 


</p>

//repeat this div to make points ---- details needed -----
        </div>
      </div>
    </div>
    
  </div>
);

const UJWALABody = ({ client }) => (
  <div className="p-6 space-y-6">
    <div className="bg-gradient-to-r from-orange-900/50 to-orange-800/50 rounded-lg p-4 border border-orange-500/30 shadow-2xl">
        <div className="flex justify-between">
        <div className="text-center">
          <p className="text-orange-300 text-sm">Area</p>
          <p className="text-white font-semibold">1,50,000 Sq.ft</p>
        </div>
       
        <div className="text-center">
          <p className="text-orange-300 text-sm">Location</p>
          <p className="text-white font-semibold">Chennai</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-orange-500/20 shadow-2xl">
        <h4 className="font-semibold text-white mb-3 text-orange-300">VR Chennai</h4>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>• ---Type of building---</li>
          <li>• Square feet : ------</li>
          <li>• location: chennai</li>
          <li>• ---time period ---</li>
        </ul>
      </div>
      
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-orange-500/20 shadow-2xl">
        <h4 className="font-semibold text-white mb-3 text-orange-300">Music College</h4>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>• ---Type of building---</li>
          <li>• Square feet : 40,000</li>
          <li>• location tirupathi</li>
          <li>• ---time period ---</li>
        </ul>
      </div>
    </div>

    
    </div>
);

// Client Body Mapper
const ClientBody = ({ client }) => {
  const bodyComponents = {
    'L&T': LNTBody,
    'TATA': TATABody,
    'BNR': BNRBody,
    'AFCONS': AFCONSBody,
    'UJWALA': UJWALABody,
  };

  const BodyComponent = bodyComponents[client.name] || LNTBody;
  
  return <BodyComponent client={client} />;
};

// Marquee Components
const MarqueeClient = ({ client, index }) => (
  <div className="flex-shrink-0 bg-card/50 backdrop-blur-sm rounded-lg px-8 py-6 border border-border hover:border-primary hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 mx-4">
    <p className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap">
      {client}
    </p>
  </div>
);



const ClientsSection = () => {
  const sectionRef = useRef(null);
  const topClientsRef = useRef(null);
  const carouselRef = useRef(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);

  // Top featured clients
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

  // Other clients
  const otherClients = [
    "RR TULASI",
    "CASAGRAND",
    "MAHARISHI",
    "TN POLICE HOUSING COR",
    "K.S. RAVIKUMAR (DIR)",
    "SIVA -3 SITE (ACTOR)",
    "VASANTH (DIR)",
    "SV.SEGAR",
    "DEVAGIYA TRADERS / NAGALUR",
    "TIRUPATHI AFGANS",
    "TTT",
    "BASHEM",
    "MURUGAPPA GROUP"
  ];

  // Desktop Marquee Component - Split names between two rows
const DesktopMarquee = () => {
  // Split otherClients array into two halves
  const half = Math.ceil(otherClients.length / 2);
  const firstHalf = otherClients.slice(0, half);
  const secondHalf = otherClients.slice(half);
  
  // Create marquee arrays for each row with duplicates
  const desktopRow1Clients = [...firstHalf, ...firstHalf, ...firstHalf];
  const desktopRow2Clients = [...secondHalf, ...secondHalf, ...secondHalf];

  return (
    <div className="marquee-container">
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 md:mb-12 text-foreground">
        Other Valued Clients
      </h3>
      
      {/* First Row - First half of names scrolling left */}
      <div className="marquee-row relative overflow-hidden mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee-left">
          {desktopRow1Clients.map((client, index) => (
            <MarqueeClient key={`desktop-left-${index}`} client={client} index={index} />
          ))}
        </div>
      </div>

      {/* Second Row - Second half of names scrolling right */}
      <div className="marquee-row relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee-right">
          {desktopRow2Clients.map((client, index) => (
            <MarqueeClient key={`desktop-right-${index}`} client={client} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Mobile Marquee Component - Split names between two rows
const MobileMarquee = () => {
  // Split otherClients array into two halves
  const half = Math.ceil(otherClients.length / 2);
  const firstHalf = otherClients.slice(0, half);
  const secondHalf = otherClients.slice(half);
  
  // Create marquee arrays for each row with duplicates
  const mobileRow1Clients = [...firstHalf, ...firstHalf, ...firstHalf, ...firstHalf, ...firstHalf];
  const mobileRow2Clients = [...secondHalf, ...secondHalf, ...secondHalf, ...secondHalf, ...secondHalf];

  return (
    <div className="marquee-container">
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 md:mb-12 text-foreground">
        Other Valued Clients
      </h3>
      
      {/* First Row - First half of names scrolling left */}
      <div className="marquee-row relative overflow-hidden mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee-left-mobile">
          {mobileRow1Clients.map((client, index) => (
            <MarqueeClient key={`mobile-left-${index}`} client={client} index={index} />
          ))}
        </div>
      </div>

      {/* Second Row - Second half of names scrolling right */}
      <div className="marquee-row relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee-right-mobile">
          {mobileRow2Clients.map((client, index) => (
            <MarqueeClient key={`mobile-right-${index}`} client={client} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

  // Carousel navigation
  const navigateSlide = (direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const carousel = carouselRef.current;
    
    gsap.to(carousel, {
      x: direction === 'next' ? -50 : 50,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        setCurrentSlide((prev) => 
          direction === 'next' 
            ? (prev === topClients.length - 1 ? 0 : prev + 1)
            : (prev === 0 ? topClients.length - 1 : prev - 1)
        );
        
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
      const swipeThreshold = 60;
      const tapTimeThreshold = 300;
      
      gsap.to(carousel, {
        x: 0,
        duration: 0.2,
        ease: 'power2.out'
      });

      if (hasMoved && Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      } 
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
      gsap.from('.clients-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.clients-title',
          start: 'top 80%',
        },
      });

      if (window.innerWidth >= 768) {
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

      gsap.from('.marquee-row', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.marquee-container',
          start: 'top 85%',
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
    <section id="clients" ref={sectionRef} className="pt-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
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
            <div className="overflow-hidden rounded-2xl">
              <div ref={carouselRef} className="carousel-slide">
                <div
                  className="top-client-card bg-card rounded-2xl p-6 border-2 border-primary cursor-pointer h-full"
                  onClick={(e) => {
                    if (!isSwiping) {
                      setSelectedClient(topClients[currentSlide]);
                    }
                  }}
                >
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
                  
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4 text-left">
                    {topClients[currentSlide].description.substring(0, 100)}...
                  </p>

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

                  <button 
                    className="w-full mt-4 bg-primary text-primary-foreground py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
                    onClick={() => setSelectedClient(topClients[currentSlide])}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 px-4">
              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
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

            <div className="text-center mt-2">
              <span className="text-sm text-muted-foreground">
                {currentSlide + 1} / {topClients.length}
              </span>
            </div>

            <div className="text-center mt-2">
              <span className="text-xs text-muted-foreground">
                Swipe to navigate
              </span>
            </div>
          </div>
        </div>

        {/* Other Clients - Different for Mobile and Desktop */}
        <div className="hidden md:block">
          <DesktopMarquee  />
        </div>
        <div className="md:hidden">
          <MobileMarquee />
        </div>
      </div>

      {/* Popup Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="popup-content bg-card border-2 border-primary rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in-zoom-in">
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

            <ClientBody client={selectedClient} />

            <div className="border-t border-border p-4 bg-muted/20">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  ------something about working experience with the company ------
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

      {/* CSS animations for marquee */}
      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes marquee-left-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right-mobile {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
        .animate-marquee-left-mobile {
          animation: marquee-left-mobile 15s linear infinite;
        }
        .animate-marquee-right-mobile {
          animation: marquee-right-mobile 15s linear infinite;
        }
        
        .animate-marquee-left:hover,
        .animate-marquee-right:hover,
        .animate-marquee-left-mobile:hover,
        .animate-marquee-right-mobile:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;