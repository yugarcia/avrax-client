import React from "react";
import { Typography } from "@mui/material";
import {
  Title,
  TitleText,
  Container,
  Contact,
  ContactItem,
} from "./styled-components.jsx";
import TextTitle from "../../../../components/Title/index.jsx";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import windowImage from "../../../../assets/window.jpg";

import { useMediawidth } from "../../../../hooks/useMediawidth.js";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const StartWithSection = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Container isdesktop={isDesktop} isMobile={!isTablet} backgroungImage={windowImage}>
       <TitleText
        variant="title"
        color="secondary.dark"
        textAlign={"right"}
        lineHeight={"normal"}
      >
        Too Much to do and don’t know work to start.
      </TitleText>
      <Title isdesktop={isDesktop} isMobile={!isTablet}>
        <TextTitle color="primary" textAlign={"right"}>
          Get A Solutions For All Installation Services
        </TextTitle>
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
