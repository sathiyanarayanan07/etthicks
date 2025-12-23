import Image1 from "/src/assets/about/poky.png";

function OurStory() {
  return (
    <>
      <div className="w-full bg-black py-12 md:py-20 lg:py-0 lg:pb-16 px-4 md:px-8 lg:px-12 xl:px-0">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-20 xl:gap-40 h-[600px] md:h-[700px] lg:h-[800px]">
          {/* Image Section - Mobile first */}
          <div className="w-full lg:w-1/3 order-2 lg:order-1 xl:pt-40">
            <img
              src={Image1}
              alt="Illustrator"
              className="w-[80%] md:w-[40%] lg:w-[90%] h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain lg:scale-150 mx-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <h1 className="leading-none mb-4 md:mb-6">
              <span className="text-5xl md:text-7xl lg:text-8xl xl:text-[152px] text-[#FFAE00] font-semibold uppercase font-worksans ">
                our{" "}
              </span>
              <span className="text-5xl md:text-7xl lg:text-8xl xl:text-[152px] text-[#ffffff] font-semibold uppercase font-worksans">
                story
              </span>
            </h1>

            <h2 className="text-gray-300 text-lg md:text-[16px] lg:text-xl font-normal leading-relaxed tracking-wide max-w-2xl lg:max-w-4xl mx-auto lg:mx-0 font-nunito">
              It began with a spark. A thought. A question: "What if stories
              could travel?" From that spark, EtThicks came to life. Not in a
              boardroom. Not from a brief. But where creativity meets
              obsession, where curiosity refuses to be silent. Eight directions.
              Eight
              paths. Eight ways a story can move. That's why we chose our name:
              Ettuthikkum. Because a story told well never stays in one place.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStory;
