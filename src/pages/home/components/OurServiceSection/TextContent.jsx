import React from "react";
import { Typography } from "@mui/material";
import {
  TextContent as Content,
  Paragraph,
  Img,
} from "./styled-components.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

const WIDTH = 1076;

const TextContent = ({ imageSrc, title, paragraph, cta }) => {
  const isDesktop = useMediawidth(WIDTH);

  return (
    <Content isDesktop={isDesktop}>
      <Img src={imageSrc} />
      <Typography variant="menu" color="primary.light">
        {title}
      </Typography>
      <Paragraph variant="paragraph" textAlign={"left"} color="primary.light">
        {paragraph}
      </Paragraph>
      <Typography variant="button" color="primary.light">
        {cta}
      </Typography>
    </Content>
  );
};

export default TextContent;
