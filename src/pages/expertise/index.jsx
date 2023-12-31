import React from "react";
import PagesHeader from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Sumary from "./components/Sumary/index.jsx";
import Expertise from "./components/Expertise/index.jsx";

const ExpertisePage = () => {
  return (
    <>
      <PagesHeader title="Expertise" />
      <Sumary />
      <Expertise />
      <Footer showFlotingMedia={true}/>
    </>
  );
};

export default ExpertisePage;
