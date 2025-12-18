import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import iem from "/src/assets/home/IM.png";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const textRef = useRef(null);
  const overlayTextRef = useRef(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      
      if (isMobile) {
        // Mobile: NO text fade - text stays visible
        // Only overlay text animation remains
        
        ScrollTrigger.create({
          trigger: imageContainerRef.current,
          start: "center center",
          end: "bottom bottom",
          onUpdate: (self) => {
            if (self.progress >= 0.6 && !animationTriggered.current) {
              animationTriggered.current = true;
              gsap.set(overlayTextRef.current, { y: 40, opacity: 0 });
              gsap.to(overlayTextRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
              });
            }
          },
        });
      } else {
        // Desktop: Image expansion animation
        gsap.to(imageContainerRef.current, {
          width: "100%",
          height: "70vh",
          borderRadius: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
              if (self.progress >= 0.99 && !animationTriggered.current) {
                animationTriggered.current = true;
                gsap.set(overlayTextRef.current, { y: 80, opacity: 0 });
                gsap.to(overlayTextRef.current, {
                  y: 0,
                  opacity: 1,
                  duration: 1.5,
                  ease: "power3.out",
                  delay: 0.3,
                });
              }
            },
          },
        });

        // Desktop: Text fade out
        gsap.to(textRef.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center center",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      animationTriggered.current = false;
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-[150vh] bg-black flex flex-col items-center justify-center md:justify-start pt-8 sm:pt-12 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8 lg:px-10 pb-8 md:pb-0"
    >
      {/* Text Section - Centered */}
      <div
        ref={textRef}
        className="text-center w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto"
      >
        <div className="mb-2 sm:mb-3 md:mb-4">
          <h4 className="text-amber-500 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold uppercase tracking-wide">
            About Us
          </h4>
        </div>
        <h2 className="text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal font-['Nunito'] text-white uppercase leading-tight sm:leading-snug md:leading-snug">
          Your Brand Has a <span className="text-orange-400">Story</span>. We'll
          Take It <span className="text-orange-400">Everywhere</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-normal font-['Nunito'] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-9 mt-3 sm:mt-4 md:mt-6 lg:mt-8">
          EtThicks is not just another digital agency — we're a storytelling
          powerhouse rooted in truth, trust, and transformation. Born from the
          Tamil word "Ettuthikkum", meaning to reach in all eight directions, we
          specialize in content that carries your brand farther — emotionally,
          culturally, and commercially.
        </p>
      </div>

      {/* Image Section - Centered */}
      <div className="w-full flex flex-col justify-center items-center mt-4 sm:mt-6 md:mt-12 lg:mt-16">
        <div
          ref={imageContainerRef}
          className="relative w-[90%] sm:w-[85%] md:w-[520px] lg:w-[600px]
                     h-[347px] sm:h-[280px] md:h-[320px] lg:h-[405px]
                     rounded-xl sm:rounded-2xl md:rounded-3xl
                     overflow-hidden mx-auto"
        >
          <img
            src={iem}
            alt="EtThicks"
            className="w-full h-full object-cover"
          />

          {/* Overlay text - Centered at bottom */}
          <div
            ref={overlayTextRef}
            className="absolute inset-0 flex items-end justify-center 
                       p-4 sm:p-5 md:p-6 lg:p-8 xl:p-12 
                       bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[26px] 
                          text-white text-center font-['Nunito'] 
                          max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 
                          leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose
                          px-2 sm:px-4">
              We combine emotion-first narratives with strategy, helping 
              brands break clutter, spark connection, and drive measurable 
              growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
