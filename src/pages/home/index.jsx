import Header from "./components/Header";
import { Gradient } from "./styled-components";
import PromotionsSection from "./components/PromotionsSection";
import AboutUsSection from "./components/AboutUsSection";

const HomePage = () => {
  return (
    <>
      <section style={{ height: "-webkit-fill-available" }}>
        <Header />
        <Gradient />
        <PromotionsSection />
      </section>
      <AboutUsSection />
    </>
  );
};

export default HomePage;
