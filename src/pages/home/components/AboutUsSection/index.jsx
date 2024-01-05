import React from "react";
import { Typography } from "@mui/material";
import TextSection from "../../../../components/TextSection/index.jsx";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Button from "../../../../components/Button/index.jsx";
import { FooterContent } from "./styled-components.jsx";

const AboutUsSection = () => {
  return (
    <TextSection
      title="About Us"
      titleColor="primary"
      subtitleColor="secondary.dark"
      imageSrc="https://avraxwindows.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-22-at-11.07.17-PM.jpeg"
      paragraph={
        <>
          Avrax Impact Windows & Doors® originated in 2014, opening its first
          showroom in Miami, FL, serving Miami-Dade, Broward, Palm Beach, and
          Monroe Counties. The company has since expanded its showrooms to Cape
          Coral, FL, servicing Lee, Collier, Hillsborough, Pinellas, Sarasota,
          and Manatee counties. 
          <br /> 
          <br /> 
          Our mission is to make homes more secure at an incredible
          price. We believe every customer deserves to be treated with respect
          and understanding, and we are committed to providing the best possible
          service to our clients. We are devoted to providing our customers with
          the best products on the market and have a proven track record of
          success. Our products and services are designed to help our clients
          achieve their goals of protecting their families, homes, and
          investments. We offer many products for both residential and
          commercial customers, including hurricane-impact windows and doors. We
          are dedicated to providing astonishing customer service. Our team is
          available to answer your questions and help you find the right
          solution for your needs. If you are looking for an excellent outcome,
          Avrax Impact Windows & Doors® is the right choice. CONTACT US today to
          learn how we can help you “OPEN YOUR DOORS TO THE FUTURE.”
        </>
      }
      paragraphColor="secondary.light"
      paragraphInitialColor="primary"
      footer={
        <FooterContent>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <WorkspacePremiumIcon color="primary" />
            <Typography variant="paragraph" color="primary">
              Licensed in the State of Florida
            </Typography>
          </div>
        </FooterContent>
      }
      showAnimation={true}
    />
  );
};

export default AboutUsSection;
