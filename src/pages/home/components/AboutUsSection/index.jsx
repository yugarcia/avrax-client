import React from "react";
import { Typography } from "@mui/material";
import Sumary from "./Sumary.jsx";
import TextSection from "../../../../components/TextSection/index.jsx";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Button from "../../../../components/Button/index.jsx";
import { FooterContent } from "./styled-components.jsx";

const AboutUsSection = () => {
  return (
    <>
      <TextSection
        title="AVRAX"
        titleColor="primary"
        subtitle="About Us"
        subtitleColor="secondary.dark"
        imageSrc="https://avraxwindows.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-22-at-11.07.17-PM.jpeg"
        paragraph="Avrax Impact Windows & Doors ® is a corporation headquartered in
        Miami with another workplace in Cape Coral, FL. Our mission is to
        make houses more secure with an incredible price. We believe every
        customer deserves to be treated with respect and understanding, and
        we are committed to providing the best possible service to our
        clients. We are devoted to providing our customers with the best
        products in the market and have a proven track record of success.
        Our products and services are designed to help our clients achieve
        their goals. We offer a wide range of products, including hurricane
        impact windows and doors. We are dedicated in providing astonishing
        customer service. Our team is available to answer your questions and
        help you to find the right solution for your needs. If you are
        looking for an excellent outcome, Avrax Impact Windows & Doors ® is
        the right choice for you. CONTACT US today to learn more about how
        we can help you “OPEN YOUR DOORS TO THE FUTURE”."
        paragraphColor="secondary.light"
        paragraphInitialColor="primary"
        footer={
          <FooterContent>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <WorkspacePremiumIcon color="primary" />
              <Typography variant="paragraph" color="primary">
                Certified Company
              </Typography>
            </div>
            <Button text="READ MORE" />
          </FooterContent>
        }
      />
      <Sumary />
    </>
  );
};

export default AboutUsSection;
