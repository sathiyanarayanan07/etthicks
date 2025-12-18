import Logo from "/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white pb-10 md:pb-0 md:pt-10 relative">
      <div className="mx-auto px-8 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between">

          {/* Left - Logo */}
          <div className="flex justify-start items-center">
            <img
              src={Logo}
              alt="Logo"
              className="size-56 md:size-64 xl:size-80 object-cover -ml-7 -mb-8 md:ml-0 md:mb-0"
            />
          </div>

          {/* Center - Contact Info */}
          <div className="text-left mb-10 md:mb-0">
            <h3 className="text-gray-400 uppercase tracking-widest text-sm mb-2">
              Contact Us
            </h3>
            <p className="font-inter text-sm text-gray-200">+1 891 989-11-91</p>
            <p className="font-inter text-sm text-gray-200">info@logoipsum.com</p>
          </div>

          {/* Right - Social Buttons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <button className="border border-gray-600 rounded-full text-gray-300 px-6 py-1 text-sm md:text-xs font-inter hover:bg-gray-800 transition">
              Instagram
            </button>
            <button className="border border-gray-600 rounded-full text-gray-300 px-6 py-1 text-sm md:text-xs font-inter hover:bg-gray-800 transition">
              Whatsapp
            </button>
            <button className="border border-gray-600 rounded-full text-gray-300 px-6 py-1 text-sm md:text-xs font-inter hover:bg-gray-800 transition">
              Twitter
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center md:absolute md:top-2 md:right-6 text-gray-600 text-sm md:text-xs pt-6">
        © 2023 — Copyright
      </div>
    </footer>
  );
};

export default Footer;
