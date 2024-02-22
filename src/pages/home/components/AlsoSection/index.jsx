import React, { useEffect, useState } from "react";
import { Slide } from "@mui/material";
import { Container, Content, CardContainer } from "./styled-components.jsx";
import Card from "./Card.jsx";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CheckIcon from "@mui/icons-material/Check";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import VerifiedIcon from "@mui/icons-material/Verified";

import { useIntersect } from "../../../../hooks/useIntersect.js";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

import { theme } from "../../../../theme.js";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;
const ICON_STYLE = { color: theme.palette.primary.main, fontSize: 60 };

const AlsoSection = () => {
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const [isMounted, setIsMounted] = useState(false);

  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsMounted(true);
    }
  }, [entry]);

  const cardListUp = [
    {
      icon: <WorkspacePremiumIcon sx={ICON_STYLE} />,
      title: "Quality Materials",
    },
    {
      icon: <CheckIcon sx={ICON_STYLE} />,
      title: "Accredited",
    },
    {
      icon: <PersonIcon sx={ICON_STYLE} />,
      title: "Trained Workers",
    },
  ];
  const cardListDown = [
    {
      icon: <AccessTimeIcon fontSize="large" sx={ICON_STYLE} />,
      title: "Time Availability",
    },
    {
      icon: <PhoneInTalkIcon sx={ICON_STYLE} />,
      title: "Quick Response",
    },
    {
      icon: <VerifiedIcon sx={ICON_STYLE} />,
      title: "1 Year Warranty",
    },
  ];

  return (
    <Container ref={intersectRef}>
      <Content isDesktop={isDesktop} isMobile={!isTablet}>
        <Slide direction="left" in={isMounted} timeout={3000}>
          <CardContainer isdesktop={isDesktop.toString()}>
            {cardListUp.map((card, index) => (
              <Card icon={card.icon} title={card.title} key={index} />
            ))}
          </CardContainer>
        </Slide>
        <Slide direction="right" in={isMounted} timeout={3000}>
          <CardContainer isdesktop={isDesktop.toString()}>
            {cardListDown.map((card, index) => (
              <Card icon={card.icon} title={card.title} key={index} />
            ))}
          </CardContainer>
        </Slide>
      </Content>
    </Container>
  );
};

export default AlsoSection;
