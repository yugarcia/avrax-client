import React from "react";
import HeaderImage from "./HeaderImage/index.jsx";
import ContactForm from "./ContactForm/index.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

import { Section } from "./styled-components.jsx";

const WIDTH = 520;

const PromotionsSection = () => {
  const isDesktop = useMediawidth(WIDTH);

  return (
    <Section center={!isDesktop}>
      <HeaderImage />
      <ContactForm isDesktop={isDesktop} />
    </Section>
  );
};

export default PromotionsSection;
