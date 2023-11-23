import React from "react";
import { FixedHeaderWrapper } from "./styled-components.jsx";
import backgroundImage from "../../../../assets/semi.png";

const ANIMATION_DURATION = 500;

const FixedHeader = ({ showNavbar, children }) => {
  return (
    <>
      {showNavbar && (
        <FixedHeaderWrapper
          hideHeader={!showNavbar}
          duration={ANIMATION_DURATION}
          backgroundImage={backgroundImage}
        >
        {children}
        </FixedHeaderWrapper>
      )}
    </>
  );
};

export default FixedHeader;
