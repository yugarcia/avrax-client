import React from "react";
import HeaderImage from "./HeaderImage/index.jsx";
import ContactForm from "../../../../components/ContactForm/index.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import {
  Section,
  Content,
  PromotionsContent,
  RegresiveContainer,
  ContactContainer,
} from "./styled-components.jsx";
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
        <Content isDesktop={isCollapsible}>
          <PromotionsContent>
            <RegresiveContainer isMobile={!isCollapsible}>
              <RegresiveCount />
            </RegresiveContainer>
            {isCollapsible && <PromotionsCollapsible />}
          </PromotionsContent>
          <ContactContainer>
            <ContactForm isDesktop={isCollapsible} />
          </ContactContainer>
        </Content>
      </Section>
      {!isCollapsible && <PromotionsCard />}
    </>
  );
};

export default PromotionsSection;
