import React from "react";
import { Typography } from "@mui/material";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import {
  Title,
  TitleText,
  Container,
  Contact,
  ContactItem,
} from "./styled-components.jsx";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const StartWithSection = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  const variant = isTablet ? "extraLargeTitle" : "largeTitle";
  return (
    <Container isdesktop={isDesktop} isMobile={!isTablet}>
      <TitleText
        variant="title"
        color="secondary.dark"
        textAlign={"right"}
        lineHeight={"normal"}
      >
        Don't Know What To Start With?
      </TitleText>
      <Title isdesktop={isDesktop} isMobile={!isTablet}>
        <Typography variant={variant} color="primary" textAlign={"right"}>
          Get A Solutions For All Installation Services
        </Typography>
      </Title>
      <Contact isdesktop={isDesktop}>
        <ContactItem>
          <RoomIcon sx={{ fontSize: 40 }} color="secondary.dark" />
          <Typography
            variant="menu"
            color="secondary.dark"
            textAlign={"right"}
            lineHeight={"normal"}
          >
            8350 NW 52nd Ter Ste 301, Doral FL 33166
          </Typography>
        </ContactItem>

        <ContactItem>
          <LocalPhoneIcon sx={{ fontSize: 40 }} color="secondary.dark" />
          <Typography
            variant="menu"
            color="secondary.dark"
            textAlign={"right"}
            lineHeight={"normal"}
          >
            786 881 3081 - 239 291 3313
          </Typography>
        </ContactItem>
      </Contact>
    </Container>
  );
};

export default StartWithSection;
