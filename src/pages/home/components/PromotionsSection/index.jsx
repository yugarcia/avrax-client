import React from "react";
import HeaderImage from "./HeaderImage/index.jsx";
import ContactForm from "./ContactForm/index.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

import { Section } from "./styled-components.jsx";
import PromotionsCollapsible from "./PromotionsCollapsible/index.jsx";
import PromotionsCard from "./PromotionsCard/index.jsx";
import { useBottomVisible } from "../../../../hooks/useBottomVisible.js";

const WIDTH = 520;
const PROMOTIONS_WIDTH = 838;

const PromotionsSection = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isCollapsible = useMediawidth(PROMOTIONS_WIDTH);
  const { isVisible, targetRef } = useBottomVisible({ threshold: 0.5 });

  return (
    <>
      <Section center={!isDesktop} ref={targetRef}>
        <HeaderImage />
        <ContactForm isDesktop={isDesktop} />
        {isCollapsible && <PromotionsCollapsible />}
      </Section>
      {!isCollapsible && <PromotionsCard isIntersect={!isVisible} />}
    </>
  );
};

export default PromotionsSection;
