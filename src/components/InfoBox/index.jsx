import React from "react";
import {
  Typography,
  CardActions,
} from "@mui/material";
import {
  TextContent as Content,
  Paragraph,
  Img,
  CardContainer,
} from "./styled-components.jsx";

const InfoBox = ({ imageSrc, title, paragraph, cta, color, onClick }) => {
  return (
    <CardContainer sx={{ backgroundColor: "transparent" }} onClick={onClick}>
      <Img sx={{ height: 250 }} image={imageSrc} title="green iguana" />
      <Content>
        <Typography variant="menu" color={color}>
          {title}
        </Typography>
        <Paragraph variant="paragraph" textAlign={"left"} color={color}>
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
