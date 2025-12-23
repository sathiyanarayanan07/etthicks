import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Pack 1 (Small pieces)
import pockone from "/src/assets/about/pocky one.png";
import pocktwo from "/src/assets/about/pocktwo.png";
import pockthree from "/src/assets/about/pokythree.png";
import pockfour from "/src/assets/about/poky four.png";

// Pack 2 (Big images)
import pokone from "/src/assets/about/pokone.png";
import poktwo from "/src/assets/about/poktwo.png";
import pokthree from "/src/assets/about/pokthree.png";
import pokfour from "/src/assets/about/pokfour.png";

gsap.registerPlugin(ScrollTrigger);

function Pack() {
  const wrapperRef = useRef(null);
  const imagesRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isTablet: "(min-width: 768px) and (max-width: 1023px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {

        const { isDesktop, isTablet } = context.conditions;
        // const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: isDesktop
              ? "top top"
              : isTablet
                ? "top top"
                : "top top", // mobile
            end: isDesktop
              ? "bottom+=2500 center+=150"
              : isTablet
                ? "bottom+=2500 center+=150"
                : "bottom+=3000 center",
            scrub: isDesktop ? 2 : 1, // smoother on desktop, faster on mobile
            pin: true,
          },
        });

        // const tl = gsap.timeline({
        //   scrollTrigger: {
        //     trigger: wrapperRef.current,
        //     start: "top top",
        //     end: "bottom+=3500 bottom",
        //     scrub: 2,
        //     pin: true,
        //     markers: true,
        //   },
        // });

        const factor = 1.5; // 1.5x viewport
        /* ===== PACK 1 (OUTWARD) ===== */
        tl.to(".pack1-left", { x: -window.innerWidth * factor, duration: 1 }, 0);
        tl.to(".pack1-top", { y: -window.innerHeight * factor, duration: 1 }, 0);
        tl.to(".pack1-right", { x: window.innerWidth * factor, duration: 1 }, 0);
        tl.to(".pack1-bottom", { y: window.innerHeight * factor, duration: 1 }, 0);

        gsap.to(".pack1-left", {
          rotation: 90,
          transformOrigin: "50% 50%",
          duration: 1,
          ease: "power2.inOut",
        });

        gsap.to(".pack1-top", {
          rotation: -90,
          transformOrigin: "50% 50%",
          duration: 1,
          ease: "power2.inOut",
        });

        gsap.to(".pack1-bottom", {
          rotation: 90,
          transformOrigin: "50% 50%",
          duration: 1,
          ease: "power2.inOut",
        });

        gsap.to(".pack1-right", {
          rotation: -90,
          transformOrigin: "50% 50%",
          duration: 1,
          ease: "power2.inOut",
        });


        /* ===== PACK 2 (COME IN) ===== */
        tl.fromTo(
          ".image-left",
          { x: -window.innerWidth / 2 - 100, opacity: 0, scale: 1 },
          { x: 0, opacity: 1, scale: 1, duration: 1.5 },
          1
        );

        tl.fromTo(
          ".image-top",
          { y: -window.innerHeight / 2 - 100, opacity: 0, scale: 0.5 },
          { y: 0, opacity: 1, scale: 1, duration: 1.5 },
          1
        );

        tl.fromTo(
          ".image-right",
          { x: window.innerWidth / 2 + 100, opacity: 0, scale: 0.5 },
          { x: 0, opacity: 1, scale: 1, duration: 1.5 },
          1
        );

        tl.fromTo(
          ".image-bottom",
          { y: window.innerHeight / 2 + 100, opacity: 0, scale: 0.5 },
          { y: 0, opacity: 1, scale: 1, duration: 1.5 },
          1
        );

        /* ===== SCALE UP ===== */
        tl.to(imagesRef.current, { scale: 25, duration: 3 }, 3);

        /* ===== TEXT FADE IN ===== */
        tl.fromTo(
          headingRef.current,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5 },
          3
        );

        tl.fromTo(
          descriptionRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5 },
          3.3
        );

        return () => {
          tl.kill();
        };
      }, wrapperRef);

    return () => mm.revert();
  }, []);

  return (
    <div className="w-full h-[450vh] md:h-[550vh] xl:h-auto bg-black overflow-hidden">
      <div
        ref={wrapperRef}
        className="w-full min-h-screen relative overflow-hidden"
      >
        {/* ===== PACK 1 ===== */}
        <div className="pack1-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10">
          <img src={pockone} className="pack1 pack1-left absolute origin-center transition-transform duration-500 ease-in-out size-6" alt="Pack piece 1" />
          <img src={pocktwo} className="pack1 pack1-top absolute origin-center transition-transform duration-500 ease-in-out size-6" alt="Pack piece 2" />
          <img src={pockthree} className="pack1 pack1-right absolute origin-center transition-transform duration-500 ease-in-out size-6" alt="Pack piece 3" />
          <img src={pockfour} className="pack1 pack1-bottom absolute origin-center transition-transform duration-500 ease-in-out size-6" alt="Pack piece 4" />
        </div>

        {/* ===== PACK 2 ===== */}
        <div ref={imagesRef} className="images-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px]">
          <img src={pokone} className="image-piece image-left absolute " alt="Image piece 1" />
          <img src={poktwo} className="image-piece image-top absolute" alt="Image piece 2" />
          <img src={pokthree} className="image-piece image-right absolute" alt="Image piece 3" />
          <img src={pokfour} className="image-piece image-bottom absolute" alt="Image piece 4" />
        </div>

        {/* ===== TEXT ===== */}
        <div className="text-content w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h2 ref={headingRef} className="text-5xl md:text-7xl font-bold mb-8 opacity-0">
            <span className="text-white font-worksans font-semibold">About </span>
            <span className="text-[#FFA500] font-worksans font-semibold">Us</span>
          </h2>

          <p ref={descriptionRef} className="text-white text-lg opacity-0 max-w-xl mx-10 lg:mx-auto tracking-wider font-nunito">
            EtThicks is not just another digital agency — we're a storytelling
            powerhouse rooted in truth, trust, and transformation. Born from the
            Tamil word "Ettuthikkum", meaning to reach in all eight directions,
            we specialize in content that carries your brand farther —
            emotionally, culturally, and commercially.
          </p>
        </div>
      </div>

      <style>{`
        .pack1-left {
          top: 50%;
          left: 0;
          transform: translate(-50%, -50%);
        }
        .pack1-top {
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .pack1-right {
          top: 50%;
          right: 0;
          transform: translate(50%, -50%);
        }
        .pack1-bottom {
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
        }

        /* ===== PACK 2 ===== */
        .image-left {
          top: 50%;
          left: 0;
          transform: translate(-70%, -50%);
        }
        .image-top {
          top: 17%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .image-right {
          top: 50%;
          right: 0;
          transform: translate(50%, -50%);
        }
        .image-bottom {
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
        }
      `}</style>
    </div>
  );
}

export default Pack;
