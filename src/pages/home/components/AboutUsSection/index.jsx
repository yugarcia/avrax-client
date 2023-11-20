import React from "react";
import { Typography, Button } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import {
  Title,
  TitleText,
  Container,
  Content,
  Paragraph,
  Image,
  TextContent,
  FooterContent,
} from "./styled-components.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import Sumary from "./Sumary.jsx";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const AboutUsSection = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <>
      <Container isDesktop={isDesktop}>
        <Title isDesktop={isDesktop} isMobile={!isTablet}>
          <Typography variant="largeTitle" color="primary" textAlign={"right"}>
            AVRAX
          </Typography>
          <TitleText
            variant="title"
            color="secondary.dark"
            textAlign={"right"}
            lineHeight={"normal"}
          >
            About Us
          </TitleText>
        </Title>
        <Content isMobile={!isTablet}>
          <TextContent>
            <Paragraph
              variant="paragraph"
              textAlign={"left"}
              color="secondary.light"
            >
              <Image
                src="https://avraxwindows.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-22-at-11.07.17-PM.jpeg"
                isMobile={!isTablet}
              />
              Avrax Impact Windows & Doors ® is a corporation headquartered in
              Miami with another workplace in Cape Coral, FL. Our mission is to
              make houses more secure with an incredible price. We believe every
              customer deserves to be treated with respect and understanding,
              and we are committed to providing the best possible service to our
              clients. We are devoted to providing our customers with the best
              products in the market and have a proven track record of success.
              Our products and services are designed to help our clients achieve
              their goals. We offer a wide range of products, including
              hurricane impact windows and doors. We are dedicated in providing
              astonishing customer service. Our team is available to answer your
              questions and help you to find the right solution for your needs.
              If you are looking for an excellent outcome, Avrax Impact Windows
              & Doors ® is the right choice for you. CONTACT US today to learn
              more about how we can help you “OPEN YOUR DOORS TO THE FUTURE”.
            </Paragraph>
            <FooterContent>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <WorkspacePremiumIcon color="primary" />
                <Typography variant="paragraph" color="primary">
                  Certified Company
                </Typography>
              </div>

              <Button variant="contained">
                <Typography variant="button" color="primary.light">
                  READ MORE
                </Typography>
              </Button>
            </FooterContent>
          </TextContent>
        </Content>
      </Container>
      <Sumary />
    </>
  );
};

export default AboutUsSection;
