import styled from "@mui/styled-engine";
import Container from "../../../../components/Container";

export const ContentContainer = styled(Container)`
  background-color: ${({ theme }) => theme.palette.background.main};
`;

export const Content = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  
  width: 100%;
`;
