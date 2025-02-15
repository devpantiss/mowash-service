import Footer from "@/components/common/Footer";
// import Header from "@/components/common/Header";
import Header2 from "@/components/common/Header2";
import EarningsEstimator from "@/components/Home/EarningEstimator";
import Hero from "@/components/Home/Hero";
// import HowItWorks from "@/components/Home/HowItWorks";
import Impact from "@/components/Home/Impact";
import ServiceSection from "@/components/Home/MowashEngineerCards";
import MowashPreneurCards from "@/components/Home/MowashPreneurCards";
// import MWEngineerSlider from "@/components/Home/MWEngineerSlider/MWEngineerSlider";
import OurPartners from "@/components/Home/OurPartners";
import ReachSection from "@/components/Home/Reach/ReactSection";
import SDGBanner from "@/components/Home/SDGSection/SDGBanner";
import Testimonials from "@/components/Home/testimonials/Testimonials";
import WhyToBeBanner from "@/components/Home/WhyToBeBanner";

// import Globe from "@/components/Home/Globe";


const Home = () => {
  return (
    <>
      <div className="text-black">
        {/* <Header2 /> */}
        <Hero />
        {/* <EarningsEstimator />
        <ServiceSection />
        <SDGBanner />
        <MowashPreneurCards />
        <WhyToBeBanner />
        <ReachSection /> */}
        {/* <HowItWorks /> */}
        {/* <Testimonials />
        <Impact />
        <OurPartners />
        <Footer /> */}
      </div>
    </>
  );
};

export default Home;