import React from "react";
import { Typography } from "@mui/material";
import { MenuContainer } from "./styled-components.jsx";
import { useMediawidth } from "../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const Menu = ({ title, items }) => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <MenuContainer isMobile={!isTablet}>
      <Typography variant="menu" color="primary.light">
        {title}
      </Typography>
      {items.map((item) => (
        <Typography variant="subMenu" color="secondary">
          {item}
        </Typography>
      ))}
    </MenuContainer>
  );
};

export default Menu;
