import React from "react";
import { Typography, Grid, Zoom } from "@mui/material";
import {
  Container,
  Image,
  FigCaption,
  IconContainer,
  Gradient,
} from "./styled-components.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import useHover from "../../../../hooks/useHover.js";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MOBILE_WIDTH = 600;
const TIME_OUT = 1300;

const Card = ({ imageSrc, title, index, onClick, isMounted }) => {
  const isTablet = useMediawidth(MOBILE_WIDTH);
  const [isHover, boxRef] = useHover();

  const variant = isTablet ? "imageTitle" : "cardTitle";
  return (
    <Grid item xs={2} sm={4} md={3} ref={boxRef}>
      <Zoom
        in={isMounted}
        style={{
          transitionDelay: isMounted ? `${index * 500}ms` : "0ms",
          width: "inherit",
        }}
        timeout={TIME_OUT}
      >
        <Container onClick={onClick}>
          <Image
            src={imageSrc}
            alt="image"
            width="100%"
            height="100%"
            isHover={isHover}
          />
          <div style={{ opacity: 0.2 }}></div>
          <FigCaption>
            <div
              style={{ padding: "4rem", display: "flex", alignItems: "start" }}
            >
              <Typography component="h2" variant={variant} color="#fff">
                {title}
              </Typography>
              <IconContainer>
                <ArrowForwardIcon />
              </IconContainer>
            </div>
            <Gradient isHover={isHover} />
          </FigCaption>
        </Container>
      </Zoom>
    </Grid>
  );
};

export default Card;
