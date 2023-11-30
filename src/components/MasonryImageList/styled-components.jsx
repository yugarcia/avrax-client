import styled from "@mui/styled-engine";
import ContainerL from "../Container";

export const Container = styled(ContainerL)`
  background-color: ${({ theme }) => theme.palette.primary.light};
`;
