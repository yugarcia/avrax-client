import React, { forwardRef } from "react";
import { Container as ContainerL } from "./styled-components.jsx";
import { useMediawidth } from "../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const Container = forwardRef(({ children, className }, ref) => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <ContainerL isMobile={!isTablet} className={className} ref={ref}>
      {children}
    </ContainerL>
  );
});

export default Container;
