import React from "react";
import { Typography } from "@mui/material";
import { FixedHeaderWrapper, Title, MenuContent } from "./styled-components.jsx";

import FixedMenu from "../FixedMenu/index.jsx";
import backgroundImage from "../../assets/semi.png";
import Menu from "../Menu/index.jsx";
import { useMediawidth } from "../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const PagesHeader = ({ title, intersectRef }) => {
  const isMobile = useMediawidth(MOBILE_WIDTH);

  return (
    <FixedHeaderWrapper backgroundImage={backgroundImage}>
      <MenuContent>
        <FixedMenu intersectRef={intersectRef} />
      </MenuContent>
      <Title>
        <Typography
          variant={isMobile ? "extraLargeTitle" : "largeTitle"}
          color="primary.light"
        >
          {title}
        </Typography>
      </Title>
    </FixedHeaderWrapper>
  );
};

export default PagesHeader;
