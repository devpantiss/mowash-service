import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import EarningsEstimator from "@/components/Home/EarningEstimator";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import Impact from "@/components/Home/Impact";
import ServiceSection from "@/components/Home/MowashEngineerCards";
import MowashPreneurCards from "@/components/Home/MowashPreneurCards";
import OurPartners from "@/components/Home/OurPartners";
import SDGBanner from "@/components/Home/SDGSection/SDGBanner";
import Testimonials from "@/components/Home/testimonials/Testimonials";
import WhyToBeBanner from "@/components/Home/WhyToBeBanner";
// import Globe from "@/components/Home/Globe";


const Home = () => {
  return (
    <>
      <div className="text-black">
        <Header />
        <Hero />
        <EarningsEstimator />
        <ServiceSection />
        <SDGBanner />
        <MowashPreneurCards />
        <WhyToBeBanner />
        <HowItWorks />
        <Testimonials />
        <Impact />
        {/* <Globe /> */}
        <OurPartners />
        <Footer />
      </div>
    </>
  );
};

export default Home;