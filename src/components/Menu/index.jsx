import React from "react";
import MenuContent from "./MenuContent.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";
import { HeaderWrapper, Logo } from "./styled-components.jsx";

import { useMediawidth } from "../../hooks/useMediawidth.js";

const WIDTH = 916;

const Menu = ({ intersectRef }) => {
  const isDesktop = useMediawidth(WIDTH);

  return (
    <HeaderWrapper>
      <Logo src="https://avraxwindows.com/wp-content/uploads/2023/07/cropped-logo-1-204x149.png" />

      {isDesktop ? (
        <MenuContent intersectRef={intersectRef} />
      ) : (
        <HamburgerMenu />
      )}
    </HeaderWrapper>
  );
};

export default Menu;
