import React from "react";
import { Link, MenuItem } from "@mui/material";
import {
  MenuContainerWrapper,
  MenuContainer,
  TextMenu,
  StyledMenu,
} from "./styled-components.jsx";

const menu = [
  { name: "Home", link: "/" },
  { name: "Expertise", subMenu: true },
  { name: "Our services", link: "/our-services" },
  { name: "Finance", link: "/finance" },
  { name: "Contact Us", link: "/contact-us" },
];

const SubMenu = ({ open, anchorEl, handleClose }) => {
  return (
    <StyledMenu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 3.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: 0.5,
            mr: 1,
          },
        },
        style: {
          width: "20ch",
        },
      }}
    >
      <MenuItem onClick={handleClose}>
        <Link underline="none" href="/expertise">
          <TextMenu variant="menu">Expertise</TextMenu>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link underline="none" href="/expertise/residential">
          <TextMenu variant="menu">Residential</TextMenu>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link underline="none" href="/expertise/comercial">
          <TextMenu variant="menu">Comercial</TextMenu>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link underline="none" href="/expertise/glass-partitions">
          <TextMenu variant="menu">Satisfaction</TextMenu>
        </Link>
      </MenuItem>
    </StyledMenu>
  );
};

const MenuContent = ({ intersectRef }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event, subMenu) => {
    if (!subMenu) return;
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuContainerWrapper>
        <MenuContainer
          aria-label="breadcrumb"
          separator="|"
          ref={intersectRef}
          color="primary.light"
        >
          {menu.map((item, index) => (
            <Link
              underline="none"
              href={item.link}
              onClick={(event) => handleClick(event, item.subMenu)}
            >
              <TextMenu variant="menu">{item.name}</TextMenu>
            </Link>
          ))}
        </MenuContainer>
      </MenuContainerWrapper>
      <SubMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
};

export default MenuContent;
