import React from "react";
import { Typography, Collapse } from "@mui/material";
import {
  Img,
  ImgContainer,
  CenterText,
  ParagraphWrapper,
} from "./styled-components.jsx";
import { useIntersect } from "../../../../../hooks/useIntersect.js";
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
  const isTablet = useMediawidth(MOBILE_WIDTH);
  const [boxRef, entry] = useIntersect({ threshold: 0.5 });
  const [checked, setChecked] = React.useState(false);
  const orientation = isTablet ? "horizontal" : "vertical";

  React.useEffect(() => {
    if (entry?.isIntersecting) {
      setChecked(true);
    }
  }, [entry]);

  return (
    <>
      <ImgContainer
        onClick={onClick}
        ref={boxRef}
        reverse={reverse}
        isMobile={!isTablet}
      >
        <Img src={imageSrc} title="green iguana" isMobile={!isTablet} />
        <Collapse
          orientation={orientation}
          in={checked}
          timeout={2000}
          sx={{ overflow: "hidden" }}
        >
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
        </Collapse>
      </ImgContainer>
    </>
  );
};

export default InfoBox;
