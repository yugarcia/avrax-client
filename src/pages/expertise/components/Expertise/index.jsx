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
              paragraph="Avrax Impact Windows and Doors®️ is committed to providing our Residential Clients with a comprehensive project management experience, from providing a free estimate with all the pros and cons, guiding our clients towards the most convenient option, and, always working within our clients' budgets."
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
              title="Commercial"
              paragraph="Avrax Impact Windows and Doors®️ has a deep understanding of the sector in which our Commercial Clients operate. We possess the knowledge and experience to tailor our services and solutions to your unique needs and challenges delivering solutions that provide a high return on investment (ROI). We strike a balance between cost-effectiveness and value, ensuring that our clients receive high-quality solutions at a competitive price."
              color="primary"
              onClick={() => handleCardClick("comercial")}
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
              title="Glass Partitions and Railings"
              paragraph="Glass partitions eliminate the feeling of claustrophobia that can arise with traditional solid walls. By dividing spaces without blocking sightlines, they create a sense of spaciousness and foster a sense of connection among colleagues, promoting collaboration and teamwork. Exude a modern and sophisticated aesthetic, their clean lines and minimalist presence contribute to a contemporary and professional ambiance."
              color="primary"
              onClick={() => handleCardClick("glass-partitions")}
            />
          </div>
        </Zoom>
      </Content>
    </Container>
  );
};

export default Expertise;
