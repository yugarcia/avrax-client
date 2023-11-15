import HeaderImage from "./components/HeaderIImage";
import HotelImage from "./components/HotelImage";
import Header from "./components/Header";
import { Gradient } from "./styled-components";

const HomePage = () => {
  return (
    <>
      <section style={{ height: "800px" }}>
        <Header />
        <Gradient />
        <HeaderImage />
      </section>
      <HotelImage />
    </>
  );
};

export default HomePage;
