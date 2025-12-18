import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";

function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();
    const path = document.querySelector(".bg-line path");
    const path1 = document.querySelector(".headline");
    const elements = document.querySelectorAll(".subtext");
     gsap.set(path, {
      strokeDasharray: 1800,
      strokeDashoffset: 1800,
      opacity: 1,
    });
    tl.to(path, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.out",
    });
   tl.to(path, {
  opacity: 0,
  duration: 0.5,
  ease: "power2.in"
});
 tl.fromTo(path1, {
      y: -350},{
    y: 0,
      ease: "bounce.out",
      duration: 2.5,
    }, "-=2.0");

    tl.fromTo(elements, 
  { x: 350 }, 
  { x:0, ease: "power2.in", duration: 1 }, 
  "-=3.8"
);

// gsap.to(elements, {
// duration:2.5,
// ease: "bounce.out",
// y: 0
// });

//     tl.from(elements, {
//     y: 100,
//     opacity: 0,
//     //delay: index * 0.2,
//     duration: 1.5,
//     ease: 'power2.out'
//   }, "-=2.5");
    
     
    // // Animate the subtext to fade in after the headline
    // tl.from(".subtext", {
    //   y: 50,
    //   opacity: 0,
    //   ease: "power2.out",
    //   duration: 1,
    // }, "-=0.8");

    // // Animate the buttons to fade in, with a slight stagger
    // tl.from(".cta", {
    //   y: 50,
    //   opacity: 0,
    //   ease: "power2.out",
    //   duration: 0.8,
    //   stagger: 0.2,
    // }, "-=0.5");
  }, []);


  return (
    <>
      <section className="bg-black">
        <svg className="absolute top-0 left-0 h-full w-full bg-line" viewBox="0 0 1440 400">
          <path
            className=""
            d="M0,10 C100,50 400,150 500,100 C600,50 600,400 700,300 C800,200 900,300 1000,400 C1050,450 1200,300 1440,500 "
            stroke="#fbbf24"
            strokeWidth="2"
            fill="transparent"
          ></path>
        </svg>
        <div className="w-full h-[743px] flex flex-col items-center justify-center">
          <h1 className="headline text-center font-['Nunito'] w-[878px] h-[174px] text-[64px] font-regular leading-tight text-white">
            <span className="text-[#dca05c]">Rooted</span> in TamilNadu Built for
            the
            <span className="text-[#dca05c]"> World</span>{" "}
          </h1>
          <p className="font-['inter'] text-[#cecece] text-[24px] font-light">
            Ettuthikkum” comes <span className="text-white">EtThicks</span> —
            stories that reach everywhere.
          </p>
          <div className="mt-4 gap-4 flex">
            <button className=" cta px-[20px] py-[12px] text-[24px] border rounded-2xl font-['Plus_Jakarta_Sans'] font-medium text-white bg-[#e59300]">
              Let’s Create Together
            </button>
            <button className=" cta text-[22px] font-['Plus_Jakarta_Sans'] font-medium text-white">
              View Our <span className="text-[#dca05c]">Work</span>{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;