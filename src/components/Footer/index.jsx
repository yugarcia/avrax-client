import React from "react";
import { Container, MenuContent } from "./styled-components.jsx";

import { useMediawidth } from "../../hooks/useMediawidth.js";
import Menu from "./Menu.jsx";
import SocialMedia from "../SocialMedia/index.jsx";
import SocialMediaFixed from "../SocialMedia/SocialMediaFixed.jsx";

const MOBILE_WIDTH = 600;

const Footer = ({ showFlotingMedia = false }) => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Container>
      {isTablet && showFlotingMedia ? <SocialMediaFixed /> : <SocialMedia />}
      <MenuContent isMobile={!isTablet}>
        <Menu
          title="About"
          items={[
            {
              title: "We are a corporation headquartered in Miami with another workplace in Cape Coral, FL.",
            },
          ]}
        />
        <Menu
          title="Quick Links"
          items={[
            { title: "Privacy Policy", link: "/privacy-policy" },
            { title: "Terms Of Service", link: "/terms-and-conditions" },
            { title: "Credits", link: "/content" },
            { title: "FAQ", link: "/faq" },
          ]}
        />
        <Menu
          title="Our Service"
          items={[
            { title: "Installation" },
            { title: "Repair" },
            { title: "Design" },
            { title: "Engineering" },
          ]}
        />
        <Menu
          title="Free Estimate"
          items={[
            { title: "Call Us: 786 881 3081" },
            { title: "239 291 3313" },
          ]}
        />
      </MenuContent>
    </Container>
  );
};

export default Footer;
