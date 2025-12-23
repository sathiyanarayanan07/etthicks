import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 🔹 Image imports
import img1 from "/src/assets/Homeconnect/1.png";
import img2 from "/src/assets/Homeconnect/2.png";
import img3 from "/src/assets/Homeconnect/3.png";
import img4 from "/src/assets/Homeconnect/4.png";
import img5 from "/src/assets/Homeconnect/5.png";
import img6 from "/src/assets/Homeconnect/6.png";
import img7 from "/src/assets/Homeconnect/7.png";
import img8 from "/src/assets/Homeconnect/8.png";
import img9 from "/src/assets/Homeconnect/9.png";
import img10 from "/src/assets/Homeconnect/10.png";

gsap.registerPlugin(ScrollTrigger);

const ConnectSection = () => {
  const pinRef = useRef(null);
  const circleRef = useRef(null);
  const gridRef1 = useRef(null);
  const gridRef2 = useRef(null);
  const gridRef3 = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    if (
      !pinRef.current ||
      !circleRef.current ||
      !h1Ref.current ||
      !pRef.current ||
      !gridRef1.current ||
      !gridRef2.current ||
      !gridRef3.current
    )
      return;

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

      gsap.set([gridRef1.current, gridRef2.current, gridRef3.current], {
        autoAlpha: 0,
      });

      tl.fromTo(
        circleRef.current,
        { yPercent: -200, opacity: 0 },
        { yPercent: 0, opacity: 1, ease: "power2.out", duration: 2 }
      );

      tl.to(circleRef.current, { duration: 0.5 });

      tl.to(circleRef.current, {
        scale: isMobile ? 4 : 6,
        ease: "power2.inOut",
        duration: 3,
      });

      tl.fromTo(
        h1Ref.current,
        { opacity: 0, yPercent: -120 },
        { opacity: 1, yPercent: 0, ease: "power2.out", duration: 2 },
        "-=1"
      );

      tl.fromTo(
        pRef.current,
        { opacity: 0, yPercent: 120 },
        { opacity: 1, yPercent: 0, ease: "power2.out", duration: 2 },
        "-=1"
      );

      tl.fromTo(
        gridRef1.current,
        { autoAlpha: 0, yPercent: 50 },
        { autoAlpha: 1, yPercent: 0, duration: 2, ease: "power2.out" }
      ).to(gridRef1.current, {
        autoAlpha: 0,
        yPercent: -50,
        duration: 2,
        ease: "power2.in",
      });

      tl.fromTo(
        gridRef2.current,
        { autoAlpha: 0, yPercent: 50 },
        { autoAlpha: 1, yPercent: 0, duration: 2, ease: "power2.out" }
      ).to(gridRef2.current, {
        autoAlpha: 0,
        yPercent: -50,
        duration: 2,
        ease: "power2.in",
      });

      tl.fromTo(
        gridRef3.current,
        { autoAlpha: 0, yPercent: 50 },
        { autoAlpha: 1, yPercent: 0, duration: 2, ease: "power2.out" }
      ).to(gridRef3.current, {
        autoAlpha: 0,
        yPercent: -50,
        duration: 2,
        ease: "power2.in",
      });

      tl.to(
        [circleRef.current, h1Ref.current, pRef.current],
        { opacity: 0, ease: "power2.in", duration: 2 },
        "-=1"
      );
    }, pinRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-black overflow-hidden relative">
      <div
        ref={pinRef}
        className="w-full h-screen flex items-center justify-center relative"
      >
        <div
          ref={circleRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] rounded-full w-[40vw] h-[40vw] md:w-[10vw] md:h-[10vw] shadow-2xl z-10 mt-10"
          style={{
            background: "linear-gradient(135deg, #E59300 0%, #D89F5B 100%)",
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 z-20 w-full h-screen md:max-w-2xl lg:max-w-3xl flex flex-col justify-center items-center gap-5 md:mt-10">
          <h1
            ref={h1Ref}
            className="text-white font-medium text-3xl lg:text-4xl xl:text-5xl font-worksans"
          >
            Connect. Build Trust. Grow.
          </h1>

          <p
            ref={pRef}
            className="text-white text-xl xl:text-3xl md:max-w-sm lg:max-w-lg xl:max-w-3xl tracking-wider font-nunito"
          >
            We exist to craft authentic, emotion-driven stories that connect
            people with brands building lasting trust and measurable impact.
          </p>
        </div>

        {/* GRID 1 */}
        <div
          ref={gridRef1}
          className="absolute inset-0 z-30 pointer-events-none grid grid-cols-4 grid-rows-3 w-full min-h-[calc(100vh-20vh)] mt-20 gap-10 mx-10"
        >
          <img src={img1} className="w-full h-full object-cover row-start-1 col-start-1" />
          <img src={img2} className="w-full h-full object-cover row-start-1 col-start-4" />
          <img src={img3} className="w-full h-full object-cover row-start-2 col-start-3" />
          <img src={img4} className="w-full h-full object-cover row-start-3 col-start-1" />
        </div>

        {/* GRID 2 */}
        <div
          ref={gridRef2}
          className="absolute inset-0 z-30 pointer-events-none grid grid-cols-4 grid-rows-3 w-full min-h-[calc(100vh-20vh)] mt-20 gap-10 mx-10"
        >
          <img src={img5} className="w-full h-full object-cover row-start-2 col-start-1" />
          <img src={img6} className="w-full h-full object-cover row-start-2 col-start-3" />
          <img src={img7} className="w-full h-full object-cover row-start-3 col-start-2" />
        </div>

        {/* GRID 3 */}
        <div
          ref={gridRef3}
          className="absolute inset-0 z-30 pointer-events-none grid grid-cols-4 grid-rows-3 w-full min-h-[calc(100vh-20vh)] mt-20 gap-10 mx-10"
        >
          <img src={img8} className="w-full h-full object-cover row-start-3 col-start-1" />
          <img src={img9} className="w-full h-full object-cover row-start-3 col-start-3" />
          <img src={img10} className="w-full h-full object-cover row-start-1 col-start-2" />
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;


