import React from "react";
import { Typography } from "@mui/material";
import { SumaryBox as Box } from "./styled-components";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const SumaryBox = ({ title, subtitle, background, color }) => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Box isdesktop={isDesktop} istablet={isTablet} background={background}>
      <Typography variant="title" color={color}>
        {title}
      </Typography>
      <Typography variant="menu" color={color}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default SumaryBox;
