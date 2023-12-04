import React from "react";
import Container from "../../../../components/Container/index.jsx";
import { ParagraphWrapper } from "../../styled-components.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const Sumary = ({ children }) => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Container>
      <ParagraphWrapper
        paragraphColor="secondary.light"
        paragraphInitialColor="primary"
        isMobile={!isTablet}
      >
        {children}
      </ParagraphWrapper>
    </Container>
  );
};

export default Sumary;
