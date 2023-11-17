import styled, { css } from "@mui/styled-engine";
import { Button, Typography } from "@mui/material";

export const ContentCard = styled("div")`
  z-index: 1000;
  right: 0;
  position: absolute;
`;

export const ButtonCard = styled(Button)`
  height: 100%;
  width: 20px;
`;

export const TextButton = styled(Typography)`
  transform: translateY(-50%) rotate(-90deg);
  white-space: nowrap;
`;
