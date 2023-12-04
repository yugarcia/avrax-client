import React, { useEffect } from "react";
import { Section, BoxLeft, Animation } from "./styled-components.jsx";
import { useMediawidth } from "../../hooks/useMediawidth.js";
import { useIntersect } from "../../hooks/useIntersect.js";

const MOBILE_WIDTH = 600;

const ExpertisesHeaderText = ({ sx, children }) => {
  const isTablet = useMediawidth(MOBILE_WIDTH);
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const [isShow, setIsShow] = React.useState(false);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsShow(true);
    }
  }, [entry]);

  return (
    <Section style={sx} ref={intersectRef}>
      {isTablet && <BoxLeft isShow={{ isShow }}></BoxLeft>}
      <Animation isShow={{ isShow }}>{children}</Animation>
    </Section>
  );
};

export default ExpertisesHeaderText;
