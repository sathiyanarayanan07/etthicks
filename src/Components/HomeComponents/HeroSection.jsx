import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CurveBG from "/src/assets/home/Frame.png";
import Pacman from "/src/assets/Gif/Pacman.gif"; // pacman gif
import { Link } from "react-router-dom";

function HeroSection() {
  const circleRef = useRef(null); // circle + arrow
  const flyTextRef = useRef(null); // marquee text
  const pacmanRef = useRef(null); // gif pacman

  useEffect(() => {
    // Rotate circle
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });

    // Marquee animation (LEFT ➜ RIGHT)
    const marquee = flyTextRef.current;

    if (marquee) {
      const totalWidth = marquee.scrollWidth / 2;

      // Start off-screen left
      gsap.set(marquee, { x: -totalWidth });

      gsap.to(marquee, {
        x: 0,
        duration: 10,
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);


  return (
    <div
      className="w-full xl:min-h-screen relative inset-0 bg-[#0f0f0f] bg-cover bg-center bg-no-repeat rounded-br-[60px] rounded-bl-[60px] "
      style={{
        backgroundImage: `url(${CurveBG})`,
      }}
    >
      <div className="w-full h-full flex flex-col items-between mt-5 font-nunito">
        {/* Top Container */}
        <div className="w-full  flex flex-col md:flex-row justify-center items-center md:items-start md:gap-8 md:py-26 px-5 md:px-10 xl:px-16 mt-26 md:mt-0 2xl:mt-0  ">
          {/* Heading */}
          <div className="w-full md:w-[60vw] xl:w-[70vw] text-4xl md:text-4xl text-white">
            <h1 className="mb-4">
              <span className="inline text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold uppercase leading-snug md:leading-0 tracking-wider font-worksans">
                Ettuthikkum
              </span>{" "}
              <span className="inline text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-snug md:leading-0 tracking-wide">
                comes
              </span>{" "}
              <span className="text-[#f09d01] text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold uppercase leading-snug tracking-wider font-worksans">
                EtThicks
              </span>{" "}
              <span className="text-white text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-medium leading-snug  tracking-wider">
                — stories that reach everywhere.
              </span>
            </h1>
          </div>

          {/* Button & Description */}
          <div className="w-full md:w-[40vw] lg:w-[35vw] xl:max-w-sm">
            <div className="text-[#828282] text-sm md:text-md xl:text-lg font-medium font-nunito">
              Our team of creatives, strategists, and storytellers works closely
              with clients to turn ideas into impactful media that connects with
              real people.
            </div>
            <div className="mt-12 sm:mt-6">
              <Link to="/contact">
                <button className="px-8 py-2 bg-[#f09d01] rounded-2xl text-gray-100 text-md md:text-sm lg:text-lg font-regular hover:scale-110 transition-all duration-500 font-worksans">
                  Let's Create Together
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-start gap-3 mt-8">
              {/* Profile Images */}
              <div className="flex justify-center items-center gap-2">
              </div>

              {/* Number + Text */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                {/* Dot + Happy Clients */}
                <div className="flex items-center gap-2">
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Animation */}
        <div className="w-full h-[10vh] md:h-0 mt-10 md:mt-34 ">
          <div className="w-full  relative bg-white z-40">
            <div className="w-full rounded-bl-[60px] sm:rounded-bl-[80px] md:rounded-bl-[128px]   sm:rounded-br-[80px] md:rounded-br-[128px] overflow-hidden bg-white z-40">

              {/* Target line  */}
              <div className="block w-[80vw] md:w-[85vw] lg:w-[90vw] mx-10 xl:mx-15 h-6 md:h-9 absolute top-5 md:-top-30 xl:-top-28 2xl:-top-22 bg-black rounded-2xl overflow-hidden">
                <div
                  ref={flyTextRef}
                  className="flex whitespace-nowrap text-white font-normal text-xs md:text-xl will-change-transform font-worksans"
                >
                  {Array.from({ length: 20 }).map((_, index) => (
                    <>
                      <span key={index} className="mx-6">
                        Grow with EtThicks
                      </span>
                      <span key={index} className="">
                        •
                      </span>
                    </>
                  ))}
                </div>
              </div>


              {/* Rotating Circle + Arrow (hidden on mobile)  */}
              <div
                ref={circleRef}
                className="flex absolute left-5 md:left-8 xl:left-14 md:-top-42 xl:-top-44 2xl:-top-36 flex-row items-center justify-center w-16 h-16 md:w-30 md:h-30 lg:w-34 lg:h-34 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 "
              >
                <div className="absolute inset-0 bg-sky-900 rounded-full -m-2"></div>

                {/* Circular Text */}
                <svg viewBox="0 0 200 200" className="absolute w-full h-full font-worksans">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text
                    fill="white"
                    fontSize="20"
                    className="text-2xl md:text-[33px]"
                    fontWeight="500"
                    letterSpacing="2px"
                  >
                    <textPath
                      xlinkHref="#circlePath"
                      startOffset="0"
                      textAnchor="middle"
                    >
                      EXPLORE MORE • EXPLORE MORE • EXPLORE MORE
                    </textPath>
                  </text>
                </svg>

                {/* Center Triangle */}
                <div className="relative">
                  <div className="w-0 h-0 border-l-8 sm:border-l-10 md:border-l-12 border-r-8 sm:border-r-10 md:border-r-12 border-t-12 sm:border-t-15 md:border-t-18 border-l-transparent border-r-transparent border-t-yellow-600"></div>
                </div>
              </div>

              {/* Pac-Man Gif */}
              <img
                ref={pacmanRef}
                className="absolute -top-4 md:-top-48 lg:-top-52 2xl:-top-50 right-0 transform scale-x-[-1] size-24 md:size-44 lg:size-52 2xl:size-62"
                src={Pacman}
                alt="Pacman"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
