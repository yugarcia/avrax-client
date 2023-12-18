import React from "react";
import PagesHeader from "../../components/PagesHeader/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import {
  Title,
  TitleText,
  Container,
  BanefitContainer,
} from "./styled-components.jsx";
import { Typography } from "@mui/material";
import { useMediawidth } from "../../hooks/useMediawidth.js";
import Services from "./components/Services/index.jsx";
import BackgroundLines from "../../components/BackgroundLines/index.jsx";
import CircularComponent from "./components/CircularListComponent/index.jsx";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AirIcon from "@mui/icons-material/Air";
import BoltIcon from "@mui/icons-material/Bolt";
import NoiseAwareIcon from "@mui/icons-material/NoiseAware";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";

import { theme } from "../../theme.js";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const segmentsData = [
  {
    icon: (
      <VpnKeyIcon sx={{ color: theme.palette.secondary.white, fontSize: 40 }} />
    ),
    title: "Increased security",
    paragraph:
      "Impact windows and doors offer superior protection against break-ins and forced entry compared to traditional windows and doors.",
  },
  {
    title: "Improved weather resistance",
    paragraph:
      "The materials used in impact windows and doors are designed to withstand harsh weather conditions, including hurricanes, high winds, and heavy rain.",
    icon: (
      <AirIcon sx={{ color: theme.palette.secondary.white, fontSize: 40 }} />
    ),
  },

  {
    title: "Enhanced energy efficiency",
    paragraph:
      "The combination of laminated glass, polymer films, and efficient frame materials helps reduce energy consumption and lower utility bills.",
    icon: (
      <BoltIcon sx={{ color: theme.palette.secondary.white, fontSize: 40 }} />
    ),
  },
  {
    title: "Reduced noise pollution",
    paragraph:
      "Impact windows and doors offer improved soundproofing, creating a quieter and more peaceful living environment.",
    icon: (
      <NoiseAwareIcon
        sx={{ color: theme.palette.secondary.white, fontSize: 40 }}
      />
    ),
  },
  {
    title: "Increased durability",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*W5GoEqNYBCW4vCFCT3gUjw.jpeg",
    paragraph:
      "Specialty materials like aluminum, vinyl, and fiberglass resist corrosion, warping, and fading, ensuring the windows and doors last for years to come.",
    icon: (
      <TimelapseOutlinedIcon
        sx={{ color: theme.palette.secondary.white, fontSize: 40 }}
      />
    ),
  },
];

const OurServicePage = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);
  const variant = isTablet ? "extraLargeTitle" : "largeTitle";

  return (
    <>
      <PagesHeader title="Our Service" />
      <BackgroundLines />
      <Container isdesktop={isDesktop} isMobile={!isTablet}>
        <TitleText
          variant="title"
          color="secondary.dark"
          textAlign={"right"}
          lineHeight={"normal"}
        >
          Our Services
        </TitleText>
        <Title isdesktop={isDesktop} isMobile={!isTablet}>
          <Typography variant={variant} color="primary" textAlign={"right"}>
            Trust the Experience
          </Typography>
        </Title>
      </Container>
      <Services isTablet={isTablet} />

      <BanefitContainer isDesktop={isDesktop}>
        <CircularComponent segments={segmentsData} />
      </BanefitContainer>
      <Footer />
    </>
  );
};

export default OurServicePage;
