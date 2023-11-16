import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const Title = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const TitleText = styled(Typography)`
  text-shadow: 0.5px 0.5px ${({ theme }) => theme.palette.primary.light};
`;
