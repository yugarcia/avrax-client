import React from "react";
import { Link, Typography } from "@mui/material";
import { TypographyWrapper, MenuContainer } from "./styled-components.jsx";
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
        <div key={item.title}>
          {item.link ? (
            <Link href={item.link}>
              <TypographyWrapper variant="subMenu" color="secondary">
                {item.title}
              </TypographyWrapper>
            </Link>
          ) : (
            <Typography variant="subMenu" color="secondary">
              {item.title}
            </Typography>
          )}
        </div>
      ))}
    </MenuContainer>
  );
};

export default Menu;
