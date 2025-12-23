import LandingAnimation from '/src/Components/Aboutcomponents/LandingAnimation.jsx'
import CountSection from '/src/Components/Aboutcomponents/CountSection'
import OurStory from '/src/Components/Aboutcomponents/OurStory'
import AboutSection from '/src/Components/Aboutcomponents/AboutSection'
import Client from '/src/Components/Aboutcomponents/client.jsx'
import TeamSection from "/src/Components/HomeComponents/TeamSection.jsx"
import QuoteSection from "/src/Components/HomeComponents/QuoteSection.jsx";
import CTASection from "/src/Components/HomeComponents/CTASection.jsx";



const AboutPage = () => {
  return (
    <>
      <LandingAnimation />

      <CountSection />

      <OurStory />

      <AboutSection />

      <Client />

      <TeamSection />

      <QuoteSection />

      <CTASection />
    </>
  )
}

export default AboutPage