import { useEffect, useRef } from 'react'

// Map slugs → Display titles
const SERVICE_TITLES = {
  "content-creation": "Content Creation",
  "social-media-management": "Social Media Management",
  "lead-generation": "lead generation",
  "brand-storytelling": "brand storytelling",
  "seo": "SEO Optimization",
  "tv-commercials": "tv commercials",
  "influencer-marketing": "influencer marketing",
  "product-photography": "product photography",
  "personal-branding": "Personal Branding",
  "digital-marketing": "Digital Marketing"
};

// Map slugs → Dynamic text for ENGAGING and STORIES
const SERVICE_HERO_TEXT = {
  "content-creation": {
    top: "ENGAGING",
    bottom: "STORIES"
  },
  "social-media-management": {
    top: "STRATEGIC ",
    bottom: "PRESENCE"
  },
  "lead-generation": {
    top: "QUALIFED ",
    bottom: "PROSPECTS"
  },
  "product-photography": {
    top: "VISUAL ",
    bottom: "APPEAL"
  },
  "tv-commercials": {
    top: "CAPTIVATING",
    bottom: "BROADCASTS"
  },
  "brand-storytelling": {
    top: "IMPACT",
    bottom: "PARTNERSHIP"
  },
  "influencer-marketing": {
    top: "INFLUENENCE",
    bottom: "AMPLIFIED"
  },
  "personal-branding": {
    top: "BRAND",
    bottom: "YOU"
  },
  "digital-marketing": {
    top: "AUTHENTIC",
    bottom: "IDENTITY"
  },
  // add more slugs here...
};

const Landing = ({ slug }) => {
  const whiteLayerRef = useRef(null)
  const displayTitle = SERVICE_TITLES[slug] || "Our Services";
  const heroText = SERVICE_HERO_TEXT[slug];

  useEffect(() => {
    if (whiteLayerRef.current) {
      whiteLayerRef.current.classList.add('animate-paddingGrow')
    }
  }, [])

  return (
    <>
      <div className="relative min-h-screen bg-black flex justify-center items-center overflow-hidden">
        {/* Black layer (always full height, behind white layer) */}
        <div className="absolute top-1/4 left-0 w-full min-h-[50%] bg-black text-white flex flex-col justify-center items-center gap-18  lg:gap-24 xl:gap-36 z-30 lg:mt-1 font-worksans">
          <h1 className="animate-[top-text_1.5s_ease-out_0.5s_forwards] block text-7xl md:text-9xl lg:scale-140 xl:scale-170 opacity-0 font-bold -mt-2">{heroText.top}</h1>
          <h1 className="animate-[bottom-text_1.5s_ease-out_0.5s_forwards] text-7xl md:text-9xl lg:scale-140 xl:scale-170 opacity-0 font-bold md:-mt-14">{heroText.bottom}</h1>
        </div>

        {/* White layer (padding animates from py-0 to py-50) */}
        <div
          ref={whiteLayerRef}
          className="absolute top-1/2 -translate-y-1/2 left-0 w-full bg-[#009BB5] flex flex-col justify-center items-center gap-18 lg:gap-24 xl:gap-36 z-40 py-0  animate-[paddingGrow_1.5s_ease-out_1s_forwards] overflow-hidden lg:mt-2 font-worksans"
        >
          <h1 className="animate-[top-text_1.5s_ease-out_0.5s_forwards] block text-7xl md:text-9xl lg:scale-140 xl:scale-170 -mt-52 text-[#FFAE00] font-bold ">{heroText.top}</h1>
          <h1 className="animate-[bottom-text_1.5s_ease-out_0.5s_forwards] text-7xl md:text-9xl lg:scale-140 xl:scale-170 -mb-50 md:-mt-14 text-[#FFAE00] font-bold">{heroText.bottom}</h1>
        </div>

        <div className="absolute top-1/2 left-0 w-full text-white flex flex-col justify-center items-center -mt-5 md:-mt-7 xl:-mt-10 z-50">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-normal italic whitespace-nowrap opacity-0 animate-[center-text_1.5s_ease-out_1.8s_forwards]  font-waterfall">{displayTitle}</h1>
        </div>
      </div>
    </>
  )
}

export default Landing