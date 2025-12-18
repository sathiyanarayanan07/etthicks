import Abouthead from '/src/Components/Aboutcomponents/Abouthead.jsx'
import Pack from '/src/Components/Aboutcomponents/Pack.jsx'
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
      {/* <Pack /> */}

      {/* <Abouthead /> */}

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