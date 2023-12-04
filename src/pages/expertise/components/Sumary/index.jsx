import React from "react";
import Container from "../../../../components/Container/index.jsx";
import { ParagraphWrapper } from "./styled-components.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const Sumary = () => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Container>
      <ParagraphWrapper
        paragraphColor="secondary.light"
        paragraphInitialColor="primary"
        isMobile={!isTablet}
      >
        As a certified and accredited by the industry, Avrax Impact Windows and
        Doors®️ is staffed with experts and professional team who has a high
        level of skill and knowledge in the Impact Windows and Doors industry.
        We have the full capacity and ability to solve complex problems and our
        commitment to quality workmanship. We have several years of experience
        in the field, reason why we have encountered a wide range of challenges
        and have developed the skills to overcome and completed a large number
        of successful projects (Residentials and Commercials).
      </ParagraphWrapper>
    </Container>
  );
};

export default Sumary;
