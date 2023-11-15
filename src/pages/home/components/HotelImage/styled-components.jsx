import styled from "@mui/styled-engine";

export const ImageContainer = styled("div")`
  max-width: 400px;
  height: 400px;
  overflow: hidden;
`;

export const Img = styled("img")`
  width: 100%;
  cursor: pointer;
  filter: grayscale(100%);
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    filter: grayscale(0%);
  }
`;
