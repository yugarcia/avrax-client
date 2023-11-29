import React from "react";
import { Paragraph as ParagraphM, Image } from "./styled-components.jsx";

import { useMediawidth } from "../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const Paragraph = ({
  imageSrc,
  paragraph,
  paragraphColor,
  paragraphInitialColor,
}) => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <ParagraphM
      variant="paragraph"
      textAlign={"left"}
      color={paragraphColor}
      initialcolor={paragraphInitialColor}
    >
      {imageSrc && <Image src={imageSrc} isMobile={!isTablet} />}
      {paragraph}
    </ParagraphM>
  );
};

export default Paragraph;
