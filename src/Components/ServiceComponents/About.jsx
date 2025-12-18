import des from "/src/assets/servone/Descriptions.png";
import dig from "/src/assets/about/Digital Marketingg.png"
// ---- Dynamic Content by Slug ----
const ENGAG_CONTENT = {
    "content-creation": {
        heading: "ENGAGING CONTENT THAT",
        highlight: "ELEVATES YOUR BRAND",
        description: `
        In today's digital world, high-quality content isn't optional—it's the engine that drives awareness, trust, and growth. Our Content Creation Services help your brand communicate with clarity, creativity, and impact. Whether you need compelling visuals, messaging, or storytelling, we bring your ideas to life with content that resonates.
        `,
        background: des,
    },

    "digital-marketing": {
        heading: "Grow Faster With ",
        highlight: " Data-Driven Digital Marketing",
        description: `
       Your customers are online—and your brand should be too. Our Digital Marketing Services help you reach the right audience, increase visibility, and convert clicks into loyal customers. With a strategic, results-focused approach, we blend creativity and analytics to elevate your brand in a competitive digital landscape..
    `,
        background: dig,
    },

    "brand-storytelling": {
        heading: "Transform Your Brand Into a .",
        highlight: "Story People Care About.",
        description: `
       Great brands don’t just sell products—they inspire, connect, and stay remembered. Our Brand Storytelling service helps you uncover the heart of your business and communicate it in a way that builds trust, emotion, and loyalty. We craft stories that spark connection and turn audiences into lifelong advocates.
        `,
        background: des,
    },
    "social-media-management": {
        heading: "Grow Your Presence. Engage Your Audience.",
        highlight: " Strengthen Your Brand.",
        description: `
      Social media is one of the most powerful ways to reach your audience—but managing it effectively takes strategy, creativity, and time. Our Social Media Management service handles everything for you, so your brand shows up consistently, authentically, and with purpose.
        `,
        background: des,
    },
    "lead-generation": {
        heading: "Fuel Your Sales Pipeline With .",
        highlight: " High-Quality Leads.",
        description: `
     Your business can’t grow without a steady flow of potential customers. Our Lead Generation services are designed to attract, engage, and convert the right prospects—so your sales team spends less time chasing and more time closing.
        `,
        background: des,
    },
    "product-photography": {
        heading: " With Stunning, Professional Visuals.",
        highlight: " Showcase Your Products.",
        description: `
   Your products deserve to be seen in the best light—literally. Our Product Photography services help you capture high-quality, eye-catching visuals that highlight the details, craftsmanship, and value of your brand. Whether for e-commerce, social media, ads, or print, we deliver images that elevate perception and drive sales.
        `,
        background: des,
    },
};

// ---- Default fallback if slug not found ----
const DEFAULT_CONTENT = {
    heading: "PREMIUM SERVICES THAT",
    highlight: "TRANSFORM YOUR BUSINESS",
    description: `
    Explore our specialized services designed to elevate your brand with creativity,
    strategy, and innovation—tailored for business growth.
    `,
    background: des,
};

function Engag({ slug }) {
    const content = ENGAG_CONTENT[slug] || DEFAULT_CONTENT;

    return (
        <div
            style={{
                backgroundImage: `url(${content.background})`,
                // backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
            }}
            className="flex items-center py-40 sm:py-16 md:py-20 lg:py-0 md:min-h-screen bg-cover bg-bottom-right "
        >
            <div className=" px-6 md:px-8">
                <h1
                    className="text-white text-center md:text-start leading-tight tracking-wider mb-4 sm:mb-5 md:mb-6 text-[28px] md:text-4xl lg:text-5xl"
                    style={{
                        fontFamily: "'Work Sans', sans-serif",
                        fontWeight: 500,
                    }}
                >
                    {content.heading}{" "} <br className="hidden xl:block" />
                    <span style={{ color: "#FFB414" }}>{content.highlight}</span>
                </h1>

                <p
                    className="text-white text-center md:text-start leading-relaxed max-w-4xl tracking-wider text-xl md:text-lg xl:text-xl whitespace-pre-line"
                    style={{
                        fontFamily: "'Onset', sans-serif",
                        fontWeight: 400,
                    }}
                >
                    {content.description}
                </p>
            </div>
        </div>
    );
}

export default Engag;
