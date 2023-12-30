import styled from "@mui/styled-engine";

export const FixedHeaderWrapper = styled("header")`
  height: 200px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: auto;
  background-repeat: repeat;
`;

export const MenuContent = styled("div")`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
   justify-content: end;
 `;

export const Title = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled("img")`
  z-index: 2000;
  height: 50px;
  padding-left: ${({ isdesktop }) => (isdesktop ? "5vw" : "20vw")};
`;
