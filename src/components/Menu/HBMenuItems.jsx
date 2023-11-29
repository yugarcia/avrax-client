import React from "react";
import { MenuItem, Typography, Link } from "@mui/material";
import { StyledMenu, Logo } from "./styled-components.jsx";

const MenuItems = ({ open,anchorEl, onClose }) => {
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
      <MenuItem onClick={onClose}>
        <Link href="/">
          <Typography variant="sideMenu" color="primary.light">
            Home
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={onClose}>
        <Link href="/expertise">
          <Typography variant="sideMenu" color="primary.light">
            Expertise
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={onClose}>
        <Link href="/our-services">
        <Typography variant="sideMenu" color="primary.light">
          Our Service
        </Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={onClose}>
        <Typography variant="sideMenu" color="primary.light">
          Finance
        </Typography>{" "}
      </MenuItem>
      <MenuItem onClick={onClose}>
        <Link href="/contact-us">
        <Typography variant="sideMenu" color="primary.light">
          Contact Us
        </Typography>
        </Link>
      </MenuItem>
    </StyledMenu>
  );
};

export default MenuItems;
