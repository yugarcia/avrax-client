import React from "react";
import { Typography, Grow } from "@mui/material";
import { Box } from "./styled-components";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import useHover from "../../../../hooks/useHover.js";

const WIDTH = 1076;

const City = ({ cityName, isIntersecting, timeout }) => {
  const isDesktop = useMediawidth(WIDTH);
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
    <Grow in={isMounted} timeout={1000}>
      <Box isdesktop={isDesktop} ref={boxRef} ishover={isHover}>
        <Typography
          variant="menu"
          color={isHover ? "primary" : "primary.light"}
        >
          {cityName}
        </Typography>
      </Box>
    </Grow>
  );
};

export default City;
