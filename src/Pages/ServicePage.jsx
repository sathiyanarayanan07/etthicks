import { useParams } from "react-router-dom";
import Landing from "/src/Components/ServiceComponents/Landing";
import About from "/src/Components/ServiceComponents/About";
import OurWorks from "/src/Components/ServiceComponents/OurWorks";
import Review from "/src/Components/ServiceComponents/Review";
import WhyWorkWithUs from "/src/Components/ServiceComponents/WhyWorkWithUs";
import CTASection from "/src/Components/HomeComponents/CTASection.jsx";

function ServicePage() {
    const { slug } = useParams();

    return (
        <>
            <Landing slug={slug} />

            <About slug={slug} />

            <div className="bg-black">
                <OurWorks category={slug} />
            </div>
            
            <WhyWorkWithUs slug={slug} />

            <Review />

            <CTASection />
        </>
    );
}

export default ServicePage;
