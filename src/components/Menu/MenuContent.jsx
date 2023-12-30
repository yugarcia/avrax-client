import React, { useEffect, useState, forwardRef } from "react";
import {
  Link,
  MenuItem,
  Grow,
  Paper,
  MenuList,
  ClickAwayListener,
} from "@mui/material";
import {
  MenuContainerWrapper,
  MenuContainer,
  TextMenu,
  StyledMenuContent,
} from "./styled-components.jsx";
import useHover from "../../hooks/useHover";

const menu = [
  { name: "Home", link: "/" },
  { name: "Expertise", link: "/expertise", subMenu: true },
  { name: "Our services", link: "/our-services" },
  { name: "Finance", link: "/finance" },
  { name: "Contact Us", link: "/contact-us" },
];

const SubMenu = ({ open, anchorEl, handleClose }) => {
  return (
    <StyledMenuContent
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      transition
      sx={{ zIndex: 2000, width: "18ch", marginTop: "20px" }}
      placement="bottom"
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                id="composition-menu"
                aria-labelledby="composition-button"
              >
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
                    <TextMenu variant="menu">Glass partitions</TextMenu>
                  </Link>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </StyledMenuContent>
  );
};

const MenuContent = ({ intersectRef }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const [isHover, boxRef] = useHover();
  const [isHoverAll, divRef] = useHover();

  const handleClose = (event) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      return;
    }
    setOpenSubMenu(false);
  };

  useEffect(() => {
    if (isHover && boxRef.current) {
      setOpenSubMenu(true);
      setAnchorEl(boxRef.current);
    } else if (isHoverAll) {
      setOpenSubMenu(false);
    }
  }, [isHover, isHoverAll]);

  return (
    <MenuContainerWrapper ref={divRef}>
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
            ref={item.subMenu ? boxRef : null}
          >
            <TextMenu variant="menu">{item.name}</TextMenu>
          </Link>
        ))}
      </MenuContainer>
      <SubMenu
        open={openSubMenu}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </MenuContainerWrapper>
  );
};

export default MenuContent;
