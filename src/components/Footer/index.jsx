import React from "react";
import { Typography } from "@mui/material";
import { Container, MenuContent } from "./styled-components.jsx";

import { useMediawidth } from "../../hooks/useMediawidth.js";
import Menu from "./Menu.jsx";
import SocialMedia from "../SocialMedia/index.jsx";
import SocialMediaFixed from "../SocialMedia/SocialMediaFixed.jsx";

const MOBILE_WIDTH = 600;

const footerMenu = [
  {
    title: "Office Hours",
    items: [
      { title: "Mon-Fri:  8:00 a.m. - 5:00 p.m." },
      { title: "Sat:  8:30 a.m. - 2:00 p.m." },
    ],
  },
  {
    title: "Quick Links",
    items: [
      { title: "Privacy Policy", link: "/privacy-policy" },
      { title: "Terms Of Service", link: "/terms-and-conditions" },
      { title: "Credits", link: "/content" },
      { title: "FAQ", link: "/faq" },
    ],
  },
  {
    title: "Our Service",
    items: [
      { title: "Installation", link: "/our-services" },
      { title: "Repair", link: "/our-services" },
      { title: "Design", link: "/our-services" },
      { title: "Engineering", link: "/our-services" },
    ],
  },
  {
    title: "Free Estimate - Call Us",
    items: [
      { title: "(786) 881-3081", link: "/contact-us" },
      { title: "(239) 951-3250", link: "/contact-us" },
    ],
  },
];

const Footer = ({ showFlotingMedia = false }) => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Container>
      {isTablet && showFlotingMedia ? <SocialMediaFixed /> : <SocialMedia />}
      <MenuContent isMobile={!isTablet}>
        {footerMenu.map((menu) => (
          <Menu key={menu.title} title={menu.title} items={menu.items} />
        ))}
      </MenuContent>

      <Typography variant="copyRight" color="secondary" sx={{padding: !isTablet?'0 50px': '0 100px'}}>
        The information contained herein is exclusive property of Avrax Impact
        Windows & Doors®, who reserves the right to modify it, including but not
        limited to the designs and its specifications, without notice. ©2024
        Avrax Impact Windows & Doors Corp. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
