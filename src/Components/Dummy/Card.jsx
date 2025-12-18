import React from "react";
import moon from "/src/assets/home/moon.png";
const items = [
  "Etthicks",
  "Etthicks",
  "Etthicks",
  "Etthicks",
  "Etthicks",
  "Etthicks",
  "Etthicks",
  "Etthicks",
  "Etthicks",
  "Etthicks",
];


function Card() {
  return (
    <>
      <div className="w-full h-[475px] bg-black">
        <div className="w-[808px] h-[808px] left-[316px] top-[-166px] absolute opacity-70 bg-cyan-500 rounded-full blur-[450px]" />
        <div className="w-full  left-[1240px] top-[-166px] absolute opacity-70 bg-gradient-to-b from-[#e59300] to-[#007388] rounded-full blur-[450px]" />
        <div className="w-96 left-[80px] top-[92px] absolute justify-start">
          <span class="text-white text-4xl font-semibold font-['Nunito'] leading-[56px]">
            To Be the{" "}
          </span>
          <span class="text-orange-400 text-4xl font-semibold font-['Nunito'] leading-[56px]">
            Creative{" "}
          </span>
          <span class="text-white text-4xl font-semibold font-['Nunito'] leading-[56px]">
            Force Behind Brands That{" "}
          </span>
          <span class="text-orange-400 text-4xl font-semibold font-['Nunito'] leading-[56px]">
            Travel the World
          </span>
        </div>
        <div className="w-44 h-3 left-[268px] top-[142.01px] absolute origin-top-left rotate-[-2.32deg] outline outline-2 outline-offset-[-1px] outline-amber-500" />
        <div className="w-[518px] h-40 left-[842px] top-[126px] absolute text-right justify-start text-white text-3xl font-normal font-['Nunito'] leading-10">
          We aim to take brands in all eight directions — expanding their reach
          while making them trusted, impactful, and unforgettable.
        </div>
        <div className="w-full h-[56px]  top-[450px] absolute bg-cyan-700 overflow-hidden">
          {/* Inner scrolling container */}
          <div className="flex w-full h-[56px] animate-marquee whitespace-nowrap">
            {items.map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-2 shrink-0">
                {/* replace with your orange shape */}
                <img src={moon} alt="" className="w-7 h-8" />
                <span className="text-white text-[30px] font-medium font-['Work_Sans']">
                  {text}
                </span>
              </div>
            ))}

            {/* duplicate for seamless looping */}
            {items.map((text, i) => (
              <div
                key={`dup-${i}`}
                className="flex items-center gap-4 mx-8 shrink-0"
              >
                <img src="" alt="" className="w-7 h-8" />
                <span className="text-white text-3xl font-medium font-['Work_Sans']">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
