import React, { useState, useEffect } from "react";

import { Zoom } from "@mui/material";
import { Content } from "./styled-components.jsx";
import Container from "../../../../components/Container";

import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import { useIntersect } from "../../../../hooks/useIntersect.js";
import Card from "../Card";

const WIDTH = 1076;
const TIME_OUT = 1300;

const Expertise = () => {
  const isDesktop = useMediawidth(WIDTH);
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsMounted(true);
    }
  }, [entry]);

  const handleCardClick = (path) => {
    window.location.href = `/expertise/${path}`;
  };

  return (
    <Container ref={intersectRef}>
      <Content isdesktop={isDesktop}>
        <Zoom
          in={isMounted}
          style={{
            transitionDelay: isMounted ? "500ms" : "0ms",
            width: "100%",
          }}
          timeout={TIME_OUT}
        >
          <div>
            <Card
              imageSrc="https://avraxwindows.com/wp-content/uploads/2023/08/3.jpg"
              title="Residential"
              onClick={() => handleCardClick("residential")}
              cta={"READ MORE"}
            />
          </div>
        </Zoom>

        <Zoom
          in={isMounted}
          style={{
            transitionDelay: isMounted ? "1000ms" : "0ms",
            width: "100%",
          }}
          timeout={TIME_OUT}
        >
          <div>
            <Card
              imageSrc="https://avraxwindows.com/wp-content/uploads/2023/08/5.jpg"
              title="Commercial"
              onClick={() => handleCardClick("comercial")}
              cta={"READ MORE"}
            />
          </div>
        </Zoom>
        <Zoom
          in={isMounted}
          style={{
            transitionDelay: isMounted ? "1500ms" : "0ms",
            width: "100%",
          }}
          timeout={TIME_OUT}
        >
          <div>
            <Card
              imageSrc="https://avraxwindows.com/wp-content/uploads/2023/08/4.jpg"
              title="Glass Partitions and Railings"
              onClick={() => handleCardClick("glass-partitions")}
              cta={"READ MORE"}
            />
          </div>
        </Zoom>
      </Content>
    </Container>
  );
};

export default Expertise;
