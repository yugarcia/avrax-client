import styled from "@mui/styled-engine";
import ContainerL from "../Container";

export const Container = styled(ContainerL)`
  align-items: start;
  position: relative;
  overflow: hidden;
  flex-direction: ${({ isdesktop }) => (isdesktop ? "row" : "column")};
  gap: 50px;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    filter: grayscale(100%);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(https://avraxwindows.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-01-at-12.39.41-PM-1.jpeg)
      center/cover no-repeat;
    z-index: -1;
    opacity: 0.4;
    background-attachment: fixed;
  }
`;

export const ContactItem = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
`;
