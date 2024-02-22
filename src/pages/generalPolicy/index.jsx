import React from "react";
import PagesHeader from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Container from "../../components/Container/index.jsx";
import Paragraph from "../../components/Paragraph";
import { useMediawidth } from "../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const GeneralPolicy = () => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <>
      <PagesHeader title="General Privacy Policy " />
      <Container>
        <Paragraph
          paragraphColor="secondary.light"
          paragraphInitialColor="primary"
          isMobile={!isTablet}
        >
          <b>Avrax Impact Windows and Doors®</b> (referred to as "we", "us", or
          "our") respects your privacy and is committed to protecting your
          personal information. This Privacy Policy outlines how we collect,
          use, disclose, and protect your personal information when you use our
          website, products, and services.
          <br />
          <br />
          Information We Collect:
          <ul>
            <li>
              Personal information: This may include your name, email address,
              phone number, address, and other information you provide to us.
            </li>
            <li>
              Usage data: We collect information about how you use our website,
              products, and services, such as the pages you visit, the features
              you use, and the time you spend on our website.
            </li>
            <li>
              Device data: We collect information about the device you use to
              access our website, products, and services, such as the device
              type, operating system, and browser type.
            </li>
          </ul>
          <br /> How We Use Your Information:
          <ul>
            <li>
              We use your personal information to provide and improve our
              services, communicate with you, and personalize your experience.
            </li>
            <li>
              We use usage data to analyze how people use our website, products,
              and services, and to improve them.
            </li>
            <li>
              We use device data to improve the compatibility and functionality
              of our website, products, and services.
            </li>
          </ul>
          <br /> How We Share Your Information:
          <ul>
            <li>
              We may share your personal information with third-party service
              providers who help us operate our website, products, and services.
              These service providers are contractually obligated to protect
              your information and only use it for the purposes we specify.
            </li>
            <li>
              {" "}
              We may disclose your personal information if we are required to do
              so by law.
            </li>
            <li>
              {" "}
              We will not sell or rent your personal information to third
              parties.
            </li>
          </ul>
          <br />
          Your Rights:
          <ul>
            <li>
              You have the right to access, correct, and delete your personal
              information.
            </li>
            <li> You have the right to opt out of marketing communications.</li>
            <li>
              You have the right to lodge a complaint with a data protection
              authority.
            </li>
          </ul>
          <br />
          Contact Us: If you have any questions about this Privacy Policy,
          please contact us at info@avraxwindows.com
        </Paragraph>
      </Container>
      <Footer showFlotingMedia={true} />
    </>
  );
};

export default GeneralPolicy;
