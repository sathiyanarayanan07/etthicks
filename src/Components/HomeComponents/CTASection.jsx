import teg from "/src/assets/home/icon2.png";

function CTASection() {
  return (
    <div className="w-full md:min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Icon box */}
      <div className="w-20 md:w-26 h-20 md:h-26 xl:w-30 xl:h-30 bg-amber-500 rounded-4xl shadow-[0px_-3px_5px_0px_rgba(255,174,0,0.09),0px_12px_13px_0px_rgba(255,174,0,0.17),0px_4px_6px_0px_rgba(255,174,0,0.12),0px_-12px_30px_0px_rgba(255,174,0,0.12),0px_54px_55px_0px_rgba(255,174,0,0.25)] flex items-center justify-center mb-8">
        <img src={teg} alt="icon" className="w-10 h-10 object-contain" />
      </div>

      {/* Heading */}
      <h1 className="text-white text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-center mb-6 font-worksans">
        Get Started
      </h1>

      {/* Description */}
      <p className="text-neutral-500 text-center text-md md:text-lg xl:text-xl font-medium leading-relaxed max-w-lg xl:max-w-xl mb-10 font-nunito">
        Reach out today — we’d love to hear your story and explore how design can amplify your message.
      </p>

      {/* Input + Button */}
      <div className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">
        <div className="w-full rounded-2xl outline-1 outline-amber-500 px-5 flex items-center max-w-xs py-2">
          <span className="text-neutral-500 text-lg sm:text-xl font-regular font-nunito">
            Enter Your E-mail
          </span>
        </div>
        <button className="px-8 md:px-6 py-1 md:py-2 bg-amber-500 rounded-3xl md:rounded-2xl text-white text-lg sm:text-2xl font-regular  hover:bg-amber-600 transition font-worksans">
          Send
        </button>
      </div>
    </div>
  );
}

export default CTASection;
