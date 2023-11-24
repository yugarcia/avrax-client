import React, { useState, useEffect } from "react";

import { Zoom } from "@mui/material";
import InfoBox from "../../../../components/InfoBox";
import { Content } from "./styled-components.jsx";
import Container from "../../../../components/Container";

import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import { useIntersect } from "../../../../hooks/useIntersect.js";

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
            <InfoBox
              imageSrc="https://avraxwindows.com/wp-content/uploads/2023/08/3.jpg"
              title="Residential"
              paragraph="Impact windows and doors are not only convenient and meticulously manufactured, but are tested to back their durability."
              color="primary"
              width="100%"
              onClick={() => handleCardClick("residential")}
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
            <InfoBox
              imageSrc="https://avraxwindows.com/wp-content/uploads/2023/08/5.jpg"
              title="Comercial"
              paragraph="Impact windows and doors offer unmatched energy efficiency! Avoiding the increase in temperature in summer and keeping the heat inside your office or home in the winter months."
              color="primary"
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
            <InfoBox
              imageSrc="https://avraxwindows.com/wp-content/uploads/2023/08/4.jpg"
              title="Glass Partitions"
              paragraph="Our main goal is the customer satisfaction with the final product. Get comfortable at your home!!!"
              color="primary"
            />
          </div>
        </Zoom>
      </Content>
    </Container>
  );
};

export default Expertise;
