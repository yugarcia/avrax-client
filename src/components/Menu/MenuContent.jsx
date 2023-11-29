import React from "react";
import { Link, Typography } from "@mui/material";
import { MenuContainerWrapper, MenuContainer } from "./styled-components.jsx";

const MenuContent = ({ intersectRef }) => {
  return (
    <MenuContainerWrapper>
      <MenuContainer
        aria-label="breadcrumb"
        separator="|"
        ref={intersectRef}
        color="primary.light"
      >
        <Link underline="hover" href="/">
          <Typography variant="menu" color="primary.light">
            Home
          </Typography>
        </Link>
        <Link underline="hover" href="/expertise">
          <Typography variant="menu" color="primary.light">
            Expertise
          </Typography>
        </Link>
        <Link underline="hover" href="/our-services">
          <Typography variant="menu" color="primary.light">
            Our services
          </Typography>
        </Link>
        <Link underline="hover" href="/finance">
          <Typography variant="menu" color="primary.light">
            Finance
          </Typography>
        </Link>
        <Link underline="hover" href="/contact-us">
          <Typography variant="menu" color="primary.light">
            {" "}
            Contact Us
          </Typography>
        </Link>
      </MenuContainer>
    </MenuContainerWrapper>
  );
};

export default MenuContent;
