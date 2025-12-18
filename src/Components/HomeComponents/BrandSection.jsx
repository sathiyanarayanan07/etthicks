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
      className="w-full relative overflow-hidden py-12"
      style={{
        backgroundImage: "radial-gradient(ellipse at center, #072a31, #000000)"
      }}
    >
      {/* Desktop (1440px) layout */}
      <div className="hidden lg:block w-full relative">
        <img src={img5} alt="Brand 5" className="w-30 xl:w-30 h-36 left-[84px] top-[145px] xl:top-[15px] absolute object-contain" />
        <img src={img6} alt="Brand 6" className="w-30 xl:w-36 h-50 xl:h-72 left-[84px] top-[330px] xl:top-[220px] absolute" />
        <img src={img4} alt="Brand 4" className="w-30 xl:w-34 h-54 xl:h-80 left-[800px] xl:left-[1210px] xl:top-[180px] top-[145px] absolute" />
        <img src={img9} alt="Brand 9" className="w-36 xl:w-80 h-36 xl:h-30 left-[790px] xl:left-[850px] top-[379px] absolute object-cover" />

        <img src={img1} alt="Brand 1" className="w-60 xl:w-64 h-26 xl:h-36 left-[81px] xl:left-[230px] top-[5px] xl:top-[15px] absolute" />
        <img src={img2} alt="Brand 2" className="w-46 xl:w-70 h-26 xl:h-36 left-[382px] xl:left-[550px] top-[5px] xl:top-[15px] absolute" />
        <img src={img7} alt="Brand 7" className="w-52 h-30 left-[248px] top-[405px] absolute" />
        <img src={img8} alt="Brand 8" className="w-56 h-26 left-[530px] top-[409px] absolute" />
        <img src={img3} alt="Brand 3" className="w-66 xl:w-120 h-26 xl:h-36 left-[635px] xl:left-[880px] xl:top-[15px] top-[5px] absolute" />

        {/* Outer Rounded Container */}
        <div className="w-[calc(100vw-150px)] mx-auto h-[calc(100vh-170px)] bg-white/10 rounded-[77px] border border-white/10 backdrop-blur-sm" />

        {/* Text Overlay */}
        <div className="w-full absolute top-60 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none pt-12">
          <h1 className="text-amber-500 text-6xl md:text-7xl xl:text-8xl font-semibold font-['Nunito'] text-center">
            Brand Personality
          </h1>
          <p className="text-white text-xl md:text-2xl mt-6 text-center max-w-3xl leading-relaxed font-['Nunito']">
            We aim to take brands in all eight directions — expanding their reach
            while making them trusted, impactful, and unforgettable.
          </p>
        </div>
      </div>

      {/* Mobile & Tablet layout */}
      <div className="lg:hidden flex flex-col items-center justify-center gap-3 px-4 h-[80vh] ">
        {/* Text first */}
        <h1 className="text-amber-500 text-3xl md:text-5xl font-semibold font-['Nunito'] text-center">
          Brand Personality
        </h1>
        <p className="text-gray-200 text-base sm:text-lg md:text-xl mx-10 text-center leading-relaxed font-['Nunito']">
          We aim to take brands in all eight directions — expanding their reach
          while making them trusted, impactful, and unforgettable.
        </p>

        {/* Brands in Bento Grid */}
        <div className="absolute grid grid-cols-4 grid-rows-3 gap-4 mt-8 opacity-40 blur-sm px-10">
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
