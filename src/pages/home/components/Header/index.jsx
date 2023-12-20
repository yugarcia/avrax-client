import React from "react";
import { useIntersect } from "../../../../hooks/useIntersect.js";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import FixedHeader from "./FixedHeader.jsx";
import Menu from "../../../../components/Menu/index.jsx";
import Button from "../../../../components/Button/index.jsx";
import HurricaneSeason from "./HurricaneSeason/index.jsx";

const WIDTH = 916;
const MAX_WIDTH = 1500;

const Header = () => {
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const isDesktop = useMediawidth(WIDTH);
  const isMaxWidth = useMediawidth(MAX_WIDTH);

  return (
    <>
      <FixedHeader
        showNavbar={!isDesktop || entry.isIntersecting === false}
        isDesktop={isDesktop}
      >
        {" "}
        <Menu isFixed={true} />
        {isDesktop && <HurricaneSeason />}
        {isMaxWidth && (
          <Button
            text="BOOK APP"
            mode="NIGHT"
            onClick={() => (window.location.href = `/contact-us`)}
            sx={{ marginRight: "50px", zIndex: 1000 }}
          />
        )}
      </FixedHeader>
      {isDesktop && <Menu intersectRef={intersectRef} />}
    </>
  );
};

export default Header;
