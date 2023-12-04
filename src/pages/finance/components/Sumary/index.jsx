import React from "react";
import { ParagraphWrapper } from "../../styled-components.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const Sumary = ({ children }) => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <ParagraphWrapper
      paragraphColor="secondary.light"
      paragraphInitialColor="primary"
      isMobile={!isTablet}
    >
      {children}
    </ParagraphWrapper>
  );
};

export default Sumary;
