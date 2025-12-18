import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ConnectSection = () => {
  const pinRef = useRef(null);
  const circleRef = useRef(null);
  const gridRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    if (!pinRef.current || !circleRef.current || !h1Ref.current || !pRef.current || !gridRef.current) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: isMobile ? "+=1200%" : "+=1700%",
          scrub: true,
          pin: true,
        },
      });

      // Circle from top → center
      tl.fromTo(
        circleRef.current,
        { yPercent: -200, opacity: 0 },
        { yPercent: 0, opacity: 1, ease: "power2.out", duration: 2 }
      );

      // Pause briefly
      tl.to(circleRef.current, { duration: 0.5 });

      // Circle scales up - mobile fills full width
      tl.to(circleRef.current, {
        scale: isMobile ? 8 : 5,
        ease: "power2.inOut",
        duration: 3,
      });

      // H1 slides in from TOP
      tl.fromTo(
        h1Ref.current,
        { opacity: 0, yPercent: -100 },
        { opacity: 1, yPercent: 0, ease: "power2.out", duration: 2 },
        "-=1"
      );

      // P slides in from BOTTOM (slightly delayed)
      tl.fromTo(
        pRef.current,
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, ease: "power2.out", duration: 2 },
        "-=1.5"
      );

      // Text moves up slightly together
      tl.to([h1Ref.current, pRef.current], { yPercent: -50, duration: 1 });

      // Batch 1: First 3 images appear
      tl.fromTo(
        imagesRef.current.slice(0, 3),
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, ease: "power2.out", duration: 2, stagger: 0.1 }
      );

      // Batch 1: Images move up and fade out
      tl.to(
        imagesRef.current.slice(0, 3),
        { yPercent: -150, opacity: 0, ease: "power2.inOut", duration: 3, stagger: 0.05 }
      );

      // Batch 2: Next 3 images appear
      tl.fromTo(
        imagesRef.current.slice(3, 6),
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, ease: "power2.out", duration: 2, stagger: 0.1 }
      );

      // Batch 2: Images move up and fade out
      tl.to(
        imagesRef.current.slice(3, 6),
        { yPercent: -150, opacity: 0, ease: "power2.inOut", duration: 3, stagger: 0.05 }
      );

      // Batch 3: Last 3 images appear
      tl.fromTo(
        imagesRef.current.slice(6, 9),
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, ease: "power2.out", duration: 2, stagger: 0.1 }
      );

      // Batch 3: Images move up and fade out
      tl.to(
        imagesRef.current.slice(6, 9),
        { yPercent: -150, opacity: 0, ease: "power2.inOut", duration: 3, stagger: 0.05 }
      );

      // Final transition - circle and text fade out
      tl.to(
        [circleRef.current, h1Ref.current, pRef.current],
        { opacity: 0, yPercent: -30, ease: "power2.in", duration: 2 },
        "-=1"
      );

    }, pinRef);

    return () => ctx.revert();
  }, []);

  // Function to add images to ref array
  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  return (
    <section className="w-full h-[1200vh] md:h-[1800vh] bg-black overflow-hidden relative">
      <div
        ref={pinRef}
        className="w-full h-screen flex items-center justify-center relative"
      >
        {/* Orange Circle with Gradient - #E59300 to #D89F5B */}
        <div
          ref={circleRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] rounded-full w-[40vw] h-[40vw] md:w-[10vw] md:h-[10vw] shadow-2xl z-10"
          style={{
            background: 'linear-gradient(135deg, #E59300 0%, #D89F5B 100%)'
          }}
        />

        {/* Text Container */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 z-20 w-full max-w-[320px] sm:max-w-md md:max-w-2xl lg:max-w-3xl"
        >
          {/* H1 - Slides from TOP */}
          <h1 
            ref={h1Ref}
            className="text-white mb-2 sm:mb-3 md:mb-4 font-bold"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: window.innerWidth < 640 ? "18px" : window.innerWidth < 768 ? "24px" : window.innerWidth < 1024 ? "40px" : "56px",
            }}
          >
            Connect. Build Trust. Grow.
          </h1>
          
          {/* P - Slides from BOTTOM */}
          <p 
            ref={pRef}
            className="text-white"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
              fontSize: window.innerWidth < 640 ? "14px" : window.innerWidth < 768 ? "16px" : window.innerWidth < 1024 ? "18px" : "22px",
              lineHeight: "150%",
            }}
          >
            We exist to craft authentic, emotion-driven stories that connect people with brands — building lasting trust and measurable impact.
          </p>
        </div>

        {/* Image Grid */}
        <div ref={gridRef} className="absolute inset-0 z-30 pointer-events-none">
          
          {/* BATCH 1 - First 3 Images */}
          
          {/* Image 1: Top-Left */}
          <div
            ref={addToRefs}
            className="absolute w-[120px] h-[160px] sm:w-[150px] sm:h-[195px] md:w-[260px] md:h-[310px] lg:w-[300px] lg:h-[350px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: '5%',
              left: '5%',
              backgroundImage: `url(https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Image 2: Bottom-Center */}
          <div
            ref={addToRefs}
            className="absolute w-[130px] h-[145px] sm:w-[160px] sm:h-[180px] md:w-[300px] md:h-[270px] lg:w-[340px] lg:h-[300px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: '70%',
              left: '35%',
              backgroundImage: `url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Image 3: Top-Right */}
          <div
            ref={addToRefs}
            className="absolute w-[115px] h-[150px] sm:w-[145px] sm:h-[185px] md:w-[250px] md:h-[290px] lg:w-[280px] lg:h-[320px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: '8%',
              left: '70%',
              backgroundImage: `url(https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* BATCH 2 - Next 3 Images */}
          
          {/* Image 4: Mid-Left */}
          <div
            ref={addToRefs}
            className="absolute w-[125px] h-[165px] sm:w-[155px] sm:h-[200px] md:w-[280px] md:h-[330px] lg:w-[320px] lg:h-[360px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: '25%',
              left: '8%',
              backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Image 5: Perfect Center */}
          <div
            ref={addToRefs}
            className="absolute w-[135px] h-[135px] sm:w-[170px] sm:h-[170px] md:w-[320px] md:h-[295px] lg:w-[360px] lg:h-[330px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: '45%',
              left: '42%',
              backgroundImage: `url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Image 6: Mid-Right */}
          <div
            ref={addToRefs}
            className="absolute w-[118px] h-[155px] sm:w-[148px] sm:h-[190px] md:w-[270px] md:h-[310px] lg:w-[300px] lg:h-[340px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: '32%',
              left: '68%',
              backgroundImage: `url(https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* BATCH 3 - Last 3 Images */}
          
          {/* Image 7: Top-Center-Left */}
          <div
            ref={addToRefs}
            className="absolute w-[116px] h-[152px] sm:w-[146px] sm:h-[190px] md:w-[275px] md:h-[325px] lg:w-[310px] lg:h-[355px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: '12%',
              left: '12%',
              backgroundImage: `url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Image 8: Bottom-Center-Right */}
          <div
            ref={addToRefs}
            className="absolute w-[133px] h-[130px] sm:w-[168px] sm:h-[165px] md:w-[310px] md:h-[285px] lg:w-[350px] lg:h-[315px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: '68%',
              left: '55%',
              backgroundImage: `url(https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Image 9: Top-Far-Right */}
          <div
            ref={addToRefs}
            className="absolute w-[110px] h-[145px] sm:w-[140px] sm:h-[180px] md:w-[265px] md:h-[305px] lg:w-[295px] lg:h-[335px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            style={{
              top: '18%',
              left: '75%',
              backgroundImage: `url(https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
