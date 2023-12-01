import React from "react";
import { Typography } from "@mui/material";
import { Content, Img, CardContainer, CTA } from "./styled-components.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const Card = ({ imageSrc, title, cta, onClick }) => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  const variant = isTablet ? "imageTitle" : "cardTitle";
  return (
    <CardContainer sx={{ backgroundColor: "transparent", cursor: "pointer" }}>
      <Img sx={{ height: 250 }} src={imageSrc} />
      <Content>
        <Typography variant={variant} color="secondary.main">
          {title}
        </Typography>
        <CTA variant="button" onClick={onClick}>
          {cta}
        </CTA>
      </Content>
    </CardContainer>
  );
};

export default Card;
