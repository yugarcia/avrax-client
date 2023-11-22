import React, { useEffect, useState } from "react";
import { Typography, Slide } from "@mui/material";
import { Container, Content, CardContainer } from "./styled-components.jsx";
import Card from "./Card.jsx";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonIcon from "@mui/icons-material/Person";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import VerifiedIcon from "@mui/icons-material/Verified";

import { useIntersect } from "../../../../hooks/useIntersect.js";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

import { theme } from "../../../../theme.js";

const WIDTH = 1076;

const AlsoSection = () => {
  const [intersectRef, entry] = useIntersect({ threshold: 0 });
  const [isMounted, setIsMounted] = useState(false);

  const isDesktop = useMediawidth(WIDTH);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsMounted(true);
    }
  }, [entry]);

  return (
    <Container ref={intersectRef}>
      <Typography variant="extraLargeTitle" color="primary.dark">
        Also...
      </Typography>
      <Content>
        <Slide direction="left" in={isMounted} timeout={1000}>
          <CardContainer isdesktop={isDesktop}>
            <Card
              icon={
                <WorkspacePremiumIcon
                  fontSize="large"
                  sx={{ color: theme.palette.primary.light }}
                />
              }
              title="Quality Materials"
              backgroundColor="primary.dark"
              color="primary.light"
            />
            <Card
              icon={
                <CheckCircleIcon
                  fontSize="large"
                  sx={{ color: theme.palette.primary.dark }}
                />
              }
              title="Accredited"
              backgroundColor="red.light"
              color="primary.dark"
            />
            <Card
              icon={
                <PersonIcon
                  fontSize="large"
                  sx={{ color: theme.palette.primary.light }}
                />
              }
              title="Trained Workers"
              backgroundColor="primary.dark"
              color="primary.light"
            />
          </CardContainer>
        </Slide>
        <Slide direction="right" in={isMounted} timeout={1000}>
          <CardContainer isdesktop={isDesktop}>
            <Card
              icon={
                <WatchLaterIcon
                  fontSize="large"
                  sx={{ color: theme.palette.primary.dark }}
                />
              }
              title="Time Availability"
              backgroundColor="red.light"
              color="primary.dark"
            />
            <Card
              icon={
                <PhoneInTalkIcon
                  fontSize="large"
                  sx={{ color: theme.palette.primary.light }}
                />
              }
              title="Quick Response"
              backgroundColor="primary.dark"
              color="primary.light"
            />
            <Card
              icon={
                <VerifiedIcon
                  fontSize="large"
                  sx={{ color: theme.palette.primary.dark }}
                />
              }
              title="1 Year Warranty"
              backgroundColor="red.light"
              color="primary.dark"
            />
          </CardContainer>
        </Slide>
      </Content>
    </Container>
  );
};

export default AlsoSection;
