import React from "react";
import { Typography } from "@mui/material";
import { Box } from "./styled-components";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import useHover from "../../../../hooks/useHover.js";

const WIDTH = 1076;

const City = ({ cityName }) => {
  const isDesktop = useMediawidth(WIDTH);
  const [isHover, boxRef] = useHover();

  return (
    <Box isDesktop={isDesktop} ref={boxRef} isHover={isHover}>
      <Typography variant="menu" color={isHover ? "primary" : "primary.light"}>
        {cityName}
      </Typography>
    </Box>
  );
};

export default City;
