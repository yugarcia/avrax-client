import React, { useEffect } from "react";
import { Typography, Slide } from "@mui/material";
import { ImgContainer } from "./styled-components.jsx";
import { useIntersect } from "../../../../hooks/useIntersect.js";

const Img = ({ src, name, charge }) => {
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const [isShow, setIsShow] = React.useState(false);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsShow(true);
    }
  }, [entry]);

  return (
    <div ref={intersectRef}>
      <Slide direction="up" in={isShow} timeout={3000} container={intersectRef.current}>
        <ImgContainer>
          <img src={src} style={{ width: "140px" }} alt="our team" />
          <Typography component="h5" variant="menu" color="primary">
            {name}
          </Typography>

          <Typography
            component="small"
            variant="subtitle"
            color="secondary.light"
          >
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
        </ImgContainer>
      </Slide>
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
    </div>
  );
};

export default Img;
