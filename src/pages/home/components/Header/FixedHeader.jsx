import React from "react";
import { FixedHeaderWrapper, Logo } from "./styled-components.jsx";
import HamburgerMenu from "./HamburgerMenu";
import MenuContent from "./MenuContent.jsx";
import a from "../../../../assets/semi.png";

const ANIMATION_DURATION = 500;

const FixedHeader = ({ showNavbar, isDesktop }) => {
  return (
    <>
      {showNavbar && (
        <FixedHeaderWrapper
          hideHeader={!showNavbar}
          duration={ANIMATION_DURATION}
          backgroundImage={a}
        >
          <Logo
            src="https://avraxwindows.com/wp-content/uploads/2023/07/cropped-logo-1-204x149.png"
            isdesktop={isDesktop}
          />
          {isDesktop ? <MenuContent /> : <HamburgerMenu />}
        </FixedHeaderWrapper>
      )}
    </>
  );
};

export default FixedHeader;
