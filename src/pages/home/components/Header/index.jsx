import React from "react";
import { HeaderWrapper } from "./styled-components.jsx";
import { useIntersect } from "../../../../hooks/useIntersect.js"
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import FixedHeader from "./FixedHeader.jsx";
import MenuContent from "./MenuContent.jsx";

const WIDTH = 916;

const Header = () => {
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const isDesktop = useMediawidth(WIDTH);

  return (
    <>
      <FixedHeader
        showNavbar={!isDesktop || entry.isIntersecting === false}
        isdesktop={isDesktop}
      />
      {isDesktop && (
        <HeaderWrapper>
          <MenuContent intersectRef={intersectRef} />
        </HeaderWrapper>
      )}
    </>
  );
};

export default Header;
