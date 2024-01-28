import React, { useEffect, useState } from "react";
import PagesHeader from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import MasonryImageList from "../../components/MasonryImageList/index.jsx";
import Providers from "../../components/Provider/index.jsx";
import TextSection from "../../components/TextSection/index.jsx";
import ExpertisesHeaderText from "../../components/ExpertisesHeaderText/index.jsx";
import backgroundImage from "../../assets/residential-page.jpg";
import env from "../../env.json";

const ResidentialPage = () => {
  const [itemData, setItemData] = useState([]);

  // Example using fetch
  const getImages = (carpeta) => {
    fetch(`${env.api}/get-images?carpeta=${carpeta}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItemData(data.imagenes);
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    getImages("Residential");
  }, []);

  const onFilterClick = (filter) => {
    if (filter) {
      getImages("Residential/" + filter);
    } else {
      getImages("Residential");
    }
  };

  return (
    <>
      <PagesHeader title="Residential" />
      <ExpertisesHeaderText backgroundImage={backgroundImage} sx={{ marginTop: "40px" }}>
        <TextSection
          paragraph="Avrax Impact Windows & Doors ® is a corporation headquartered in
        Miami with another workplace in Cape Coral, FL. Our mission is to
        make houses more secure with an incredible price. We believe every
        customer deserves to be treated with respect and understanding, and
        we are committed to providing the best possible service to our
        clients. We are devoted to providing our customers with the best
        products in the market and have a proven track record of success.
        Our products and services are designed to help our clients achieve
        their goals. We offer a wide range of products, including hurricane
        impact windows and doors. We are dedicated in providing astonishing
        customer service. Our team is available to answer your questions and
        help you to find the right solution for your needs. If you are
        looking for an excellent outcome, Avrax Impact Windows & Doors ® is
        the right choice for you. CONTACT US today to learn more about how
        we can help you “OPEN YOUR DOORS TO THE FUTURE”."
          paragraphColor="secondary.white"
          paragraphInitialColor="primary.light"
        />
      </ExpertisesHeaderText>
      <MasonryImageList items={itemData} onFilterClick={onFilterClick} />
      <Providers />
      <Footer showFlotingMedia={true} />
    </>
  );
};

export default ResidentialPage;
