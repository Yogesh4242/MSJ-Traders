import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

// 🔹 Dynamic GSAP import for browser-only use
let gsap;
if (typeof window !== "undefined") {
  (async () => {
    const gsapModule = await import("gsap");
    gsap = gsapModule.gsap || gsapModule.default || gsapModule;
  })();
}

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !gsap) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToClients = () => {
    document.querySelector("#clients")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="
        relative min-h-screen
        flex items-center justify-center
        overflow-hidden bg-black
        pt-0
      "
    >
      {/* 🔹 Background Image */}
      <div className="absolute inset-0">
        <img
         src="/compresed-hero-bg.webp "
         alt="Demolition site"
         className="
    absolute inset-0
    w-full h-full object-cover
    object-[right_10%] hidden md:block    /* mobile */
    sm:object-[center]    /* small devices */
    md:object-[50%_10%]      /* desktop */
  "
/>

<img
    src="/bg-mobile-upscaled.webp"
    alt="Demolition site"
    className="
      absolute inset-0
      w-full h-full object-cover
      object-[33%_10%]
      md:hidden
       
    "
    
  />


        {/* 🔹 Strong gradient for readability */}
        <div
          className="
          absolute inset-0 bg-gradient-to-b
          from-black/40 via-black/60 to-black/60
          md:from-black/40 md:via-black/40 md:to-black/60
        "
        />
      </div>

      {/* 🔹 Text Content */}
      <div className="hero-card relative z-10 px-4 sm:px-8 text-center max-w-4xl pt-20">
        <h1
          className="
            text-3xl sm:text-4xl md:text-6xl 
            font-bold text-white 
            mb-6 leading-snug sm:leading-tight
          "
        >
          Building the Future by{" "}
          <span
            className="
              block bg-gradient-to-r 
              from-orange-400 via-orange-500 to-yellow-400 
              bg-clip-text text-transparent 
              pb-2 sm:pb-3
            "
          >
            Dismantling the Past
          </span>
        </h1>

        <p
          className="
            text-gray-300 
            text-base sm:text-lg md:text-xl 
            mb-8 font-light px-2
          "
        >
          Professional demolition services with over{" "}
          <span className="text-orange-400 font-semibold whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,180,60,0.4)]">
              35 years
            </span>       {" "}
          of excellence, precision, and safety.
        </p>

        <Button
          onClick={scrollToClients}
          size="lg"
          className="
            px-8 sm:px-10 py-4 sm:py-6 
            text-base sm:text-lg font-semibold
            bg-gradient-to-r from-orange-500 to-yellow-400 text-black 
            rounded-xl 
            shadow-[0_0_30px_rgba(255,180,80,0.3)]
            hover:shadow-[0_0_40px_rgba(255,200,100,0.6)]
            hover:scale-105 transition-all
          "
        >
          View Our Clients
        </Button>
      </div>

      {/* 🔹 Fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#121212]" /> 
      
    </section>
  );
};

export default HeroSection;
