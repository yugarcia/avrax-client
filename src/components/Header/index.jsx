import React from "react";
import { useIntersect } from "../../hooks/useIntersect.js";
import { useMediawidth } from "../../hooks/useMediawidth.js";
import FixedHeader from "./FixedHeader.jsx";
import PagesHeader from "../PagesHeader/index.jsx";
import FixedMenu from "../FixedMenu/index.jsx";

const WIDTH = 916;
const MAX_WIDTH = 1500;

const Header = ({ title }) => {
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const isDesktop = useMediawidth(WIDTH);

  return (
    <>
      <FixedHeader
        showNavbar={!isDesktop || entry.isIntersecting === false}
        isDesktop={isDesktop}
      >
        <FixedMenu />
      </FixedHeader>
      {isDesktop && <PagesHeader title={title} intersectRef={intersectRef} />}
    </>
  );
};

export default Header;
