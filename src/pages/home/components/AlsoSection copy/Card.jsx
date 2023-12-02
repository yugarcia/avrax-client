import React from "react";
import { Typography } from "@mui/material";
import {
  Card as CardM,
  CardContent,
  Border,
  LuzCercana,
  LuzLejana,
} from "./styled-components.jsx";
import useHover from "../../../../hooks/useHover.js";

const Card = ({ icon, title }) => {
  const [isHover, boxRef] = useHover();

  return (
    <CardM sx={{ minWidth: 275 }} ref={boxRef}>
      <CardContent>
        <LuzLejana>
          <LuzCercana>
            <Border borderColor="primary.main" ishover={isHover}>
              {icon}
            </Border>
          </LuzCercana>
        </LuzLejana>

        <Typography variant="alsoText" color="primary.main">
          {title}
        </Typography>
      </CardContent>
    </CardM>
  );
};

export default Card;
