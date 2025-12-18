import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import nam from "/src/assets/home/man.png";

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What does “content-first web design” mean?",
      a: "It means the design process is guided by real content, not dummy text, ensuring better clarity and structure.",
    },
    {
      q: "Do you provide content writing or just design?",
      a: "We provide both — engaging content writing and modern design for a complete solution.",
    },
    {
      q: "How long does a typical project take?",
      a: "Most projects take 4–6 weeks depending on scope and complexity.",
    },
    {
      q: "What platforms do you build on?",
      a: "We build on WordPress, Shopify, Webflow, and custom-coded platforms.",
    },
    {
      q: "Global Experience, Local Relevance",
      a: "We combine international best practices with local insights for maximum impact.",
    },
  ];

  return (
    <div className="bg-black py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* ✅ Top Row: Heading + Description */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-2">
          <h2 className="w-full lg:w-1/2 text-white text-xl lg:text-4xl xl:text-5xl font-semibold font-['Nunito'] leading-snug">
            All of Your Digital Marketing FAQ’s
          </h2>
          <p className="w-full lg:w-1/2 text-gray-400 text-sm lg:text-lg xl:text-xl font-light lg:pl-30 font-['Work_Sans'] lg:max-w-xl">
            We blend creativity with performance to help brands grow, convert,
            and dominate their category.
          </p>
        </div>

        {/* ✅ Bottom Row: Image + FAQ List */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left: Image with overlay */}
          <div className="relative w-full lg:max-w-md mx-auto lg:mx-0">
            <img
              src={nam}
              alt="FAQ Illustration"
              className="w-full h-64 md:h-96 lg:h-[420px] object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-xl px-4 py-3 text-center text-zinc-800 text-base sm:text-lg font-medium font-['Nunito'] shadow-lg">
              Get Answer for All doubts here
            </div>
          </div>

          {/* Right: FAQ List */}
          <div className="w-full flex-1 flex flex-col gap-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                onClick={() => handleToggle(i)}
                className="bg-zinc-900 rounded-xl border border-zinc-700 cursor-pointer transition-all duration-300 px-2 md:px-8 py-4 flex flex-col"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 md:gap-8">
                    <span className="bg-amber-500 text-black text-sm sm:text-base font-bold px-2 py-1 rounded-full">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white text-sm sm:text-lg font-normal">
                      {item.q}
                    </span>
                  </div>
                  <FiChevronDown
                    className={`text-white text-xl transform transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                      }`}
                  />
                </div>
                {openIndex === i && (
                  <div className="mt-3 px-2 text-white text-sm sm:text-base font-light">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
