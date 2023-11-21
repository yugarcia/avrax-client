import Header from "./components/Header";
import { Gradient } from "./styled-components";
import PromotionsSection from "./components/PromotionsSection";
import AboutUsSection from "./components/AboutUsSection";
import OurServiceSection from "./components/OurServiceSection";
import WhyChooseSection from "./components/WhyChooseSection";
import AlsoSection from "./components/AlsoSection";

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
    </>
  );
};

export default HomePage;
