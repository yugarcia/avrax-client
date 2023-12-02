import React from "react";
import { Typography } from "@mui/material";
import {
  Img,
  ImgContainer,
  DarkCape,
  CenterText,
  ParagraphWrapper,
} from "./styled-components.jsx";
import useHover from "../../../../../hooks/useHover.js";
import { useMediawidth } from "../../../../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const InfoBox = ({
  imageSrc,
  title,
  paragraph,
  cta,
  color,
  onClick,
  reverse,
}) => {
  const [isHover, boxRef] = useHover();
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <>
      <ImgContainer
        onClick={onClick}
        ref={boxRef}
        reverse={reverse}
        isMobile={!isTablet}
      >
        <Img src={imageSrc} title="green iguana" isMobile={!isTablet} />
        <CenterText isMobile={!isTablet}>
          <Typography variant="ourServiceText" color={color}>
            {title}
          </Typography>
          <ParagraphWrapper
            paragraphColor="secondary"
            paragraphInitialColor={color}
          >
            {paragraph}
          </ParagraphWrapper>
          <Typography variant="button" color={color}>
            {cta}
          </Typography>
        </CenterText>
      </ImgContainer>
    </>
  );
};

export default InfoBox;
