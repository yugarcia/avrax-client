import styled from "@mui/styled-engine";
import { CardHeader } from "@mui/material";

export const ContentCard = styled("div")`
  z-index: 1000;
  margin: 1px 1px 15px 1px;
`;

export const CardHeaderWrapper = styled(CardHeader)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
