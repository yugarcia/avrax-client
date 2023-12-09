// CardComponent.js
import React from "react";
import { CardWrapper, TextContent, Contenido } from "../styled-components";
import { CardMedia, Typography } from "@mui/material";

const CardComponent = ({
  size,
  position,
  title,
  paragraph,
  image,
  isHighlighted,
}) => {
  const cardStyle = {
    width: size,
    height: size,
    transition: "all 0.3s ease-out",
    transform: position,
    zIndex: isHighlighted ? 100 : 1,
  };

  return (
    <CardWrapper style={cardStyle}>
      <CardMedia
        component="img"
        image={image}
        height="100%"
        width="100%"
      />

      <TextContent>
        <Typography variant="cardTitle" color="primary.dark" component="h2">
          {title}
        </Typography>
        {isHighlighted && (
          <Contenido isHover={isHighlighted}>
            <Typography
              variant="cardContent"
              component="div"
              textAlign="justify"
              color="secondary.white"
            >
              {paragraph}
            </Typography>
          </Contenido>
        )}
      </TextContent>
    </CardWrapper>
  );

  //   return <CardWrapper style={cardStyle}>Contenido de la tarjeta</CardWrapper>;
};

export default CardComponent;
