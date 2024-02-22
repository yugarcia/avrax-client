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
      <PagesHeader title="Frequently Asked Questions" />
      <Container>
        <Paragraph
          paragraphColor="secondary.light"
          paragraphInitialColor="primary"
          isMobile={!isTablet}
        >
          Here are some frequently asked questions about impact windows and
          doors:
          <br />
          General:
          <ul>
            <li>
              <b>What are impact windows and doors? </b>
              <ul>
                <li>
                  Impact windows and doors are designed to withstand strong
                  winds, flying debris, and forced entry. They are typically
                  constructed with laminated glass and reinforced frames, making
                  them significantly stronger than traditional windows and
                  doors.
                </li>
              </ul>
            </li>
            <li>
              <b>What are the benefits of impact windows and doors?</b>
              <ul>
                <li>
                  There are several benefits to installing impact windows and
                  doors, including:
                </li>
                <li>
                  Improved safety and security: Impact windows and doors can
                  help protect your home from break-ins and severe weather
                  events like hurricanes and hailstorms.
                </li>
                <li>
                  Increased energy efficiency: Impact windows and doors can help
                  reduce your energy bills by preventing heat loss in the winter
                  and heat gain in the summer.
                </li>

                <li>
                  Reduced noise pollution: Impact windows and doors can help
                  block out noise from outside, making your home quieter and
                  more peaceful.
                </li>
                <li>
                  Increased curb appeal: Impact windows and doors can add a
                  modern and stylish look to your home, potentially increasing
                  its value.
                </li>
              </ul>
            </li>
            <li>
              <b>What are the disadvantages of impact windows and doors?</b>
              <ul>
                <li>
                  Impact windows and doors can be more expensive than
                  traditional windows and doors.
                </li>
                <li>They may require special installation and maintenance.</li>
                <li>
                  They may not be readily available in all styles and sizes.
                </li>
              </ul>
            </li>
          </ul>{" "}
          Installation:
          <ul>
            <li>
              <b>How are impact windows and doors installed?</b>
              <ul>
                <li>
                  Impact windows and doors should be installed by a qualified
                  professional. The installation process typically involves
                  removing your existing windows and doors, preparing the
                  openings, installing the new windows and doors, and ensuring
                  they are properly sealed and weatherproofed.
                </li>
              </ul>
            </li>
            <li>
              <b>
                What is the average cost of installing impact windows and doors?
              </b>
              <ul>
                <li>
                  The cost of installing impact windows and doors will vary
                  depending on several factors, including the size and number of
                  windows and doors, the type of material, the complexity of the
                  installation, and the labor costs in your area. However, you
                  can expect to pay anywhere from $1,000 to $5,000 per window or
                  door.
                </li>
              </ul>
            </li>
          </ul>
          Maintenance:
          <ul>
            <li>
              <b>How do I maintain my impact windows and doors?</b>
              <ul>
                <li>
                  Impact windows and doors are relatively low maintenance.
                  However, it is important to clean them regularly with a mild
                  soap and water solution. You should also inspect them
                  periodically for any signs of damage or wear and tear.
                </li>
              </ul>
            </li>
          </ul>
          Insurance:{" "}
          <ul>
            <li>
              <b>Do impact windows and doors reduce my insurance costs?</b>
              <ul>
                <li>
                  Yes, in many cases, impact windows and doors can qualify you
                  for a discount on your homeowners’ insurance. This is because
                  they can help reduce the risk of damage from storms and
                  break-ins.
                </li>
              </ul>
            </li>
          </ul>
        </Paragraph>
      </Container>
      <Footer showFlotingMedia={true} />
    </>
  );
};

export default GeneralPolicy;
