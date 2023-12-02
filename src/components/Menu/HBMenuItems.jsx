import React from "react";
import { MenuItem, Typography, Link } from "@mui/material";
import { StyledMenu, Logo } from "./styled-components.jsx";

const MenuItems = ({ open, anchorEl, onClose }) => {
  const menu = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Expertise",
      link: "/expertise",
    },
    {
      title: "Our Service",
      link: "/our-services",
    },
    {
      title: "Finance",
      link: "/finance",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
  ];

  return (
    <StyledMenu
      anchorEl={anchorEl}
      id="hamburger-menu"
      open={open}
      onClose={onClose}
      onClick={onClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: 0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Logo
        src="https://avraxwindows.com/wp-content/uploads/2023/07/cropped-logo-1-204x149.png"
        isdesktop="false"
      />
      {menu.map((item, index) => (
        <MenuItem key={index} onClick={onClose}>
          <Link href={item.link}>
            <Typography variant="sideMenu" color="secondary.main">
              {item.title}
            </Typography>
          </Link>
        </MenuItem>
      ))}
    </StyledMenu>
  );
};

export default MenuItems;
