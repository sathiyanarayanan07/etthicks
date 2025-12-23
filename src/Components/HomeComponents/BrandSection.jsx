import React from "react";
import img1 from "/src/assets/home/face.png";
import img2 from "/src/assets/home/coles.png";
import img3 from "/src/assets/home/like.png";
import img4 from "/src/assets/home/heat.png";
import img5 from "/src/assets/home/sprt.png";
import img6 from "/src/assets/home/type.png";
import img7 from "/src/assets/home/coke.png";
import img8 from "/src/assets/home/meta.png";
import img9 from "/src/assets/home/pep.png";

function BrandSection() {
  return (
    <div
      className="w-full relative h-screen px-0 bg-black"
      style={{
        backgroundImage: "radial-gradient(ellipse at center, #072a31, #000000)"
      }}
    >
      {/* Desktop (1440px) layout */}
      <div className="hidden lg:block w-[calc(100vw-150px)] mx-auto h-[calc(100vh-30vh)] relative">

        <div className="w-[calc(100vw-150px)] mx-auto lg:h-[calc(100vh-59vh)] xl:h-[calc(100vh-25vh)] 2xl:h-[calc(100vh-8vh)] bg-white/10 rounded-[77px] border border-white/10 backdrop-blur-xs  absolute" />
        {/* TOP */}
        <div className="w-full flex items-center justify-between gap-10 px-5 xl:px-10 2xl:px-5 pt-8  opacity-90 2xl:opacity-100">
          <div className="">
            <img src={img1} alt="Brand 1" className="2xl:w-[calc(100%-10%)] h-auto" />
          </div>
          <div className="">
            <img src={img2} alt="Brand 2" className="2xl:w-[calc(100%-10%)] h-auto" />
          </div>
          <div className="flex justify-end">
            <img src={img3} alt="Brand 3" className="2xl:w-[calc(100%-10%)] h-auto" />
          </div>
        </div>
        {/* BOTTOM */}
        <div className="flex items-end justify-between px-5 xl:px-10 2xl:px-5 gap-10 opacity-90  2xl:opacity-100">
          <div className="flex flex-col gap-6">
            <div className="">
              <img src={img5} alt="Brand 5" className="2xl:size-[calc(100%-10%)]" />
            </div>
            <div className="">
              <img src={img6} alt="Brand 6" className="2xl:size-[calc(100%-10%)]" />
            </div>
          </div>
          <div className="">
            <img src={img7} alt="Brand 7" className="2xl:size-[calc(100%-10%)]" />
          </div>
          <div className="">
            <img src={img8} alt="Brand 8" className="2xl:size-[calc(100%-10%)]" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="">
              <img src={img4} alt="Brand 4" className="2xl:size-[calc(100%-10%)]" />
            </div>
            <div className="">
              <img src={img9} alt="Brand 9" className="2xl:size-[calc(100%-10%)]" />
            </div>
          </div>
        </div>

        {/* Text Overlay */}
        <div className="w-full absolute top-60 lg:top-70 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none xl:pt-12">
          <h1 className="text-amber-500 text-6xl md:text-7xl xl:text-8xl font-semibold text-center font-worksans">
            Brand Personality
          </h1>
          <p className="text-white text-xl md:text-2xl mt-6 text-center max-w-3xl leading-relaxed font-nunito">
            We aim to take brands in all eight directions — expanding their reach
            while making them trusted, impactful, and unforgettable.
          </p>
        </div>
      </div>

      {/* Mobile & Tablet layout */}
      <div className="lg:hidden flex flex-col items-center justify-center gap-3 px-4 h-[80vh] ">
        {/* Text first */}
        <h1 className="text-amber-500 text-3xl md:text-5xl font-semibold text-center">
          Brand Personality
        </h1>
        <p className="text-gray-200 text-base sm:text-lg md:text-xl mx-10 text-center leading-relaxed">
          We aim to take brands in all eight directions — expanding their reach
          while making them trusted, impactful, and unforgettable.
        </p>

        {/* Brands in Bento Grid */}
        <div className="absolute grid grid-cols-4 grid-rows-3 gap-4 mt-8 opacity-20 blur-sm px-10">
          <img src={img1} alt="Brand 1" className="w-full h-full object-cover col-span-2 row-span-1" />
          <img src={img2} alt="Brand 2" className="w-full h-full object-cover col-span-2 row-span-1" />
          <img src={img3} alt="Brand 3" className="w-full h-full object-cover col-span-1 row-span-1" />
          <img src={img4} alt="Brand 4" className="w-full h-full object-cover col-span-1 row-span-2" />
          <img src={img5} alt="Brand 5" className="w-full h-full object-cover col-span-2 row-span-1" />
          <img src={img6} alt="Brand 6" className="w-full h-full object-cover col-span-1 row-span-1" />
          <img src={img7} alt="Brand 7" className="w-full h-full object-cover col-span-1 row-span-1" />
          <img src={img8} alt="Brand 8" className="w-full h-full object-cover col-span-2 row-span-1" />
          <img src={img9} alt="Brand 9" className="w-full h-full object-cover col-span-2 row-span-1" />
        </div>
      </div>
    </div>
  );
}

export default BrandSection;
