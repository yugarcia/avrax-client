import React from "react";
import PagesHeader from "../../components/PagesHeader/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Container from "../../components/Container/index.jsx";
import { ParagraphWrapper } from "./styled-components.jsx";
import { useMediawidth } from "../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const TyCPage = () => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <>
      <PagesHeader title="Terms of Service" />
      <Container>
        <ParagraphWrapper
          paragraphColor="secondary.light"
          paragraphInitialColor="primary"
          isMobile={!isTablet}
        >
          Effective Date: 2023-12-08
          <br />
          Welcome to <b>Avrax Impact Windows and Doors®</b>
          ("Company", "we", "us", or "our").
          <br />
          These Terms of Service ("Terms", "Terms of Service", or "Agreement")
          govern your access to and use of the www.avraxwindows.com website and
          other online products and services (collectively, the "Services")
          offered by <b>Avrax Impact Windows and Doors®</b>.
          <br />
          Please read these Terms carefully before accessing or using the
          Services. By accessing or using any part of the Services, you agree to
          be bound by these Terms. If you do not agree to all the terms and
          conditions of this Agreement, then you may not access or use the
          Services.
          <br />
          <br />
          1. Account and Membership
          <br />
          To access or use certain features of the Services, you may be required
          to create an account. You are responsible for maintaining the
          confidentiality of your account information, including your password,
          and for all activities that occur under your account. You agree to
          notify us immediately of any unauthorized use of your account or any
          other breach of security.
          <br />
          <br />
          2. User Conduct
          <br /> You agree to use the Services only for lawful purposes and in
          accordance with these Terms. You agree not to:
          <ul>
            <li>
              {" "}
              Use the Services in any way that violates any applicable federal,
              state, local, or international law or regulation.
            </li>
            <li>
              {" "}
              Infringe the intellectual property rights of others, including
              copyrights, trademarks, patents, trade secrets, or moral rights.
            </li>
            <li>
              {" "}
              Upload, transmit, or distribute any content that is unlawful,
              harmful, threatening, abusive, harassing, tortious, defamatory,
              vulgar, obscene, libelous, invasive of another's privacy, hateful,
              or racially, ethnically, or otherwise objectionable.
            </li>
            <li> Use the Services to harm or exploit minors in any way.</li>
            <li>
              {" "}
              Impersonate any person or entity, or falsely state or otherwise
              misrepresent your affiliation with a person or entity.
            </li>
            <li>
              {" "}
              Interfere with or disrupt the Services or servers or networks
              connected to the Services.
            </li>
            <li>
              {" "}
              Attempt to gain unauthorized access to the Services, user
              accounts, or computer systems or networks connected to the
              Services.
            </li>
            <li>
              {" "}
              Use the Services for any commercial purpose without our express
              written consent.
            </li>
            <li>
              {" "}
              Use any automated means to access or use the Services, such as
              bots, scripts, or spiders.
            </li>
          </ul>
          3. Intellectual Property
          <br /> The Services and all content, including but not limited to
          text, graphics, logos, images, audio, video, and software, are the
          property of <b>Avrax Impact Windows and Doors®</b>or its licensors and
          are protected by copyright, trademark, and other intellectual property
          laws. You agree not to reproduce, modify, distribute, sell, rent,
          lease, create derivative works from, or exploit in any way any of the
          content, in whole or in part, without the express written permission
          of <b>Avrax Impact Windows and Doors®</b>.
          <br />
          <br />
          4. Termination
          <br /> We may terminate your access to or use of the Services at any
          time, for any reason or no reason, without prior notice. We are not
          responsible for any loss or damage that may result from the
          termination of your access to the Services.
          <br />
          <br />
          5. Disclaimer of Warranties
          <br />
          The Services are provided "as is" and "as available" without any
          warranties of any kind, express or implied, including but not limited
          to warranties of merchantability, fitness for a particular purpose,
          and non-infringement. We disclaim all warranties to the maximum extent
          permitted by law.
          <br />
          <br />
          6. Limitation of Liability
          <br />
          We will not be liable for any damages of any kind arising out of or in
          connection with your use of the Services, including but not limited to
          direct, indirect, incidental, consequential, and punitive damages.
          <br />
          <br />
          7. Indemnification
          <br />
          You agree to indemnify, defend, and hold harmless
          <b>Avrax Impact Windows and Doors®</b>, its officers, directors,
          employees, agents, licensors, and suppliers from and against all
          losses, expenses, damages, and costs, including reasonable attorneys'
          fees, arising out of or in connection with your use of the Services or
          your violation of these Terms.
          <br />
          <br />
          8. Governing Law and Dispute Resolution
          <br />
          These Terms will be governed by and construed in accordance with the
          laws of the State of Florida, without regard to its conflict of law’s
          provisions. Any dispute arising out of or relating to these Terms or
          the Services will be resolved exclusively in the courts of the State
          of Florida.
          <br />
          <br />
          9. Entire Agreement
          <br />
          These Terms constitute the entire agreement between you and{" "}
          <b>Avrax Impact Windows and Doors®</b> regarding your use of the
          Services.
          <br />
          <br />
          10. Changes to Terms
          <br />
          We may update these Terms at any time by posting the revised Terms on
          the Services. The revised Terms will be effective as of the date they
          are posted. You are responsible for reviewing these Terms regularly.
          Your continued use of the Services following the posting of the
          revised Terms constitutes your acceptance of the revised Terms.
          <br />
          <br />
          11. Contact Us
        </ParagraphWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default TyCPage;
