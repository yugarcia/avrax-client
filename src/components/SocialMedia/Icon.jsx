import React from "react";

import { IconContainer } from "./styled-components.jsx";

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import useHover from "../../hooks/useHover.js";
import { theme } from "../../theme.js";

import { SvgIcon } from "@mui/material";

const Icon = ({ icon, link }) => {
  const [isHover, boxRef] = useHover();
  
  const color = isHover
    ? theme.palette.secondary.main
    : theme.palette.primary.main;

  const CustomIcon = ({ icon, color }) => {
    switch (icon) {
      case "facebook":
        return (
          <FacebookIcon sx={{ color: color }} width="24px" height="24px" />
        );
      case "twitter":
        return (
          <SvgIcon
            sx={{ width: "16px", height: "16px", fill: "currentColor" }}
            viewBox="0 0 16 16"
          >
            <path
              d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
              fill={color}
            />
          </SvgIcon>
        );
      case "instagram":
        return (
          <InstagramIcon sx={{ color: color }} width="24px" height="24px" />
        );
      case "youtube":
        return <YouTubeIcon sx={{ color: color }} width="24px" height="24px" />;
      default:
        return (
          <FacebookIcon sx={{ color: color }} width="24px" height="24px" />
        );
    }
  };
  return (
    <IconContainer ref={boxRef} ishover={isHover.toString()} href={link} target="_blank">
      <CustomIcon icon={icon} color={color} />
    </IconContainer>
  );
};

export default Icon;
