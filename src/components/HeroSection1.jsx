import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "./ui/button";
import heroImage from "./assets/Desktop bg ratio.jpg";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 🔹 Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Demolition site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* 🔹 Floating Card */}
      <div className="hero-card relative z-10 bg-[#101010]/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl   p-10 md:p-16 text-center mx-4 ">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Building the Future by{" "}
          <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent pb-3">
            Dismantling the Past
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8 font-light">
          Professional demolition services with over{" "}
          <span className="text-orange-400 font-semibold drop-shadow-[0_0_8px_rgba(255,180,60,0.4)]">
            35 years
          </span>{" "}
          of excellence, precision, and safety.
        </p>

        <Button
          onClick={scrollToClients}
          size="lg"
          className="px-10 py-6 text-lg font-semibold bg-gradient-to-r from-orange-500 to-yellow-400 text-black rounded-xl shadow-[0_0_30px_rgba(255,180,80,0.3)] hover:shadow-[0_0_40px_rgba(255,200,100,0.6)] hover:scale-105 transition-all"
        >
          View Our Clients
        </Button>
      </div>

      {/* 🔹 Fade to next section color */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#121212]" />
    </section>
  );
};

export default HeroSection;