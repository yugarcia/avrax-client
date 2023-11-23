import React from "react";
import { MenuItem, Typography, Link } from "@mui/material";
import { MenuIconWrapper, StyledMenu, Logo } from "./styled-components.jsx";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const HamburgerMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "hamburger-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIconWrapper />
          </IconButton>
        </Tooltip>
      </Box>

      <StyledMenu
        anchorEl={anchorEl}
        id="hamburger-menu"
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
          isdesktop='false'
        />
        <MenuItem onClick={handleClose}>
          <Link href="/">
            <Typography variant="sideMenu" color="primary.light">
              Home
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/expertise">
            <Typography variant="sideMenu" color="primary.light">
              Expertise
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="sideMenu" color="primary.light">
            Our Service
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="sideMenu" color="primary.light">
            Finance
          </Typography>{" "}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="sideMenu" color="primary.light">
            Contact Us
          </Typography>
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default HamburgerMenu;
