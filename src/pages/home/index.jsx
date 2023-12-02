import Header from "./components/Header";
import { Gradient } from "./styled-components";
import PromotionsSection from "./components/PromotionsSection";
import AboutUsSection from "./components/AboutUsSection";
import OurServiceSection from "./components/OurServiceSection copy";
import WhyChooseSection from "./components/WhyChooseSection";
import AlsoSection from "./components/AlsoSection copy";
import OurTeamSection from "./components/OurTeam";
import StartWithSection from "./components/StartWithSection";
import Footer from "../../components/Footer";
import SumarySection from "./components/SumarySection copy";

const HomePage = () => {
  return (
    <>
      <Header />
      <Gradient />
      <PromotionsSection />
      <AboutUsSection />
      <SumarySection />
      <OurServiceSection />
      <WhyChooseSection />
      <AlsoSection />
      <OurTeamSection />
      <StartWithSection />
      <Footer showFlotingMedia={true} />
    </>
  );
};

export default HomePage;
