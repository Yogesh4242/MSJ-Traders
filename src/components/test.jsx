import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const frameCount = 120; // 🧠 change this to your actual frame count
  const images = useRef([]);
  const contextRef = useRef(null);
  const renderRef = useRef(null);

  // Get frame path dynamically (✅ works with your folder)
  const currentFrame = (index) =>
    new URL(
      `./assets/Frames/frame_${index.toString().padStart(4, "0")}.jpg`,
      import.meta.url
    ).href;

  // 🖼️ Draw a frame (maintain aspect ratio)
  const render = (index) => {
    const context = contextRef.current;
    const canvas = canvasRef.current;
    const img = images.current[index];

    if (!context || !img) return;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
      drawHeight = canvas.height;
      drawWidth = img.width * (canvas.height / img.height);
      offsetX = -(drawWidth - canvas.width) / 2;
      offsetY = 0;
    } else {
      drawWidth = canvas.width;
      drawHeight = img.height * (canvas.width / img.width);
      offsetX = 0;
      offsetY = -(drawHeight - canvas.height) / 2;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // 🧠 Handle resize to maintain aspect ratio
  const handleResize = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render(renderRef.current || 0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 🧩 Preload frames
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.current.push(img);
    }

    // First frame
    images.current[0].onload = () => render(0);

    // 🎞️ Scroll-triggered frame animation
    const animationObj = { frame: 0 };
    gsap.to(animationObj, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom+=1000 top",
        scrub: true,
      },
      onUpdate: () => {
        renderRef.current = animationObj.frame;
        render(animationObj.frame);
      },
    });

    // ✨ Floating card animation
    gsap.from(".hero-card", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // 📱 Resize listener
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
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
      {/* 🔹 Scroll video background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔹 Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* 🔹 Hero Content */}
      <div className="hero-card relative z-10 bg-[#101010]/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl p-10 md:p-16 text-center mx-4">
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

      {/* 🔹 Fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#121212]" />
    </section>
  );
};

export default HeroSection;