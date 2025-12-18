import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// pacone
import pockone from "/src/assets/about/pocky one.png";
import pocktwo from "/src/assets/about/pocktwo.png";
import pockthree from "/src/assets/about/pokythree.png";
import pockfour from "/src/assets/about/poky four.png";

// pactwo
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
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top center",
          end: "bottom+=2000 center",
          scrub: 2,
          markers: true, // remove in production
        },
      });

      // Phase 1: Move pack images to corners and fade out
      tl.to(".piece", {
        x: (index) => {
          const positions = [
            -window.innerWidth / 2 + 10,
            window.innerWidth / 2 - 30,
            -window.innerWidth / 2 + 10,
            window.innerWidth / 2 - 30,
          ];
          return positions[index];
        },
        y: (index) => {
          const positions = [
            -window.innerHeight / 2 + 10,
            -window.innerHeight / 2 + 10,
            window.innerHeight / 2 - 30,
            window.innerHeight / 2 - 30,
          ];
          return positions[index];
        },
        opacity: 0,
        ease: "power1.inOut",
        duration: 1,
      }, 0);

      // Phase 2: Bring images from far edges to their final edge positions
      // pokone (LEFT)
      tl.fromTo(".image-left",
        {
          x: -window.innerWidth / 2 - 100,
          y: 0,
          opacity: 0,
          scale: 0.5,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 1.5,
        }, 1);

      // poktwo (TOP)
      tl.fromTo(".image-top",
        {
          x: 0,
          y: -window.innerHeight / 2 - 100,
          opacity: 0,
          scale: 0.5,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 1.5,
        }, 1.1);

      // pokthree (RIGHT)
      tl.fromTo(".image-right",
        {
          x: window.innerWidth / 2 + 100,
          y: 0,
          opacity: 0,
          scale: 0.5,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 1.5,
        }, 1.2);

      // pokfour (BOTTOM)
      tl.fromTo(".image-bottom",
        {
          x: 0,
          y: window.innerHeight / 2 + 100,
          opacity: 0,
          scale: 0.5,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 1.5,
        }, 1.3);

      // Phase 3: Images stay visible, reduce opacity slightly to show text better
      tl.to(".image-piece", {
        opacity: 0.3,
        ease: "power2.inOut",
        duration: 1,
      }, 3);

      // Phase 4: "About Us" heading slides in from top
      tl.fromTo(headingRef.current,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
        }, 3.5);

      // Phase 5: Description slides in from bottom
      tl.fromTo(descriptionRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
        }, 4);

      // Phase 6: Final scale effect on text
      tl.to([headingRef.current, descriptionRef.current], {
        scale: 1.05,
        ease: "power1.inOut",
        duration: 0.8,
      }, 5);

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-screen h-[350vh] flex items-center justify-center bg-black overflow-hidden">
      <div ref={wrapperRef} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        
        {/* Pack pieces - now using images instead of yellow divs */}
        <div className="pack-wrapper">
          <img src={pockone} alt="" className="piece top-left" />
          <img src={pocktwo} alt="" className="piece top-right" />
          <img src={pockthree} alt="" className="piece bottom-left" />
          <img src={pockfour} alt="" className="piece bottom-right" />
        </div>

        {/* Four images - stay visible in background */}
        <div ref={imagesRef} className="images-container">
          <img src={pokone} alt="" className="image-piece image-left" />
          <img src={poktwo} alt="" className="image-piece image-top" />
          <img src={pokthree} alt="" className="image-piece image-right" />
          <img src={pokfour} alt="" className="image-piece image-bottom" />
        </div>

        {/* About Us Text - appears on top of images */}
        <div className="text-content">
          <h2 
            ref={headingRef} 
            className="text-6xl font-bold mb-8 opacity-0"
          >
            <span className="text-white">About </span>
            <span className="text-[#FFA500]">Us</span>
          </h2>
          <p 
            ref={descriptionRef} 
            className="text-white text-xl leading-relaxed max-w-4xl opacity-0"
          >
            EtThicks is not just another digital agency — we're a storytelling powerhouse 
            rooted in truth, trust, and transformation. Born from the Tamil word "Ettuthikkum", 
            meaning to reach in all eight directions, we specialize in content that carries 
            your brand farther — emotionally, culturally, and commercially.
          </p>
        </div>
      </div>

      <style>{`
        .pack-wrapper {
          width: 48px;
          height: 48px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        .piece {
          width: 20px;
          height: 20px;
          position: absolute;
          object-fit: cover;
        }

        .top-left {
          top: 0;
          left: 0;
          border-bottom-right-radius: 100%;
        }

        .top-right {
          top: 0;
          right: 0;
          border-bottom-left-radius: 100%;
        }

        .bottom-left {
          bottom: 0;
          left: 0;
          border-top-right-radius: 100%;
        }

        .bottom-right {
          bottom: 0;
          right: 0;
          border-top-left-radius: 100%;
        }

        .images-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          z-index: 5;
        }

        .image-piece {
          position: absolute;
          width: 100px;
          height: 100px;
          object-fit: contain;
        }

        /* pokone - Left edge */
        .image-left {
          top: 50%;
          left: 0;
          transform: translate(-50%, -50%);
        }

        /* poktwo - Top edge */
        .image-top {
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* pokthree - Right edge */
        .image-right {
          top: 50%;
          right: 0;
          transform: translate(50%, -50%);
        }

        /* pokfour - Bottom edge */
        .image-bottom {
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
        }

        .text-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          padding: 2rem;
          z-index: 20;
          max-width: 90vw;
        }
      `}</style>
    </div>
  );
}

export default Pack;