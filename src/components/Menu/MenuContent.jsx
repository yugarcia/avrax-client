import React from "react";
import { Link, Typography } from "@mui/material";
import { MenuContainerWrapper, MenuContainer } from "./styled-components.jsx";

const MenuContent = ({ intersectRef }) => {
  const menu = [
    { name: "Home", link: "/" },
    { name: "Expertise", link: "/expertise" },
    { name: "Our services", link: "/our-services" },
    { name: "Finance", link: "/finance" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <MenuContainerWrapper>
      <MenuContainer
        aria-label="breadcrumb"
        separator="|"
        ref={intersectRef}
        color="primary.light"
      >
        {menu.map((item, index) => (
          <Link underline="hover" href={item.link}>
            <Typography variant="menu" color="secondary.main">
              {item.name}
            </Typography>
          </Link>
        ))}
      </MenuContainer>
    </MenuContainerWrapper>
  );
};

export default MenuContent;
