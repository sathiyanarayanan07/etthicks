import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import iem from "/src/assets/home/abt.png";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SAME animation for BOTH mobile AND desktop
      gsap.set(imageRef.current, { scale: 0, transformOrigin: "center center" });

      ScrollTrigger.create({
        trigger: imageContainerRef.current,
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1.5,
        onUpdate: (self) => {
          // Smooth scale from 0 → 1.5 based on scroll progress (BOTH devices)
          gsap.to(imageRef.current, {
            scale: 1.5 * self.progress,
            ease: "none"
          });

          if (self.progress >= 0.6 && !animationTriggered.current) {
            animationTriggered.current = true;
          }
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      animationTriggered.current = false;
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full md:min-h-[150vh] bg-black flex flex-col items-center justify-center md:justify-start pt-20 sm:pt-12 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8 lg:px-10 pb-8 md:pb-0"
    >
      {/* Text Section */}
      <div className="text-center w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-max-5xl mx-auto">
        <div className="mb-2 sm:mb-3 md:mb-4">
          <h4 className="text-[#E69500] text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold uppercase tracking-wide font-nunito">
            About Us
          </h4>
        </div>
        <h2 className="text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-white uppercase leading-tight sm:leading-snug md:leading-snug tracking-wider font-worksans">
          Your Brand Has a <span className="text-[#E69500]">Story</span>. We'll <br className="hidden xl:block" />
          Take It <span className="text-[#E69500]">Everywhere</span>
        </h2>
        <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-normal leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-9 mt-3 sm:mt-4 md:mt-6 lg:mt-8 tracking-wider font-nunito">
          EtThicks is not just another digital agency — we're a storytelling
          powerhouse rooted in truth, trust, and transformation. Born from the
          Tamil word "Ettuthikkum", meaning to reach in all eight directions, we
          specialize in content that carries your brand farther — emotionally,
          culturally, and commercially.
        </p>
      </div>

      {/* Image Section - 300vh for mobile scroll space */}
      <div className="w-full flex flex-col justify-start items-center mt-4 sm:mt-6 md:mt-12 lg:mt-0 2xl: xl:h-[160vh] md:h-[150vh] h-[70vh]">
        <div
          ref={imageContainerRef}
          className="sticky top-40 md:top-30 lg:top-25 w-[90%] sm:w-[85%] md:w-[90%] lg:w-[90%] 
                     h-[50vh] sm:h-[280px] md:h-80 lg:h-[405px] xl:h-[80vh]
                     rounded-xl sm:rounded-2xl md:rounded-3xl 
                     overflow-hidden mx-auto shadow-2xl"
        >
          <img
            ref={imageRef}
            src={iem}
            alt="EtThicks"
            className="w-full h-full object-fit"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
