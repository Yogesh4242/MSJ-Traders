import { useEffect, useState } from "react";

/* ================= IMAGE IMPORTS ================= */

import cardImg1 from "./assets/card_img1.jpg";
import cardImg2 from "./assets/card_img2.jpg";
import cardImg3 from "./assets/card_img3.jpg";
import cardImg4 from "./assets/card_img4.jpg";
import cardImg5 from "./assets/card_img5.webp";
import hoard from "./assets/hoarding1.jpg";
import hoard2 from "./assets/hoarding2.jpg";

/* ================= DATA ================= */

const serviceBoxes = [
  {
    id: 1,
    title: "Residential Demolition",
    description:
      "Safe and controlled demolition solutions for houses, villas, and residential structures with minimal disturbance.",
    image: cardImg1,
  },
  {
    id: 2,
    title: "Commercial Demolition",
    description:
      "End-to-end demolition services for offices, malls, and commercial complexes following strict safety standards.",
    image: cardImg2,
  },
  {
    id: 3,
    title: "Industrial Demolition",
    description:
      "Heavy-duty demolition for factories, warehouses, and industrial plants using advanced machinery and planning.",
    image: cardImg3,
  },
  {
    id: 4,
    title: "Tank Demolition",
    description:
      "Professional waterproofing services to prevent leakage, dampness, and long-term structural damage.",
    image: cardImg4,
  },
  {
    id: 5,
    title: "Renovation & Remodeling",
    description:
      "Complete renovation and remodeling solutions to modernize interiors and improve space functionality.",
    image: cardImg5,
  },
];

/* ================= COMPONENT ================= */

export default function ServicesCardStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (


    
    <section className="w-full bg-background py-20 overflow-hidden">

        <div className="container mx-auto px-4 ">
            <a href="/services" className="block text-center">
          <h2 className="services-title text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-gold pl-2 breathing-underline">

            Our Core Services
                   
          </h2>
          </a>
        </div>
      {/* ================= DESKTOP ================= */}
      {!isMobile && (
        <div className="w-full px-6">
          {/* ROW 1 */}
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
            {serviceBoxes.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="
                  h-[350px] 
                  rounded-2xl
                  bg-card/60 backdrop-blur-md
                  border border-border
                  shadow-lg
                "
              >
                <CardContent {...item} />
              </div>
            ))}
          </div>

          {/* ROW 2 */}
          <div className="max-w-4xl mx-auto mt-6 grid grid-cols-2 gap-4">
            {serviceBoxes.slice(3).map((item) => (
              <div
                key={item.id}
                className="
                  h-[350px]
                  rounded-2xl
                  bg-card/60 backdrop-blur-md
                  border border-border
                  shadow-lg
                "
              >
                <CardContent {...item} />
              </div>
            ))}
          </div>
        </div>
      )}

{/* ================= MOBILE (TRUE SEAMLESS + TOUCH) ================= */}
{isMobile && (
  <div className="services-marquee-viewport">
    <div className="services-marquee-mask">
      <div className="services-marquee-belt">
        {[0, 0, 2].map((copy) => (
          <div className="services-marquee-track" key={copy}>
            {serviceBoxes.map((item) => (
              <div
                key={`${item.id}-${copy}`}
                className="services-marquee-card h-[360px] rounded-2xl bg-card/60 backdrop-blur-md border border-border shadow-md"
              >
                <CardContent {...item} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>



)}



      {/* ================= LOCAL SCOPED STYLES ================= */}
  <style>{`




.breathing-underline {
  position: relative;
  padding-bottom: 10px;
}

.breathing-underline::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, #f59e0b, #facc15);
  border-radius: 999px;
  transform: translateX(-50%) scaleX(0.85);
  opacity: 0.6;
  animation: underline-breathe 3s ease-in-out infinite;
}

@keyframes underline-breathe {
  0% {
    transform: translateX(-50%) scaleX(0.90);
    opacity: 0.4;
  }
  50% {
    transform: translateX(-50%) scaleX(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) scaleX(0.90);
    opacity: 0.4;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .breathing-underline::after {
    animation: none;
    opacity: 1;
    transform: translateX(-50%) scaleX(1);
  }
}


/* ===== MOBILE SEAMLESS MARQUEE (BULLETPROOF) ===== */

.services-marquee-viewport {
  width: 100%;
  overflow-x: auto;
  pointer-events: none;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
}

.services-marquee-mask {
  width: 100%;
  overflow: hidden;
}

.services-marquee-belt {
  display: flex;
  width: max-content;
  animation: services-marquee-scroll 32s linear infinite;
  will-change: transform;
}

.services-marquee-track {
  display: flex;
  gap: 16px;
  padding: 0 16px;
}

.services-marquee-card {
  width: 280px;
  flex-shrink: 0;
}

/* Move only ONE track width */
@keyframes services-marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-33.3333%);
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .services-marquee-belt {
    animation: none;
  }
}
`}</style>

{/* ================= HOARDING / BARRICADE ================= */}
<div className="mt-24">
  <div className="max-w-7xl mx-auto px-4">

    {/* Title */}
    <h3 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-10">
      Hoarding / Barricade Services
    </h3>

    {/* ================= DESKTOP ================= */}
    <div className="hidden md:block relative">

      {/* LEFT IMAGE */}
      <div className="w-[38%]">
        <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-card/60 backdrop-blur-sm">
          <img
            src={hoard2}
            alt="Hoarding Barricade – Site View"
            loading="lazy"
            className="w-full h-[220px] object-cover"
          />
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="max-w-3xl mx-auto -mt-16">
        <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl shadow-lg px-8 py-6">
          <p className="text-base text-foreground/90 leading-relaxed mb-4">
            We provide professionally installed <span className="font-semibold text-gradient-gold ">hoarding and barricade systems</span> to secure demolition and construction sites, ensuring safety for pedestrians, neighbouring properties, and on-site workers.
          </p>

          <p className="text-base text-foreground/85 leading-relaxed">
            Our barricades help control dust, noise, and site visibility while maintaining a clean and organized perimeter suitable for safety signage and project branding.
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="ml-auto w-[38%] -mt-10">
        <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-card/60 backdrop-blur-sm">
          <img
            src={hoard}
            alt="Hoarding Barricade – Street Side"
            loading="lazy"
            className="w-full h-[220px] object-cover"
          />
        </div>
      </div>
    </div>

    {/* ================= MOBILE ================= */}
    <div className="md:hidden">
      <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-card/60 backdrop-blur-sm">
        <img
          src={hoard}
          alt="Hoarding and Barricade Services"
          loading="lazy"
          className="w-full h-[260px] object-cover"
        />
      </div>

      <p className="mt-5 text-sm text-foreground/90 leading-relaxed">
        We provide professional hoarding and barricade solutions to secure construction and demolition sites, ensuring public safety while maintaining a clean and organized site appearance.
      </p>
    </div>

  </div>
</div>

    </section>
  );
}

/* ================= CARD CONTENT ================= */

function CardContent({ title, description, image }) {
  return (
    <div className="h-full flex flex-col overflow-hidden rounded-2xl">
      {/* Image */}
      <div className="relative h-[48%] w-full">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex-1 p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
    
  );
}
