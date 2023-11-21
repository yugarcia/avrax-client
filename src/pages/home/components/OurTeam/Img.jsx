import React from "react";
import { Typography } from "@mui/material";
import { ImgContainer, TextContent } from "./styled-components.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import useHover from "../../../../hooks/useHover.js";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const Img = ({ src, name, charge }) => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);
  const [isHover, boxRef] = useHover();

  return (
    <ImgContainer ref={boxRef}>
      <img src={src} style={{ width: "300px" }} />
      {isHover && (
        <TextContent>
          <Typography variant="menu" color="primary">
            {name}
          </Typography>
          <Typography variant="subtitle" color="secondary.light">
           {charge}
          </Typography>
        </TextContent>
      )}
    </ImgContainer>
  );
};

export default Img;
