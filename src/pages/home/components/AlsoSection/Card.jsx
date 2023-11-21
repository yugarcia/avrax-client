import React from "react";
import { Typography } from "@mui/material";
import { Card as CardM, CardContent, Border } from "./styled-components.jsx";
import useHover from "../../../../hooks/useHover.js";

const Card = ({ icon, title, backgroundColor, color }) => {
  const [isHover, boxRef] = useHover();

  return (
    <CardM sx={{ minWidth: 275 }} ref={boxRef}>
      <CardContent background={backgroundColor}>
        <Border borderColor={color} ishover={isHover}>
          {icon}
          <Typography variant="menu" color={color}>
            {title}
          </Typography>
        </Border>
      </CardContent>
    </CardM>
  );
};

export default Card;
