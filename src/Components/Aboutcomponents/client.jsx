import rob from "/src/assets/about/Android Robo.png";
import con from "/src/assets/about/Concept Studio Logo.png";
import tl from "/src/assets/about/TLG logo.png";
import cb from "/src/assets/about/CBL Logo.png";
import ab from "/src/assets/about/Abi estates.png";
import tam from "/src/assets/about/department.png";
import niti from "/src/assets/about/nithiya.png";
import tn from "/src/assets/about/TNRTP.png";
import cha from "/src/assets/about/CHAI Main logo.png";
import zoom from "/src/assets/about/ZoomFarms Logo.png";
import ala from "/src/assets/about/alayam selveer.png";

const slides = [rob, con, tl, cb, ab, tam, niti, tn, cha, zoom, ala];

// Reusable Row Component
const CarouselRow = ({ reverse = false, duration = 14 }) => {
  return (
    <div className="relative w-full overflow-hidden my-4">
      {/* Gradient Fade on both sides */}
      <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-black to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black to-transparent z-20 pointer-events-none"></div>

      {/* Animated Scrolling Row */}
      <div
        className="flex items-center"
        style={{
          width: `${slides.length * 2 * 12}rem`,
          animation: `${reverse ? "reverseScroll" : "scroll"} ${duration}s linear infinite`,
        }}
      >
        {slides.concat(slides).map((img, idx) => (
          <div
            key={idx}
            className="shrink-0 size-28 md:size-20 lg:size-40 mx-6 flex justify-center items-center group"
          >
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={`client-${idx}`}
                className="w-full h-full object-contain object-center filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Client() {
  return (
    <>
      <div className="bg-[#000000]  text-white py-12 relative">
        <h1 className="text-[#FFAE00] text-center font-bold text-[56px] mb-8 font-worksans">
          CLIENTS
        </h1>

        {/* Animated Rows */}
        <CarouselRow duration={12} />
        <CarouselRow reverse={true} duration={14} />

        {/* Keyframe Animations */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes reverseScroll {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </div>
    </>
  );
}

export default Client;
