import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ash from "/src/assets/home/mash.png";
import sat from "/src/assets/home/star.png";
import cur from "/src/assets/home/circ.png";
import luf from "/src/assets/home/left.png";
import gow from "/src/assets/home/Grou.png";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function QuoteSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const shapes = gsap.utils.toArray(".background-shape");

    const uniqueRotations = [180, -270, 360, 270, -180];

    shapes.forEach((shape, i) => {
      gsap.fromTo(
        shape,
        { rotation: 0 },
        {
          rotation: uniqueRotations[i % uniqueRotations.length],
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1 + i * 0.3,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="self-stretch  relative bg-black flex items-center justify-center px-4 py-50 overflow-hidden"
      >
        {/* ✅ Desktop layout (unchanged) */}
        <div className="hidden lg:flex absolute inset-0 z-0 items-center justify-between px-4 md:px-8">
          <img src={luf} alt="Left shape" className="background-shape w-40 h-40 opacity-30 object-contain" />
          <img src={sat} alt="Background star" className="background-shape w-40 h-40 opacity-30 object-contain" />
          <img src={cur} alt="Background circle" className="background-shape w-40 h-40 opacity-30 object-contain" />
          <img src={ash} alt="Background shape" className="background-shape w-40 h-40 opacity-30 object-contain" />
          <img src={gow} alt="Background group" className="background-shape w-40 h-40 opacity-30 object-contain" />
        </div>

        {/* ✅ Mobile & Tablet layout (centered background shapes) */}
        <div className="lg:hidden absolute inset-0 z-0 flex flex-wrap items-center justify-center gap-6 opacity-30">
          <img src={luf} alt="Left shape" className="background-shape w-20 h-20 sm:w-24 sm:h-24 object-contain" />
          <img src={sat} alt="Background star" className="background-shape w-20 h-20 sm:w-24 sm:h-24 object-contain" />
          <img src={cur} alt="Background circle" className="background-shape w-20 h-20 sm:w-24 sm:h-24 object-contain" />
          <img src={ash} alt="Background shape" className="background-shape w-20 h-20 sm:w-24 sm:h-24 object-contain" />
          <img src={gow} alt="Background group" className="background-shape w-20 h-20 sm:w-24 sm:h-24 object-contain" />
        </div>

        {/* Text content */}
        <div className="relative z-10 text-center px-4 h-auto">
          <div className="text-amber-500 text-3xl md:text-5xl lg:text-4xl font-semibold leading-snug md:leading-[60px]font-worksans">
            Why EtThicks Exists
          </div>
          <div className="mt-4 w-full max-w-5xl mx-auto">
            <span className="text-gray-300 text-base sm:text-lg md:text-2xl font-normal leading-relaxed md:leading-10 font-nunito">
              “I started EtThicks to take brands in every direction possible —
              not just in reach, but in trust. Because when stories are told
              right, they don’t just sell. They live.”
              <br />
            </span>
            <span className="text-white text-sm sm:text-lg md:text-2xl font-normal leading-relaxed md:leading-9">
              {" "}—{" "}
            </span>
            <span className=" text-gray-300 text-sm sm:text-lg md:text-2xl font-semibold leading-relaxed md:leading-9 font-nunito">
              <span className="font-worksans md:text-3xl text-white mr-2">
                Lenin,</span> Founder & Content Strategist
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuoteSection;
