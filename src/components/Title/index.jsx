import React from "react";
import { Typography } from "@mui/material";
import { useMediawidth } from "../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const Title = ({ color, textAlign, children }) => {
  const isMobile = useMediawidth(MOBILE_WIDTH);

  return (
    <Typography
      variant={isMobile ? "extraLargeTitle" : "largeTitle"}
      color={color}
      textAlign={textAlign}
    >
      {children}
    </Typography>
  );
};

export default Title;
