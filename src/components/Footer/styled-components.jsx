import styled from "@mui/styled-engine";
import ContainerL from "../Container";

export const Container = styled(ContainerL)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  flex-direction: column;
  gap: 70px;
  position: relative;
  z-index: 100;
`;

export const MenuContent = styled("div")`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justify-content: space-around;
  align-items: ${({ isMobile }) => (isMobile ? "center" : "start")};
  gap: 50px;
`;

export const MenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: ${({ isMobile }) => (isMobile ? "80%" : "15%")};
  gap: 20px;
`;
