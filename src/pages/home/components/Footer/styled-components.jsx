import styled from "@mui/styled-engine";
import ContainerL from "../../../../components/Container";

export const Container = styled(ContainerL)`
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justify-content: space-around;
  align-items: ${({ isMobile }) => (isMobile ? "center" : "start")};
  gap: 50px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const MenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: ${({ isMobile }) => (isMobile ? "80%" : "15%")};
  gap: 20px;
`;
