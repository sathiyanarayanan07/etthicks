import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CurveBG from "/src/assets/home/Frame.png";
import Pacman from "/src/assets/pacman.gif"; // pacman gif
import { Link } from "react-router-dom";

function HeroSection() {
  const circleRef = useRef(null); // circle + arrow
  const flyTextRef = useRef(null); // marquee text
  const pacmanRef = useRef(null); // gif pacman

  useEffect(() => {
    // Rotate the circle + arrow continuously
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 6,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });

    const text = flyTextRef.current;
    const container = text.parentElement; // relative div

    if (text && container) {
      const containerWidth = container.offsetWidth;
      const textWidth = text.offsetWidth;

      const animateMarquee = () => {
        gsap.fromTo(
          text,
          { x: -textWidth }, // start from the right edge
          {
            x: containerWidth, // move to left edge
            duration: 5,
            ease: "linear",
            onComplete: animateMarquee, // repeat animation after it ends
          }
        );
      };

      animateMarquee(); // start the loop
    }
  }, []);

  return (
    <div
      className="w-full xl:min-h-screen relative inset-0 bg-[#0f0f0f] bg-cover bg-center bg-no-repeat rounded-br-[60px] rounded-bl-[60px] "
      style={{
        backgroundImage: `url(${CurveBG})`,
      }}
    >
      <div className="w-full h-full flex flex-col gap-10 mt-5 ">
        {/* Top Container */}
        <div className="mt-13">
        <div className="w-full  flex flex-col md:flex-row justify-center items-center md:items-start md:gap-8 md:py-26 px-5 md:px-10 xl:px-16 mt-26 md:mt-0 2xl:mt-10  ">
          {/* Heading */}
          <div className="w-full md:w-[60vw] xl:w-[70vw] md:text-4xl text-white">
            <h1 className="mb-4">
              <span className="inline text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold uppercase leading-snug md:leading-[0px] tracking-wider">
                Ettuthikkum
              </span>{" "}
              <span className="inline text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-snug md:leading-[0px] tracking-wide">
                comes
              </span>{" "}
              <span className="text-[#f09d01] text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold uppercase leading-snug tracking-wider">
                EtThicks
              </span>{" "}
              <span className="text-white text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-medium leading-snug  tracking-wider">
                — stories that reach everywhere.
              </span>
            </h1>
          </div>

          {/* Button & Description */}
          <div className="w-full md:w-[40vw] lg:w-[35vw] xl:max-w-sm">
            <div className="text-gray-400 text-sm md:text-md xl:text-lg font-medium">
              Our team of creatives, strategists, and storytellers works closely
              with clients to turn ideas into impactful media that connects with
              real people.
            </div>
            <div className="mt-8 sm:mt-6">
              <Link to="/contact">
                <button className="px-8 py-2 bg-orange-400 rounded-2xl text-gray-100 text-md md:text-sm lg:text-lg font-medium hover:scale-110 transition-all duration-500">
                  Let's Create Together
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-start gap-3 mt-8">
              {/* Profile Images */}
              <div className="flex justify-center items-center gap-2">
                {/* <div className="flex  -space-x-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Client 1"
                    className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-black"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Client 2"
                    className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-black"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Client 3"
                    className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-black"
                  />
                </div> */}
                {/* 2k+ */}
                {/* <div className="text-white text-3xl sm:text-xl md:text-2xl font-semibold">
                  2K<span className="text-gray-300 text-3xl sm:text-lg">+</span>
                </div> */}
              </div>

              {/* Number + Text */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                {/* Dot + Happy Clients */}
                <div className="flex items-center gap-2">
                  {/* <span className="w-2 h-2 rounded-full bg-yellow-500"></span> */}
                  {/* <span className="text-gray-400 text-xs md:text-lg">
                    Happy Clients
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Bottom Animation */}
        <div className="w-full h-[20vh] md:h-0 md:mt-34">
          <div className="w-full  relative">
            <div className="w-full rounded-bl-[60px] sm:rounded-bl-[80px] md:rounded-bl-[128px]   sm:rounded-br-[80px] md:rounded-br-[128px] overflow-hidden">
              {/* <div className="w-full h-full bg-[#111111] rounded-bl-[60px] sm:rounded-bl-[80px] md:rounded-bl-[112.5px] rounded-br-[60px] sm:rounded-br-[80px] md:rounded-br-[112.5px] z-10 shadow-2xl" /> */}

              {/* Target line  */}
              <div className="block w-[80vw] md:w-[85vw] lg:w-[90vw] mx-10 xl:mx-15 h-6 md:h-9  absolute top-5 md:-top-30 xl:-top-28 2xl:-top-22 bg-black rounded-2xl overflow-hidden">
                {/* Marquee flying text (hidden on mobile) */}
                <div
                  ref={flyTextRef}
                  className="w-[90vw] block text-white font-bold text-xs md:text-xl mt-1"
                >
                  Grow with EtThicks
                </div>
              </div>

              {/* Rotating Circle + Arrow (hidden on mobile)  */}
              <div
                ref={circleRef}
                className="flex absolute left-5 md:left-8 xl:left-14 md:-top-42 xl:-top-44 2xl:-top-36 flex-row items-center justify-center w-16 h-16 md:w-30 md:h-30 lg:w-34 lg:h-34 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40"
              >
                <div className="absolute inset-0 bg-sky-900 rounded-full"></div>

                {/* Circular Text */}
                <svg viewBox="0 0 200 200" className="absolute w-full h-full">
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
                  <div className="w-0 h-0 border-l-[8px] sm:border-l-[10px] md:border-l-[12px] border-r-[8px] sm:border-r-[10px] md:border-r-[12px] border-t-[12px] sm:border-t-[15px] md:border-t-[18px] border-l-transparent border-r-transparent border-t-yellow-600"></div>
                </div>
              </div>

              {/* Pac-Man Gif */}
              <img
                ref={pacmanRef}
                className="absolute right-5 md:right-10 lg:right-14 2xl:right-18 md:-top-36 2xl:-top-30 transform scale-x-[-1] w-14 md:w-18 xl:w-22"
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
