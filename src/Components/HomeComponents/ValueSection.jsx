import { useEffect, useRef } from "react";
import gsap from "gsap";

import shl from "/src/assets/home/shield.png";
import hear from "/src/assets/home/heart.png";
import aro from "/src/assets/home/arroe.png";
import thun from "/src/assets/home/thunder.png";
import peo from "/src/assets/home/peo.png";

function ValueSection() {
  const cardsRef = useRef([]);

  const values = [
    {
      img: shl,
      title: "Authenticity",
      desc: "Every story is rooted in truth.",
    },
    {
      img: hear,
      title: "Emotion first",
      desc: "We touch hearts before we chase clicks.",
    },
    {
      img: aro,
      title: "Growth mindset",
      desc: "Creativity that converts into measurable results.",
    },
    {
      img: thun,
      title: "Simplicity",
      desc: "Minimal, modern, and meaningful storytelling.",
    },
    {
      img: peo,
      title: "Trust",
      desc: "Long-term relationships over short-term noise.",
    },
  ];

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      ".core-heading",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animate cards one by one
    gsap.fromTo(
      cardsRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <h2 className="core-heading text-white text-6xl font-medium font-['Nunito'] uppercase mb-16 opacity-0">
        Core Values
      </h2>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {values.map((val, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="group w-60 h-[460px] bg-white/10 rounded-xl outline outline-white/20 
                       backdrop-blur-sm flex flex-col items-center overflow-hidden opacity-0 
                       transform transition-all duration-500 hover:scale-105 
                       hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            {/* Icon */}
            <div
              className="w-72 h-72 -mt-6 bg-black rounded-[62px] flex items-center justify-center 
                         transform transition-all duration-500 group-hover:-translate-y-4 
                         group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              <img
                src={val.img}
                alt={val.title}
                className="w-20 h-20 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <h3 className="text-white text-2xl font-medium font-['Nunito'] mt-6 transition-colors duration-300 group-hover:text-cyan-400">
              {val.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-center text-base font-medium font-['Work_Sans'] mt-4 px-4 transition-colors duration-300 group-hover:text-gray-300">
              {val.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ValueSection;
