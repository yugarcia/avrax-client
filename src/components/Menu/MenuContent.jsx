import React, { useEffect } from "react";
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
      sx={{ zIndex: 2000, width: "13ch", marginTop: "20px" }}
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
                autoFocusItem={open}
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
                    <TextMenu variant="menu">Satisfaction</TextMenu>
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openSubMenu, setOpenSubMenu] = React.useState(false);

  const [isHover, boxRef] = useHover();

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
    }
  }, [isHover]);

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
              ref={item.subMenu ? boxRef : null}
            >
              <TextMenu variant="menu">{item.name}</TextMenu>
            </Link>
          ))}
        </MenuContainer>
      </MenuContainerWrapper>
      <SubMenu
        open={openSubMenu}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </>
  );
};

export default MenuContent;
