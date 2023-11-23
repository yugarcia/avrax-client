import React from "react";
import { Typography } from "@mui/material";
import { ImgContainer, TextContent } from "./styled-components.jsx";
import useHover from "../../../../hooks/useHover.js";

const Img = ({ src, name, charge }) => {
  const [isHover, boxRef] = useHover();

  return (
    <ImgContainer ref={boxRef}>
      <img src={src} style={{ width: "300px" }} alt="our team" />
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
