import Logo from "/src/assets/headerasset/EtThicks1.png";
import ContentCreation from "/src/assets/head/youtubepng.png";
import pearsonalbranding from "/src/assets/head/marketingpng.png";
import infuencer from "/src/assets/head/influncer.png";
import social from "/src/assets/head/socialmark.png";
import leadgeneration from "/src/assets/head/leadgeneration.png";
import productphotography from "/src/assets/head/productphoto.png";
import tvcomersials from "/src/assets/head/tv.png";
import brandstorytelling from "/src/assets/head/icon12.png";
import digitalmarketing from "/src/assets/head/people.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    slug: "content-creation",
    name: "Content Creation",
    icon: ContentCreation,
  },
  {
    slug: "personal-branding",
    name: "Personal Branding",
    icon: pearsonalbranding,
  },
  {
    slug: "influencer-marketing",
    name: "Influencer Marketing",
    icon: infuencer,
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    icon: social,
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    icon: leadgeneration,
  },
  {
    slug: "product-photography",
    name: "Product Photography",
    icon: productphotography,
  },
  {
    slug: "brand-storytelling",
    name: "Brand Storytelling",
    icon: brandstorytelling,
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    icon: digitalmarketing,
  },
  {
    slug: "tv-commercials",
    name: "TV Commercials",
    icon: tvcomersials,
  },
];

function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  const handleServiceClick = (slug) => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    window.location.href = `/service/${slug}`;
  };

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };


  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="shrink-0">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="w-auto object-cover" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 text-md lg:text-lg 2xl:text-xl mr-8">
            <Link to="/" className="hover:text-[#F09D01] transition-colors">
              Home
            </Link>

            {/* Services Dropdown for Desktop */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-[#F09D01] focus:outline-none transition-colors">
                Services
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="
        fixed top-16 right-0
        w-full
        bg-black
        border-t border-gray-800
        px-10 py-6
        flex justify-end
      "
                  >
                    {/* Right aligned container */}
                    <div className=" w-full space-y-8">
                      {chunkArray(SERVICES, 3).map((row, rowIndex) => (
                        <div
                          key={rowIndex}
                          className="flex justify-end gap-8"
                        >
                          {row.map((service) => (
                            <button
                              key={service.slug}
                              onClick={() => handleServiceClick(service.slug)}
                              className="
                  flex items-center gap-3
                  text-right
                  group
                  transition
                "
                            >
                              <img
                                src={service.icon}
                                alt={service.name}
                                className="
                    h-5 w-5
                    object-contain
                    group-hover:scale-110
                    transition-transform duration-300
                  "
                              />
                              <span
                                className="
                    text-white
                    text-xl
                    group-hover:text-[#F09D01]
                    transition-colors
                  "
                              >
                                {service.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>



            </div>

            <Link to="/about" className="hover:text-orange-300 transition-colors">
              About us
            </Link>

            <Link to="/contact" className="hover:text-orange-300 transition-colors">
              Contact us
            </Link>

            <Link to="/blogs" className="hover:text-orange-300 transition-colors">
              Blog
            </Link>


          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black text-md shadow-lg py-5 px-4"
          >
            <button
              onClick={() => handleNavClick("/")}
              className="block w-full text-left px-4 py-3 hover:bg-gray-800 hover:text-orange-300"
            >
              Home
            </button>

            {/* Services in Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left px-4 py-3 bg-black focus:outline-none flex justify-between items-center"
              >
                Services
                <motion.svg
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 text-orange-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black overflow-hidden shadow-[inset_0_6px_12px_rgba(255,255,255,0.08)]"
                  >
                    {SERVICES.map((service) => (
                      <button
                        key={service.slug}
                        onClick={() => handleServiceClick(service.slug)}
                        className="flex items-center gap-3 w-full px-6 py-3 hover:bg-gray-800 hover:text-orange-300 transition-colors"
                      >
                        <img
                          src={service.icon}
                          alt={service.name}
                          className="h-6 w-6 object-contain"
                        />
                        <p className="text-white text-base">{service.name}</p>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick("/about")}
              className="block w-full text-left px-4 py-3 hover:bg-gray-800 hover:text-orange-300"
            >
              About us
            </button>

            <button
              onClick={() => handleNavClick("/blogs")}
              className="block w-full text-left px-4 py-3 hover:bg-gray-800 hover:text-orange-300"
            >
              Blog
            </button>

            <button
              onClick={() => handleNavClick("/contact")}
              className="block w-full text-left px-4 py-3 hover:bg-gray-800 hover:text-orange-300"
            >
              Contact us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
