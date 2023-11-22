import React from "react";

import { IconContainer } from "./styled-components.jsx";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useHover from "../../../../hooks/useHover.js";
import { theme } from "../../../../theme.js";

const Icon = ({ icon }) => {
  const [isHover, boxRef] = useHover();
  const color = isHover
    ? theme.palette.secondary.main
    : theme.palette.primary.main;

  const CustomIcon = ({ icon, color }) => {
    switch (icon) {
      case "facebook":
        return <FacebookIcon sx={{ color: color }} />;
      case "twitter":
        return <TwitterIcon sx={{ color: color }} />;
      case "instagram":
        return <InstagramIcon sx={{ color: color }} />;
      case "linkedin":
        return <LinkedInIcon sx={{ color: color }} />;
      default:
        return <FacebookIcon sx={{ color: color }} />;
    }
  };
  return (
    <IconContainer ref={boxRef} isHover={isHover}>
      <CustomIcon icon={icon} color={color} />
    </IconContainer>
  );
};

export default Icon;
