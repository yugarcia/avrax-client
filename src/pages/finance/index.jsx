import React from "react";
import PagesHeader from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Finances from "./components/Finances/index.jsx";
import Sumary from "./components/Sumary/index.jsx";
import Container from "../../components/Container/index.jsx";

const financePage = () => {
  return (
    <>
      <PagesHeader title="Finance" />
      <Container>
        <Sumary>
          Avrax Impact Windows and Doors®️ is increasing the customers Lifetime
          Value and making sure their assets keep their value over the time. We
          are offering 100% Project Finance providing flexible payment solutions
          for both Residential and Commercial. We have presence and helping
          customer from all over the state. We have a strong relation with the
          best ranked Finance Companies in the country with the lowest interest
          in the market. The process to apply and get approved is “EQT”: Easy,
          Quickly and Transparent. Financing impact windows and doors can offer
          several significant advantages for homeowners, including:
        </Sumary>
      </Container>
      <Finances />
      <Container>
        <Sumary>
          Overall, financing impact windows and doors can be a wise decision
          that provides both short-term and long-term benefits. The upfront cost
          may seem daunting, but the financial advantages and the overall value
          they add to your home make them a worthwhile investment.
        </Sumary>
      </Container>
      <Footer showFlotingMedia={true} />
    </>
  );
};

export default financePage;
