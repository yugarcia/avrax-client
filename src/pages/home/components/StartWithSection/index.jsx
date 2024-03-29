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
import backgroungImage from "../../../../assets/Dont-know-where-1.jpg";
import CustomizedSteppers from "./Stepper.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const StartWithSection = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Container isdesktop={isDesktop} isMobile={!isTablet} backgroungImage={backgroungImage}>
       <TitleText
        variant="title"
        color="secondary.dark"
        textAlign={"right"}
        lineHeight={"normal"}
      >
         Don’t know where to start?
      </TitleText>
      <Title isdesktop={isDesktop} isMobile={!isTablet}>
        <TextTitle color="primary" textAlign={"right"}>
        We offer you with solutions based on your goals.
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
            (786) 881-3081 or (239) 291-3250
          </Typography>
        </ContactItem>
      </Contact>
      <CustomizedSteppers  isTablet={isTablet}/>
    </Container>
  );
};

export default StartWithSection;
