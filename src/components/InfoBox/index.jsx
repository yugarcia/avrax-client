import React from "react";
import { Typography, CardActions } from "@mui/material";
import {
  TextContent as Content,
  Img,
  CardContainer,
} from "./styled-components.jsx";
import Paragraph from "../Paragraph/index.jsx";

const InfoBox = ({ imageSrc, title, paragraph, cta, color, onClick }) => {
  return (
    <CardContainer
      sx={{ backgroundColor: "transparent", cursor: "pointer" }}
      onClick={onClick}
    >
      <Img sx={{ height: 250 }} image={imageSrc} title="green iguana" />
      <Content>
        <Typography variant="menu" color={color}>
          {title}
        </Typography>
        <Paragraph paragraphColor={color} paragraphInitialColor={color}>
          {paragraph}
        </Paragraph>
      </Content>
      <CardActions>
        <Typography variant="button" color={color}>
          {cta}
        </Typography>
      </CardActions>
    </CardContainer>
  );
};

export default InfoBox;
