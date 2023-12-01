import React, { useEffect, useState } from "react";
import { useMediawidth } from "../../hooks/useMediawidth.js";
import { Container, ContactItem } from "./styled-components.jsx";

const EXTRA_LARGE_WIDTH = 1270;
const WIDTH = 1076;
const MOBILE_WIDTH = 600;
const IMAGE_HEIGHT = 90;

const Providers = () => {
  const [imageHeight, setImageHeight] = useState(IMAGE_HEIGHT);

  const isExtraLarge = useMediawidth(EXTRA_LARGE_WIDTH);
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  useEffect(() => {
    if (isExtraLarge) {
      setImageHeight(IMAGE_HEIGHT);
    } else if (isDesktop) {
      setImageHeight(60);
    } else if (isTablet) {
      setImageHeight(IMAGE_HEIGHT);
    } else {
      setImageHeight(60);
    }
  }, [isExtraLarge, isDesktop, isTablet]);

  return (
    <Container isdesktop={isDesktop} isMobile={!isTablet}>
      <ContactItem>
        <img
          src="https://avraxwindows.com/wp-content/uploads/2023/11/Mr-Glass-Doors-Windows-Manufacturing-LLC-MAIN-LOGO-HORIZONTAL.png"
          height={imageHeight}
          alt="Mr Glass Doors & Windows Manufacturing LLC"
        />
      </ContactItem>

      <ContactItem>
        <img
          src="https://avraxwindows.com/wp-content/uploads/2023/11/ESW-Logo.png"
          height={imageHeight}
          alt="ESW Logo"
        />
      </ContactItem>
      <ContactItem>
        <img
          src="https://avraxwindows.com/wp-content/uploads/2023/11/crl-logo.png"
          height={imageHeight}
          alt="CRL Logo"
        />
      </ContactItem>
      <ContactItem>
        <img
          src="https://avraxwindows.com/wp-content/uploads/2023/11/igt-logo-1.png"
          height={imageHeight}
          alt="IGT Logo"
        />
      </ContactItem>
    </Container>
  );
};

export default Providers;
