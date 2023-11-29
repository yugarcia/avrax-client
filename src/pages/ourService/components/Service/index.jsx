import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Fade,
} from "@mui/material";
import { useIntersect } from "../../../../hooks/useIntersect.js";

const Service = ({ image, title, index }) => {
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsMounted(true);
    }
  }, [entry]);

  return (
    <Grid item xs={2} sm={4} md={4} key={index} ref={intersectRef}>
      <Fade in={isMounted} timeout={1500}>
        <Card>
          <CardMedia component="img" image={image} alt="service" />
          <CardContent>
            <Typography variant="menu" color="primary">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Fade>
    </Grid>
  );
};

export default Service;
