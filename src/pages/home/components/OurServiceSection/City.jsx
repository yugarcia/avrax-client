import React from "react";
import { Typography, Grow, Grid } from "@mui/material";
import { Box } from "./styled-components";
import useHover from "../../../../hooks/useHover.js";

const City = ({ cityName, isIntersecting, timeout, index }) => {
  const [isHover, boxRef] = useHover();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      if (isIntersecting) {
        setIsMounted(true);
      }
    }, timeout);
  }, [isIntersecting, timeout]);

  return (
    <Grid item xs={3} sm={1} md={1} key={index} >
      <Grow in={isMounted} timeout={1000}>
        <Box ref={boxRef} ishover={isHover}>
          <Typography
            variant="ourServiceText"
            color={isHover ? "primary.dark" : "primary.light"}
          >
            {cityName}
          </Typography>
        </Box>
      </Grow>
    </Grid>
  );
};

export default City;
