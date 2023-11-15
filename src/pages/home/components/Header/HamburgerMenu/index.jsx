import React from "react";
import { Menu, MenuItem, Typography, Link } from "@mui/material";
import { MenuIconWrapper } from "./styled-components.jsx";

const HamburgerMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuIconWrapper onClick={handleClick} />
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Link underline="hover" href="/">
            <Typography variant="sideMenu" color="primary">
              Home
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="sideMenu" color="primary">
            Expertice
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="sideMenu" color="primary">
            Our Service
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="sideMenu" color="primary">
            Finance
          </Typography>{" "}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="sideMenu" color="primary">
            Contact Us
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
