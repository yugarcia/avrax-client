import React, { useEffect, useState } from "react";
import { Slide } from "@mui/material";
import { Section, BoxLeft } from "./styled-components.jsx";
import { useMediawidth } from "../../hooks/useMediawidth.js";
import { useIntersect } from "../../hooks/useIntersect.js";

const MOBILE_WIDTH = 600;

const ExpertisesHeaderText = ({ sx, children }) => {
  const isTablet = useMediawidth(MOBILE_WIDTH);
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsShow(true);
    }
  }, [entry]);

  return (
    <Section style={sx} ref={intersectRef}>
      {isTablet && <BoxLeft></BoxLeft>}
      <Slide direction="left" in={isShow} timeout={3000}>
        <div
          style={{
            width: "100%",
            position: "relative",
            zIndex: 100,
          }}
        >
          {children}
        </div>
      </Slide>
    </Section>
  );
};

export default ExpertisesHeaderText;
