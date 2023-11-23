import React from "react";
import { Typography } from "@mui/material";
import {
  TextContent as Content,
  Paragraph,
  Img,
} from "./styled-components.jsx";

const InfoBox = ({ imageSrc, title, paragraph, cta, color }) => {
  return (
    <Content>
      <Img src={imageSrc} />
      <Typography variant="menu" color={color}>
        {title}
      </Typography>
      <Paragraph variant="paragraph" textAlign={"left"} color={color}>
        {paragraph}
      </Paragraph>
      <Typography variant="button" color={color}>
        {cta}
      </Typography>
    </Content>
  );
};

export default InfoBox;
