import React from "react";
import { MenuIconWrapper } from "./styled-components.jsx";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import HBMenuItems from "./HBMenuItems.jsx";

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
      <HBMenuItems open={open} onClose={handleClose} anchorEl={anchorEl} />
    </>
  );
};

export default HamburgerMenu;
