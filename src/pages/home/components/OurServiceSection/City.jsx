import React from "react";
import { Typography } from "@mui/material";
import { Box } from "./styled-components";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

const WIDTH = 1076;

const City = ({ cityName }) => {
  const isDesktop = useMediawidth(WIDTH);

  return (
    <Box isDesktop={isDesktop}>
      <Typography variant="menu" color="primary.light">
        {cityName}
      </Typography>
    </Box>
  );
};

export default City;
