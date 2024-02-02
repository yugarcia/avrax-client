import React from "react";
import MenuContent from "./MenuContent.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";
import { HeaderWrapper, Logo } from "./styled-components.jsx";
import logo from "../../assets/cropped-logo-1-204x149.png";
import { useMediawidth } from "../../hooks/useMediawidth.js";

const WIDTH = 916;

const Menu = ({ intersectRef, isFixed }) => {
  const isDesktop = useMediawidth(WIDTH);
  const logoSize = isFixed ? 50 : 100;

  return (
    <HeaderWrapper>
      <Logo
        src={logo}
        size={logoSize}
        isFixed={isFixed}
        onClick={() => (window.location.href = "/")}
      />

      {isDesktop ? (
        <MenuContent intersectRef={intersectRef} />
      ) : (
        <HamburgerMenu />
      )}
    </HeaderWrapper>
  );
};

export default Menu;
