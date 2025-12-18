import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pac from "/src/assets/about/pack.png";
import red from "/src/assets/about/red.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const imageRef1 = useRef(null);
  const sectionRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const sectionRef2 = useRef(null);

  useEffect(() => {
    // First section animation - VERY SLOW rotation
    const image1 = imageRef1.current;
    const section1 = sectionRef1.current;

    if (image1 && section1) {
      const rotationAnimation1 = gsap.fromTo(image1, {
        rotation: 0,
      }, {
        rotation: 100,
        ease: "none",
        scrollTrigger: {
          trigger: section1,
          start: "top 80%",
          end: "bottom 20%", // Much longer duration
          scrub: 5, // VERY SLOW scrub
          // markers: true,
        }
      });

      return () => {
        rotationAnimation1.kill();
      };
    }
  }, []);

  useEffect(() => {
    // Second section animation - VERY SLOW rotation
    const image2 = imageRef2.current;
    const section2 = sectionRef2.current;

    if (image2 && section2) {
      const rotationAnimation2 = gsap.fromTo(image2, {
        rotation: 0,
      }, {
        rotation: -100,
        ease: "none",
        scrollTrigger: {
          trigger: section2,
          start: "top 80%",
          end: "bottom 20%", // Much longer duration
          scrub: 5, // VERY SLOW scrub
          // markers: false,
        }
      });

      return () => {
        rotationAnimation2.kill();
      };
    }
  }, []);

  // Clean up all ScrollTriggers on component unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Section 1 */}
      <div
        ref={sectionRef1}
        className="flex flex-col-reverse md:flex-row w-full bg-black items-center justify-center gap-12 pt-16 md:pt-0 px-4 md:px-10 xl:px-10"
      >
        {/* Text Section - Top on mobile, Left on desktop */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-5 lg:mb-0 ">
          <h1 className="text-gray-200 text-xl md:text-base lg:text-3xl leading-relaxed text-center md:text-right max-w-lg lg:max-w-none">
            We don't just create content.
            We stage worlds.
            We craft experiences that people feel, remember, and
            carry forward.
            Every frame, every word, every campaign is guided by
            a single principle:
          </h1>
        </div>

        {/* Image Section - Bottom on mobile, Right on desktop */}
        <div className="w-full md:w-1/2 flex items-center justify-center order-2">
          <img
            ref={imageRef1}
            src={pac}
            alt="pac"
            className="object-contain w-[60%] md:w-[85%] lg:w-[50%] h-auto max-h-[300px] md:max-h-[400px] lg:max-h-none"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div
        ref={sectionRef2}
        className="flex flex-col-reverse md:flex-row-reverse lg:flex-row lg:h-[523px] w-full bg-[#000000] items-center justify-center gap-12 py-16 lg:py-0 px-4 lg:px-8 xl:px-10"
      >
        {/* Image Section - Top on mobile, Left on desktop */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1 lg:mb-0">
          <img
            ref={imageRef2}
            src={red}
            alt="red"
            className="object-contain w-[60%] md:w-[75%] lg:w-[50%] h-auto max-h-[300px] md:max-h-[400px] lg:max-h-none"
          />
        </div>

        {/* Text Section - Bottom on mobile, Right on desktop */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-2">
          <h1 className="text-gray-300 text-xl md:text-base lg:text-3xl leading-relaxed text-center md:text-left max-w-lg lg:max-w-none">
            We don't just create content.
            We stage worlds.
            We craft experiences that people feel, remember, and
            carry forward.
            Every frame, every word, every campaign is guided by
            a single principle:
          </h1>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
