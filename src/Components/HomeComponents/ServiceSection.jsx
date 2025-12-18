import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import img1 from "/src/assets/home/Ser1.png";
import img2 from "/src/assets/home/Ser2.png";
import img3 from "/src/assets/home/Ser3.png";
import img4 from "/src/assets/home/comersial.png";
import img5 from "/src/assets/home/potography.png";
import img6 from "/src/assets/home/leadgen.png";
import img7 from "/src/assets/home/socialone.png";

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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Create GSAP context scoped to this component
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");

      // Get the last panel to calculate proper centering
      const lastPanel = panels[panels.length - 1];
      const lastPanelWidth = lastPanel.offsetWidth;
      const viewportWidth = window.innerWidth;

      // Calculate the exact scroll distance needed to center the last panel
      // Total scroll width minus viewport width, plus half viewport minus half panel width
      const totalScrollWidth = contentWrapperRef.current.scrollWidth;
      const scrollX = totalScrollWidth - viewportWidth + (viewportWidth - lastPanelWidth) / 3;

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
            duration: { min: 0.2, max: 0.35 } 
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
        ).to(panel, { scale: 0.92, opacity: 0.6, ease: "power2.inOut" });
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
      gsap.killTweensOf(flyTextRef.current);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
      window.removeEventListener("resize", onResize);
      try {
        lenis.destroy();
      } catch (e) {
        // ignore if lenis destroy fails
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen overflow-x-hidden pt-8 md:pt-0"
      style={{ backgroundImage: "radial-gradient(ellipse at center, #072a31, #000000)" }}
    >
      <div
        ref={contentWrapperRef}
        className="flex flex-col md:flex-row h-full items-center md:items-stretch"
      >
        {/* Left Title with 100px font size */}
        <div className="flex-shrink-0 px-6 sm:px-8 md:px-12 lg:px-20 py-8 md:py-0 text-[#e59300] uppercase font-medium z-10 flex items-center">
          <h2 className="text-3xl sm:text-4xl md:text-[100px] leading-tight text-center md:text-left">
            OUR <br className="hidden md:block" /> Services
          </h2>
        </div>

        {/* Panels container */}
        <div className="flex flex-col md:flex-row md:min-h-screen md:h-full items-center gap-6 md:gap-12 p-4 sm:p-6 md:pr-20 w-full md:w-auto pb-8 md:pb-0">
          {/* Panel 1 - Content Creation */}
          <div className="panel w-full sm:w-[90vw] md:w-[640px] h-[300px] sm:h-[360px] md:h-[432px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg flex-shrink-0 overflow-hidden flex flex-col justify-between">
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-[36px] font-semibold mb-3 sm:mb-4 font-['Nunito']">
                Content Creation
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-tight line-clamp-2 max-w-xs font-['Work_Sans'] font-extralight">
                Reels, ad films, corporate AVs, long-form YouTube — stories that captivate and convert.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={img1}
                alt="Content"
                className="w-32 h-24 sm:w-40 sm:h-28 md:w-56 md:h-40 lg:w-64 lg:h-44 object-cover object-center rounded-md mx-auto"
              />
            </div>
          </div>

          {/* Panel 2 - Digital Marketing */}
          <div className="panel w-full sm:w-[90vw] md:w-[640px] h-[300px] sm:h-[360px] md:h-[432px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg flex-shrink-0 overflow-hidden flex flex-col justify-between">
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-[36px] font-semibold mb-3 sm:mb-4 font-['Nunito']">
                Digital Marketing
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-tight line-clamp-2 max-w-xs font-['Work_Sans'] font-extralight">
                Social strategy, performance campaigns, platform-specific content that meets people where they are.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={img3}
                alt="Marketing"
                className="w-32 h-24 sm:w-40 sm:h-28 md:w-56 md:h-40 lg:w-64 lg:h-44 object-cover object-center rounded-md mx-auto"
              />
            </div>
          </div>

          {/* Panel 3 - Brand Storytelling */}
          <div className="panel w-full sm:w-[90vw] md:w-[640px] h-[300px] sm:h-[360px] md:h-[432px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg flex-shrink-0 overflow-hidden flex flex-col justify-between">
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-[36px] font-semibold mb-3 sm:mb-4 font-['Nunito']">
                Brand Storytelling
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-tight line-clamp-2 max-w-xs font-['Work_Sans'] font-extralight">
                From positioning and emotional narrative to campaign ideation — we give your brand a powerful voice.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={img2}
                alt="Storytelling"
                className="w-32 h-24 sm:w-40 sm:h-28 md:w-56 md:h-40 lg:w-64 lg:h-44 object-cover object-center rounded-md mx-auto"
              />
            </div>
          </div>

          {/* Panel 4 - TV Commercials */}
          <div className="panel w-full sm:w-[90vw] md:w-[640px] h-[300px] sm:h-[360px] md:h-[432px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg flex-shrink-0 overflow-hidden flex flex-col justify-between">
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-[36px] font-semibold mb-3 sm:mb-4 font-['Nunito']">
                TV Commercials
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-tight line-clamp-2 max-w-xs font-['Work_Sans'] font-extralight">
                High-impact 30s/60s spots that break through the noise and drive results.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={img4}
                alt="TV Commercials"
                className="w-32 h-24 sm:w-40 sm:h-28 md:w-56 md:h-40 lg:w-64 lg:h-44 object-cover object-center rounded-md mx-auto"
              />
            </div>
          </div>

          {/* Panel 5 - Product Photography */}
          <div className="panel w-full sm:w-[90vw] md:w-[640px] h-[300px] sm:h-[360px] md:h-[432px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg flex-shrink-0 overflow-hidden flex flex-col justify-between">
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-[36px] font-semibold mb-3 sm:mb-4 font-['Nunito']">
                Product Photography
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-tight line-clamp-2 max-w-xs font-['Work_Sans'] font-extralight">
                Studio-quality product shots that make your offerings irresistible.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={img5}
                alt="Photography"
                className="w-32 h-24 sm:w-40 sm:h-28 md:w-56 md:h-40 lg:w-64 lg:h-44 object-cover object-center rounded-md mx-auto"
              />
            </div>
          </div>

          {/* Panel 6 - Lead Generation */}
          <div className="panel w-full sm:w-[90vw] md:w-[640px] h-[300px] sm:h-[360px] md:h-[432px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg flex-shrink-0 overflow-hidden flex flex-col justify-between">
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-[36px] font-semibold mb-3 sm:mb-4 font-['Nunito']">
                Lead Generation
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-tight line-clamp-2 max-w-xs font-['Work_Sans'] font-extralight">
                Funnel-optimized landing pages, email sequences, and conversion funnels that deliver qualified leads.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={img6}
                alt="Lead Generation"
                className="w-32 h-24 sm:w-40 sm:h-28 md:w-56 md:h-40 lg:w-64 lg:h-44 object-cover object-center rounded-md mx-auto"
              />
            </div>
          </div>

          {/* Panel 7 - Social Media Management */}
          <div className="panel w-full sm:w-[90vw] md:w-[640px] h-[300px] sm:h-[360px] md:h-[432px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg flex-shrink-0 overflow-hidden flex flex-col justify-between">
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-[36px] font-semibold mb-3 sm:mb-4 font-['Nunito']">
                Social Media Management
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-tight line-clamp-2 max-w-xs font-['Work_Sans'] font-extralight">
                From positioning and emotional narrative to campaign ideation — we give your brand a powerful voice.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={img7}
                alt="Social Media Management"
                className="w-32 h-24 sm:w-40 sm:h-28 md:w-56 md:h-40 lg:w-64 lg:h-44 object-cover object-center rounded-md mx-auto"
              />
            </div>
          </div>

          {/* Panel 8 - Influencer Marketing */}
          <div className="panel w-full sm:w-[90vw] md:w-[640px] h-[300px] sm:h-[360px] md:h-[432px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg flex-shrink-0 overflow-hidden flex flex-col justify-between">
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-[36px] font-semibold mb-3 sm:mb-4 font-['Nunito']">
                Influencer Marketing
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-tight line-clamp-2 max-w-xs font-['Work_Sans'] font-extralight">
                Social strategy, performance campaigns, platform-specific content that meets people where they are.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={img3}
                alt="Influencer Marketing"
                className="w-32 h-24 sm:w-40 sm:h-28 md:w-56 md:h-40 lg:w-64 lg:h-44 object-cover object-center rounded-md mx-auto"
              />
            </div>
          </div>

          {/* Panel 9 - Personal Branding */}
          <div className="panel w-full sm:w-[90vw] md:w-[640px] h-[300px] sm:h-[360px] md:h-[432px] bg-white rounded-2xl sm:rounded-3xl relative p-4 sm:p-6 shadow-lg flex-shrink-0 overflow-hidden flex flex-col justify-between">
            <div>
              <h3 className="text-[#D89F5B] text-2xl sm:text-3xl md:text-[36px] font-semibold mb-3 sm:mb-4 font-['Nunito']">
                Personal Branding
              </h3>
              <p className="text-[#000000] text-xs sm:text-sm md:text-[24px] leading-tight line-clamp-2 max-w-xs font-['Work_Sans'] font-extralight">
                From positioning and emotional narrative to campaign ideation — we give your brand a powerful voice.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={img2}
                alt="Personal Branding"
                className="w-32 h-24 sm:w-40 sm:h-28 md:w-56 md:h-40 lg:w-64 lg:h-44 object-cover object-center rounded-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
