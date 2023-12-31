import React from "react";
import { useIntersect } from "../../../../hooks/useIntersect.js";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import FixedHeader from "./FixedHeader.jsx";
import Menu from "../../../../components/Menu/index.jsx";
import FixedMenu from "../../../../components/FixedMenu/index.jsx";

const WIDTH = 916;
const MAX_WIDTH = 1500;

const Header = () => {
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const isDesktop = useMediawidth(WIDTH);

  return (
    <>
      <FixedHeader
        showNavbar={!isDesktop || entry.isIntersecting === false}
        isDesktop={isDesktop}
      >
        {" "}
        <FixedMenu />
      </FixedHeader>
      {isDesktop && <Menu intersectRef={intersectRef} />}
    </>
  );
};

export default Header;
