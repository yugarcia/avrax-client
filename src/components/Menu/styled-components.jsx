import styled from "@mui/styled-engine";
import { Breadcrumbs } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, Typography } from "@mui/material";

export const MenuIconWrapper = styled(MenuIcon)`
  color: ${({ theme }) => theme.palette.primary.light};
  margin-right: 7vw;
`;

export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    background-color: ${({ theme }) => theme.palette.primary.main};
    right: 0;
  }
`;

export const Logo = styled("img")`
  z-index: 2000;
  height: ${({ size }) => `${size}px`};
  margin: ${({ isFixed }) => (isFixed ? "0 0 0 55px" : "45px 0 0 55px")};
  cursor: pointer;
`;

export const MenuContainerWrapper = styled("header")`
  position: absolute;
  width: 100%;
  height: 64px;

  display: flex;
`;

export const MenuContainer = styled(Breadcrumbs)`
  position: relative;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 14px;
  }
`;

export const HeaderWrapper = styled("header")`
  position: absolute;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextMenu = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.red.bright};
  }
`;
