// src/components/ContactSection.jsx
import React, { useRef, useState } from "react";
import grid from "/src/assets/ContactImage/grid.png";
import Pacman from "/src/assets/Gif/Pacman.gif";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [dotsPosition, setDotsPosition] = useState(0);
  const [totalChars, setTotalChars] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    // Get form data
    const formData = new FormData(formRef.current);
    const data = {
      data: {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      },
    };

    try {
      const response = await fetch("http://localhost:1337/api/talk-with-uses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        setLoading(false);
        setSuccessMsg("Message sent successfully!");
        formRef.current.reset();
        setTotalChars(0);
        setDotsPosition(0);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        setLoading(false);
        setErrorMsg("Oops! Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setLoading(false);
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const handleInputChange = () => {
    const formData = new FormData(formRef.current);
    let charCount = 0;

    // Count characters from all form fields
    for (let value of formData.values()) {
      charCount += value.toString().length;
    }

    setTotalChars(charCount);
    // Move dots based on character count (adjust the multiplier for speed)
    setDotsPosition(charCount * 10);
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden flex flex-col-reverse md:flex-row items-center justify-center bg-black py-20">
      {/* Background Grid */}
      <img
        src={grid}
        alt="Background Grid"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      />

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center w-full relative z-10 gap-10 xl:gap-0 px-4 md:px-20">
        {/* Left Side: Pac-Man with Animated Dots */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={Pacman}
            alt="Pacman"
            className="size-56 md:size-96 md:-ml-20 md:-mt-20 object-contain z-10 relative"
          />

          {/* Animated Orange Dots Container */}
          <div className="flex items-center -ml-28 xl:-ml-48  md:-mt-20 overflow-hidden relative">
            <div
              className="flex gap-14"
              style={{
                transform: `translateX(-${dotsPosition}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              {/* Generate enough dots to cover the movement */}
              {[...Array(1050)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 md:w-6 md:h-6 bg-orange-500 rounded-full shrink-0"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Heading + Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          {/* Playful "Let's talk!" heading with Nunito font */}
          <h2 className="text-white text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-8 flex gap-1 leading-none font-nunito md:-ml-18 xl:ml-0">
            <span className="inline-block transform -rotate-18">L</span>
            <span className="inline-block transform -rotate-15 -mt-2">e</span>
            <span className="inline-block transform rotate-3 -mt-2">t</span>
            <span className="inline-block transform  ml-1">'</span>
            <span className="inline-block transform rotate-12">s</span>
            <span className="inline-block w-5 md:w-3"></span>
            <span className="inline-block transform -rotate-8">t</span>
            <span className="inline-block transform -rotate-8">a</span>
            <span className="inline-block transform -rotate-6">l</span>
            <span className="inline-block transform rotate-0">k</span>
            <span className="inline-block transform -rotate-2">!</span>
          </h2>

          {/* Form Box */}
          <div className="relative bg-white shadow-lg overflow-hidden [clip-path:polygon(0_0,calc(100%-90px)_0,100%_90px,100%_100%,0_100%)] ">
            <div className="p-4 xl:p-6">
              <p className="text-gray-700 text-sm md:text-base mb-8 leading-relaxed pr-10">
                If you have any questions, just fill in the contact form, and we
                will answer you shortly. If you are living nearby, come visit at
                one of our comfortable offices.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-8"
                onChange={handleInputChange}
              >
                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-[#e2250c] text-sm font-medium mb-1">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="border-b border-[#e2250c] outline-none py-2 text-gray-700 placeholder:text-gray-400 focus:border-[#e2250c]"
                    onChange={handleInputChange}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-[#e2250c] text-sm font-medium mb-1">
                    Email address:
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="border-b border-[#e2250c] outline-none py-2 text-gray-700 placeholder:text-gray-400 focus:border-[#e2250c]"
                    onChange={handleInputChange}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className="text-[#e2250c] text-sm font-medium mb-1">
                    Message:
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="border-b border-[#e2250c] outline-none py-2 resize-none text-gray-700 placeholder:text-gray-400 focus:border-[#e2250c]"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </form>
            </div>

            {/* Full-width orange Send Button */}
            <button
              type="submit"
              form={formRef.current ? formRef.current.id : undefined}
              disabled={loading}
              onClick={handleSubmit}
              className="bg-[#f8a81c] text-white font-semibold text-lg py-4 w-full hover:bg-[#f29b00] transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            {/* Success & Error Messages */}
            {successMsg && (
              <p className="text-center mt-4 text-green-600 font-medium">
                {successMsg}
              </p>
            )}
            {errorMsg && (
              <p className="text-center mt-4 text-red-600 font-medium">
                {errorMsg}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ⬇ Full-width tilted line with animated ETTHICKS + Subtract.svg */}
      <div className="absolute top-40 md:top-130 left-0 w-full h-[42px] mt-16 flex items-center justify-center -rotate-5 overflow-hidden">
        {/* Static blue background */}
        <div className="absolute inset-0 w-full h-full bg-[#007388]"></div>

        {/* Animated content */}
        <div className="relative w-full h-full flex items-center overflow-hidden">
          <div className="animate-scroll-text flex items-center justify-center gap-4 px-10 h-full w-max">
            {/* Double the content for seamless looping */}
            {[...Array(4)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {Array(5)
                  .fill("EtThicks")
                  .map((word, i) => (
                    <React.Fragment key={`${setIndex}-${i}`}>
                      <span className="text-white text-2xl font-semibold tracking-wide whitespace-nowrap">
                        {word}
                      </span>
                      {i !== 9 && (
                        <img
                          src={Pacman}
                          alt="divider"
                          className="w-16 h-auto shrink-0 p-1.5 rotate-x-180 rotate-z-180"
                        />
                      )}
                    </React.Fragment>
                  ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
