import Header from "./components/Header";
import { Gradient } from "./styled-components";
import PromotionsSection from "./components/PromotionsSection";
import AboutUsSection from "./components/AboutUsSection";
import OurServiceSection from "./components/OurServiceSection";

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
    </>
  );
};

export default HomePage;
