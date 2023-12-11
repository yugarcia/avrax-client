// CardComponent.js
import React, { useEffect } from "react";
import { CardWrapper, TextContent, Contenido } from "../styled-components";
import { CardMedia, Typography } from "@mui/material";
import { useMediawidth } from "../../../hooks/useMediawidth";

const MOBILE_WIDTH = 600;

const CardComponent = ({
  size,
  position,
  title,
  paragraph,
  image,
  isHighlighted,
}) => {
  const isTablet = useMediawidth(MOBILE_WIDTH);
  const [titleVariant, setTitleVariant] = React.useState("cardTitle");
  const [paragraphVariant, setParagraphVariant] = React.useState("cardContent");

  const cardStyle = {
    width: size,
    height: size,
    transition: "all 0.3s ease-out",
    transform: position,
    zIndex: isHighlighted ? 100 : 1,
  };

  useEffect(() => {
    setTitleVariant(!isTablet ? "cardTitleMobile" : "cardTitle");
    setParagraphVariant(!isTablet ? "cardContentMobile" : "cardContent");
  }, [isTablet]);

  return (
    <CardWrapper style={cardStyle} isHighlighted={isHighlighted}>
      <CardMedia component="img" image={image} height="100%" width="100%" />

      <TextContent>
        <Typography variant={titleVariant} color="primary.dark" component="h2">
          {title}
        </Typography>
        {isHighlighted && (
          <Contenido isHover={isHighlighted}>
            <Typography
              variant={paragraphVariant}
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
