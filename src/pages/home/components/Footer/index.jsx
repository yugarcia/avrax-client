import React from "react";
import { Container, MenuContent } from "./styled-components.jsx";

import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import Menu from "./Menu.jsx";
import SocialMedia from "../SocialMedia/index.jsx";
import SocialMediaFixed from "../SocialMedia/SocialMediaFixed.jsx";

const MOBILE_WIDTH = 600;

const Footer = () => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Container>
      {!isTablet ? <SocialMedia /> : <SocialMediaFixed />}
      <MenuContent isMobile={!isTablet}>
        <Menu
          title="About"
          items={[
            "We are a corporation headquartered in Miami with another workplace in Cape Coral, FL.",
          ]}
        />
        <Menu
          title="Quick Links"
          items={["Privacy Policy", "Terms Of Service", "Credits", "FAQ"]}
        />
        <Menu
          title="Our Service"
          items={["Installation", "Repair", "Design", "Engineering"]}
        />
        <Menu
          title="Free Estimate"
          items={["Call Us: 786 881 3081", "239 291 3313"]}
        />
      </MenuContent>
    </Container>
  );
};

export default Footer;
