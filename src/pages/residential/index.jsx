import React from "react";
import PagesHeader from "../../components/PagesHeader/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import MasonryImageList from "./components/MasonryImageList/index.jsx";
import Sumary from "./components/Sumary/index.jsx";
import Providers from "./components/Provider/index.jsx";

const ResidentialPage = () => {
  return (
    <>
      <PagesHeader title="Residential" />
      <Sumary />
      <MasonryImageList />
      <Providers />
      <Footer />
    </>
  );
};

export default ResidentialPage;
