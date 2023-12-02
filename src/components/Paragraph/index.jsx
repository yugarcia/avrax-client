import React from "react";
import {
  Paragraph as ParagraphM,
  Image,
  ImgContainer,
  Frame,
} from "./styled-components.jsx";

import { useMediawidth } from "../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const Paragraph = ({
  imageSrc,
  paragraphColor,
  paragraphInitialColor,
  className,
  children,
}) => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <ParagraphM
      variant="paragraph"
      textAlign={"left"}
      color={paragraphColor}
      initialcolor={paragraphInitialColor}
      component="div"
      className={className}
    >
      {imageSrc && (
        <ImgContainer>
          <Image src={imageSrc} isMobile={!isTablet} />
          <Frame />
        </ImgContainer>
      )}
      {children}
    </ParagraphM>
  );
};

export default Paragraph;
