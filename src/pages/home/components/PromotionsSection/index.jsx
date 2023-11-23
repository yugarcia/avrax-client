import React from "react";
import HeaderImage from "./HeaderImage/index.jsx";
import ContactForm from "./ContactForm/index.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

import { Section } from "./styled-components.jsx";
import PromotionsCollapsible from "./PromotionsCollapsible/index.jsx";
import PromotionsCard from "./PromotionsCard/index.jsx";
import { useBottomVisible } from "../../../../hooks/useBottomVisible.js";
import RegresiveCount from "../../../../components/RegresiveCount/index.jsx";

const WIDTH = 520;
const PROMOTIONS_WIDTH = 838;

const PromotionsSection = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isCollapsible = useMediawidth(PROMOTIONS_WIDTH);
  const { isVisible, targetRef } = useBottomVisible({ threshold: 0.5 });
  const [promotionCardMounted, setPromotionCardMounted] = React.useState(false);

  React.useEffect(() => {
    if (isVisible) {
      setPromotionCardMounted(true);
    }
  }, [isVisible]);

  return (
    <>
      <Section center={!isCollapsible} ref={targetRef}>
        <HeaderImage />
        <RegresiveCount isMobile={!isCollapsible} />
        <ContactForm isDesktop={isCollapsible} />
        {isCollapsible && <PromotionsCollapsible />}
      </Section>
      {!isCollapsible && <PromotionsCard isMounted={promotionCardMounted} />}
    </>
  );
};

export default PromotionsSection;
