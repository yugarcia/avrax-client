import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Card as CardM,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Slide,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useIntersect } from "../../../../hooks/useIntersect.js";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Card = ({ title, paragraph, image, index, direction }) => {
  const [expanded, setExpanded] = useState(false);
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const [isMounted, setIsMounted] = useState(false);

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
        <CardM>
          <CardHeader
            title={
              <Typography variant="menu" color="primary">
                {title}
              </Typography>
            }
          />
          <CardMedia component="img" image={image} />
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              color="primary"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography
                variant="cardContent"
                component="div"
                textAlign="justify"
              >
                {paragraph}
              </Typography>
            </CardContent>
          </Collapse>
        </CardM>
      </Slide>
    </Grid>
  );
};

export default Card;
