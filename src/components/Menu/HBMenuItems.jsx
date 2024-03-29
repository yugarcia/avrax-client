import React from "react";
import { MenuItem, Typography, Link } from "@mui/material";
import { StyledMenu, Logo } from "./styled-components.jsx";
import Icon from "../../assets/cropped-logo-1-204x149.png";

const menu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Expertise",
    link: "/expertise",
    subMenu: [
      {
        title: "Residential",
        link: "/expertise/residential",
      },
      {
        title: "Commercial",
        link: "/expertise/comercial",
      },
      {
        title: "Glass partitions",
        link: "/expertise/glass-partitions",
      },
    ],
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

const MenuItems = ({ open, anchorEl, onClose }) => {
  return (
    <StyledMenu
      anchorEl={anchorEl}
      id="hamburger-menu"
      open={open}
      onClose={onClose}
      onClick={onClose}
      paperprops={{
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
      transformorigin={{ horizontal: "right", vertical: "top" }}
      anchororigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Logo
        src={Icon}
        isdesktop="false"
        size={50}
        isFixed={true}
        onClick={() => (window.location.href = "/")}
      />
      {menu.map((item, index) => (
        <div key={index}>
          <MenuItem  onClick={onClose}>
            <Link href={item.link}>
              <Typography variant="sideMenu" color="secondary.main">
                {item.title}
              </Typography>
            </Link>
          </MenuItem>

          {item.subMenu?.map((sub, indexSub) => (
            <MenuItem key={indexSub} onClick={onClose} sx={{ marginLeft: "20px" }}>
              <Link href={sub.link}>
                <Typography variant="sideMenu" color="secondary.main">
                  {sub.title}
                </Typography>
              </Link>
            </MenuItem>
          ))}
        </div>
      ))}
    </StyledMenu>
  );
};

export default MenuItems;
