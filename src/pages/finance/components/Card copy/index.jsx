import React, { useState, useEffect } from "react";
import { Grid, CardMedia, Typography, Slide } from "@mui/material";
import {
  BlogSection,
  TextContent,
  Contenido,
} from "../../styled-components.jsx";
import { useIntersect } from "../../../../hooks/useIntersect.js";
import useHover from "../../../../hooks/useHover.js";

const Card = ({ title, paragraph, image, index, direction }) => {
  const [expanded, setExpanded] = useState(false);
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isHover, boxRef] = useHover();

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsMounted(true);
    }
  }, [entry]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={2} sm={4} md={4} key={index} ref={intersectRef}>
      <Slide
        in={isMounted}
        container={intersectRef.current}
        timeout={1500}
        direction={direction}
      >
        <BlogSection ref={boxRef}>
          <CardMedia
            component="img"
            image={image}
            height="100%"
            sx={{ minHeight: "500px" }}
          />

          <TextContent>
            <Typography
              variant="cardTitle"
              color="primary.light"
              component="h2"
            >
              {title}
            </Typography>
            <Contenido isHover={isHover}>
              <Typography
                variant="cardContent"
                component="div"
                textAlign="justify"
                color="secondary.white"
              >
                {paragraph}
              </Typography>
            </Contenido>
          </TextContent>
        </BlogSection>
      </Slide>
    </Grid>
  );
};

export default Card;
