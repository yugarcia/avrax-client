import React from "react";
import { Typography } from "@mui/material";
import { Box, CitiesContainer } from "./styled-components";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

const WIDTH = 1076;

const Cities = () => {
  const isDesktop = useMediawidth(WIDTH);

  return (
    <CitiesContainer>
      <Box isDesktop={isDesktop}>
        <Typography variant="menu" color="primary">
          Miami Dade
        </Typography>
      </Box>
      <Box isDesktop={isDesktop}>
        <Typography variant="menu" color="primary">
          Broward
        </Typography>
      </Box>
      <Box isDesktop={isDesktop}>
        {" "}
        <Typography variant="menu" color="primary">
          West Palm Beach
        </Typography>
      </Box>
      <Box isDesktop={isDesktop}>
        {" "}
        <Typography variant="menu" color="primary">
          Monroe
        </Typography>
      </Box>
      <Box isDesktop={isDesktop}>
        {" "}
        <Typography variant="menu" color="primary">
          Lee
        </Typography>
      </Box>
    </CitiesContainer>
  );
};

export default Cities;
