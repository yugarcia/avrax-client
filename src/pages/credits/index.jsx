import React from "react";
import PagesHeader from "../../components/PagesHeader/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Container from "../../components/Container/index.jsx";
import { ParagraphWrapper } from "./styled-components.jsx";
import { useMediawidth } from "../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;

const Credits = () => {
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <>
      <PagesHeader title="Content" />
      <Container>
        <ParagraphWrapper
          paragraphColor="secondary.light"
          paragraphInitialColor="primary"
          isMobile={!isTablet}
        >
          This website was created by <b>Avrax Impact Windows and Door®</b>{" "}
          Marketing Team and is dedicated to providing information about our
          business model and services. The website was designed and developed by
          Aily Fernandez & Yuniel using React. We are grateful to the following
          individuals and organizations for their contributions:
          <ul>
            <li>
              Content:
              <ul>
                <li>Alex E. for writing the article on Finance.</li>
                <li> Ley D. for editing the content.</li>
                <li>Ric M. for providing the images used on the website</li>
              </ul>
            </li>
            <li>
              Development:
              <ul>
                <li>
                  Aily Fernandez & Yuniel for designing and developing the
                  website.
                </li>
              </ul>
            </li>
          </ul>
          We welcome your feedback and suggestions. Please feel free to
          contact us at info@avraxwindows.com.
        </ParagraphWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Credits;
