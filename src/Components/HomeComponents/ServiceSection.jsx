/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import img1 from "/src/assets/home/Ser1.png";
import img2 from "/src/assets/home/Ser2.png";
import img3 from "/src/assets/home/Ser3.png";
import img4 from "/src/assets/home/comersial.png";
import img5 from "/src/assets/home/potography.png";
import img6 from "/src/assets/home/leadgen.png";
import img7 from "/src/assets/home/socialone.png";

// Import SVG images
import svg1 from "/src/assets/Homeconnect/11.svg";
import svg2 from "/src/assets/Homeconnect/22.svg";
import svg3 from "/src/assets/Homeconnect/33.svg";
import svg4 from "/src/assets/Homeconnect/44.svg";
import svg5 from "/src/assets/Homeconnect/55.svg";
import svg6 from "/src/assets/Homeconnect/66.svg";
import svg7 from "/src/assets/Homeconnect/77.svg";
import svg8 from "/src/assets/Homeconnect/88.svg";
import svg9 from "/src/assets/Homeconnect/99.svg";

gsap.registerPlugin(ScrollTrigger);

function ServiceSection() {
  const sectionRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const flyTextRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Mobile: let native vertical scroll handle layout
    if (isMobile) {
      return;
    }

    // Desktop: Lenis smooth scrolling
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Create GSAP context scoped to this component
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");

      // Get the last panel to calculate proper centering
      const lastPanel = panels[panels.length - 1];
      const lastPanelWidth = lastPanel.offsetWidth;
      const viewportWidth = window.innerWidth;

      // Calculate the exact scroll distance needed to center the last panel
      const totalScrollWidth = contentWrapperRef.current.scrollWidth;
      const scrollX =
        totalScrollWidth -
        viewportWidth +
        (viewportWidth - lastPanelWidth) / 3;

      // Main horizontal scroll tween that pins the section
      const mainScrollTween = gsap.to(contentWrapperRef.current, {
        x: -scrollX,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollX}`,
          // Snap to panels
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.2, max: 0.35 },
          },
        },
      });

      // Each panel "zoom in" while in focus
      panels.forEach((panel) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            containerAnimation: mainScrollTween,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        });

        tl.fromTo(
          panel,
          { scale: 0.92, opacity: 0.6 },
          { scale: 1, opacity: 1, ease: "power2.inOut" }
        ).to(panel, {
          scale: 0.92,
          opacity: 0.6,
          ease: "power2.inOut",
        });
      });

      // Marquee / fly text movement synced to horizontal scroll
      if (flyTextRef.current) {
        const marqueeWidth = flyTextRef.current.scrollWidth / 2;
        gsap.to(flyTextRef.current, {
          x: -marqueeWidth,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 1,
            start: "top top",
            end: () => `+=${scrollX}`,
          },
        });
      }
    }, sectionRef);

    // Refresh ScrollTrigger on resize
    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      // Proper cleanup order
      if (rafId) cancelAnimationFrame(rafId);
      ctx.revert();
      if (lenis) lenis.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Framer Motion variants for mobile entrance animations - FASTER LOADING
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const panelVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen overflow-x-hidden pt-8 md:pt-0 hide-scrollbar"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at center, #072a31, #000000)",
      }}
    >
      <motion.div
        ref={contentWrapperRef}
        className="flex flex-col md:flex-row h-full items-center md:items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Title with 100px font size */}
        <motion.div
          className="shrink-0 px-6 sm:px-8 md:px-12 lg:px-20 py-8 md:py-0 text-[#e59300] uppercase font-medium z-10 flex items-center"
          variants={titleVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-[100px] leading-tight text-center md:text-left font-worksans font-semibold">
            OUR <br className="hidden md:block" /> Services
          </h2>
        </motion.div>

        {/* Panels container */}
        <div className="flex flex-col md:flex-row md:min-h-screen md:h-full items-center gap-6 md:gap-12 p-4 sm:p-6 md:pr-20 w-full md:w-auto pb-8 md:pb-0">
          {/* Panel 1 - Content Creation */}
          <motion.div
            className="panel w-full sm:w-[90vw] md:w-[790px] h-auto sm:h-auto md:h-[532px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
            variants={panelVariants}
          >
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-5xl font-medium mb-3 sm:mb-4 font-worksans">
                Content Creation
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
                Reels, ad films, corporate AVs, long-form YouTube — stories that
                captivate and convert.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <img
                src={svg1}
                alt="Content"
                loading="lazy"
                className="w-[396px] h-[293px] object-contain"
              />
            </div>
          </motion.div>

          {/* Panel 2 - Digital Marketing */}
          <motion.div
            className="panel w-full sm:w-[90vw] md:w-[790px] h-auto sm:h-auto md:h-[532px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
            variants={panelVariants}
          >
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-5xl font-medium mb-3 sm:mb-4 font-worksans">
                Digital Marketing
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
                Social strategy, performance campaigns, platform-specific
                content that meets people where they are.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <img
                src={svg2}
                alt="Marketing"
                loading="lazy"
                className="w-[396px] h-[293px] object-contain"
              />
            </div>
          </motion.div>

          {/* Panel 3 - Brand Storytelling */}
          <motion.div
            className="panel w-full sm:w-[90vw] md:w-[790px] h-auto sm:h-auto md:h-[532px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
            variants={panelVariants}
          >
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-5xl font-medium mb-3 sm:mb-4 font-worksans">
                Brand Storytelling
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
                From positioning and emotional narrative to campaign ideation —
                we give your brand a powerful voice.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <img
                src={svg3}
                alt="Storytelling"
                loading="lazy"
                className="w-[396px] h-[293px] object-contain"
              />
            </div>
          </motion.div>

          {/* Panel 4 - TV Commercials */}
          <motion.div
            className="panel w-full sm:w-[90vw] md:w-[790px] h-auto sm:h-auto md:h-[532px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
            variants={panelVariants}
          >
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-5xl font-medium mb-3 sm:mb-4 font-worksans">
                TV Commercials
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
                High-impact 30s/60s spots that break through the noise and drive
                results.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <img
                src={svg4}
                alt="TV Commercials"
                loading="lazy"
                className="w-[396px] h-[293px] object-contain"
              />
            </div>
          </motion.div>

          {/* Panel 5 - Product Photography */}
          <motion.div
            className="panel w-full sm:w-[90vw] md:w-[790px] h-auto sm:h-auto md:h-[532px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
            variants={panelVariants}
          >
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-5xl font-medium mb-3 sm:mb-4 font-worksans">
                Product Photography
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
                Studio-quality product shots that make your offerings
                irresistible.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <img
                src={svg5}
                alt="Photography"
                loading="lazy"
                className="w-[396px] h-[293px] object-contain"
              />
            </div>
          </motion.div>

          {/* Panel 6 - Lead Generation */}
          <motion.div
            className="panel w-full sm:w-[90vw] md:w-[790px] h-auto sm:h-auto md:h-[532px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
            variants={panelVariants}
          >
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-5xl font-medium mb-3 sm:mb-4 font-worksans">
                Lead Generation
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
                Funnel-optimized landing pages, email sequences, and conversion
                funnels that deliver qualified leads.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <img
                src={svg6}
                alt="Lead Generation"
                loading="lazy"
                className="w-[396px] h-[293px] object-contain"
              />
            </div>
          </motion.div>

          {/* Panel 7 - Social Media Management */}
          <motion.div
            className="panel w-full sm:w-[90vw] md:w-[790px] h-auto sm:h-auto md:h-[532px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
            variants={panelVariants}
          >
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-5xl font-medium mb-3 sm:mb-4 font-worksans">
                Social Media Management
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
                From positioning and emotional narrative to campaign ideation —
                we give your brand a powerful voice.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <img
                src={svg7}
                alt="Social Media Management"
                loading="lazy"
                className="w-[506px] h-[353px] object-contain"
              />
            </div>
          </motion.div>

          {/* Panel 8 - Influencer Marketing */}
          <motion.div
            className="panel w-full sm:w-[90vw] md:w-[790px] h-auto sm:h-auto md:h-[532px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
            variants={panelVariants}
          >
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-5xl font-medium mb-3 sm:mb-4 font-worksans">
                Influencer Marketing
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
                Social strategy, performance campaigns, platform-specific
                content that meets people where they are.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <img
                src={svg8}
                alt="Influencer Marketing"
                loading="lazy"
                className="w-[396px] h-[293px] object-contain"
              />
            </div>
          </motion.div>

          {/* Panel 9 - Personal Branding */}
          <motion.div
            className="panel w-full sm:w-[90vw] md:w-[790px] h-auto sm:h-auto md:h-[532px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg shrink-0 overflow-hidden flex flex-col justify-between"
            variants={panelVariants}
          >
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-5xl font-medium mb-3 sm:mb-4 font-worksans">
                Personal Branding
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-[150%] line-clamp-2 font-normal font-nunito">
                From positioning and emotional narrative to campaign ideation —
                we give your brand a powerful voice.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <img
                src={svg9}
                alt="Personal Branding"
                loading="lazy"
                className="w-[396px] h-[293px] object-contain"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ServiceSection;