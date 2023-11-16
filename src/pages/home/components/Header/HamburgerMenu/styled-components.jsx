import styled from "@mui/styled-engine";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "@mui/material";

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
  height: 50px;
  margin: 5px 0 0 15px;
`;
