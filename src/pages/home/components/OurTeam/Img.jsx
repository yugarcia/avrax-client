import React from "react";
import { Typography } from "@mui/material";
import { ImgContainer, TextContent } from "./styled-components.jsx";
import useHover from "../../../../hooks/useHover.js";

const Img = ({ src, name, charge }) => {
  const [isHover, boxRef] = useHover();

  return (
    <ImgContainer ref={boxRef}>
      <img src={src} style={{ width: "140px" }} alt="our team" />
      <Typography component="h5" variant="menu" color="primary">
        {name}
      </Typography>

      <Typography component="small" variant="subtitle" color="secondary.light">
        {charge}
      </Typography>
      <Typography
        component="p"
        variant="paragraph"
        color="secondary.light"
        sx={{ lineHeight: 1.5 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        distinctio, odio, eligendi suscipit reprehenderit atque.
      </Typography>
      {/* {isHover && (
          <TextContent>
            <Typography variant="menu" color="primary">
              {name}
            </Typography>
            <Typography variant="subtitle" color="secondary.light">
              {charge}
            </Typography>
          </TextContent>
        )} */}
    </ImgContainer>
  );
};

export default Img;
