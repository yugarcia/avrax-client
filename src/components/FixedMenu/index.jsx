import React from "react";
import { useMediawidth } from "../../hooks/useMediawidth.js";
import Menu from "../Menu/index.jsx";
import Button from "../Button/index.jsx";
import HurricaneSeason from "./HurricaneSeason/index.jsx";

const WIDTH = 916;
const MAX_WIDTH = 1500;

const FixedMenu = ({intersectRef}) => {
  const isDesktop = useMediawidth(WIDTH);
  const isMaxWidth = useMediawidth(MAX_WIDTH);

  return (
    <>
      <Menu isFixed={true} intersectRef={intersectRef} />
      {isDesktop && <HurricaneSeason />}
      {isMaxWidth && (
        <Button
          text="BOOK APP"
          mode="NIGHT"
          onClick={() => (window.location.href = `/contact-us`)}
          sx={{ marginRight: "50px", zIndex: 1000 }}
        />
      )}
    </>
  );
};

export default FixedMenu;
