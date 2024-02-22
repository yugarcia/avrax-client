import React, { useEffect, useState } from "react";
import { Grid, Typography, Fade } from "@mui/material";
import { ServicesInnerBlock, Image, IconImage,
  Contenido, } from "../../styled-components";
import { useIntersect } from "../../../../hooks/useIntersect.js";
import useHover from "../../../../hooks/useHover.js";

const Service = ({ image, title, icon, paragraph }) => {
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isHover, boxRef] = useHover();

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsMounted(true);
    }
  }, [entry]);

  return (
    <Grid item xs={2} sm={4} md={4} ref={intersectRef}>
      <Fade in={isMounted} timeout={1500}>
        <ServicesInnerBlock ref={boxRef}>
          <Image src={image} alt="service" />
          <IconImage isHover={isHover}>
            <img src={icon} alt="icon" style={{ color: "white" }} width={73} />
            <Typography variant="title" color="primary.light" component="h4">
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
          </IconImage>
        </ServicesInnerBlock>
      </Fade>
    </Grid>
  );
};

export default Service;
