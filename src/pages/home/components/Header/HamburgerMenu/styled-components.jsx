import styled from "@mui/styled-engine";
import MenuIcon from "@mui/icons-material/Menu";

export const MenuIconWrapper = styled(MenuIcon)`
  color: ${({ theme }) =>  theme.palette.primary.light};
  margin-right: 7vw;
`;
