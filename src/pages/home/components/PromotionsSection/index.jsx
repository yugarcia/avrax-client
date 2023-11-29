import React from "react";
import HeaderImage from "./HeaderImage/index.jsx";
import ContactForm from "../../../../components/ContactForm/index.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import { Section, ContactContainer } from "./styled-components.jsx";
import PromotionsCollapsible from "./PromotionsCollapsible/index.jsx";
import PromotionsCard from "./PromotionsCard/index.jsx";
import RegresiveCount from "../../../../components/RegresiveCount/index.jsx";

const PROMOTIONS_WIDTH = 838;

const PromotionsSection = () => {
  const isCollapsible = useMediawidth(PROMOTIONS_WIDTH);

  return (
    <>
      <Section center={!isCollapsible}>
        <HeaderImage />
        <RegresiveCount isMobile={!isCollapsible} />
        <ContactContainer isDesktop={isCollapsible}>
          <ContactForm isDesktop={isCollapsible} />
        </ContactContainer>
        {isCollapsible && <PromotionsCollapsible />}
      </Section>
      {!isCollapsible && <PromotionsCard />}
    </>
  );
};

export default PromotionsSection;
