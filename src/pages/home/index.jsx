import Header from "./components/Header";
import { Gradient } from "./styled-components";
import PromotionsSection from "./components/PromotionsSection";
import AboutUsSection from "./components/AboutUsSection";
import OurServiceSection from "./components/OurServiceSection";
import WhyChooseSection from "./components/WhyChooseSection";
import AlsoSection from "./components/AlsoSection";
import OurTeamSection from "./components/OurTeam";
import StartWithSection from "./components/StartWithSection";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";

const HomePage = () => {
  return (
    <>
      <section style={{ height: "-webkit-fill-available" }}>
        <Header />
        <Gradient />
        <PromotionsSection />
      </section>
      <AboutUsSection />
      <OurServiceSection />
      <WhyChooseSection />
      <AlsoSection />
      <OurTeamSection />
      <StartWithSection />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default HomePage;
