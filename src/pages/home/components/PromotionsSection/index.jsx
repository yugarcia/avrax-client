import React from "react";
import HeaderImage from "./HeaderImage/index.jsx";
import ContactForm from "./ContactForm/index.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

import { Section } from "./styled-components.jsx";
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
        <ContactForm isDesktop={isCollapsible} />
        {isCollapsible && <PromotionsCollapsible />}
      </Section>
      {!isCollapsible && <PromotionsCard />}
    </>
  );
};

export default PromotionsSection;
