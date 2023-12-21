import React from "react";
import { ContainerCard as Container, Cards } from "../../styled-components.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import BasicCard from "../../components/Card/index.jsx";
import NearMeIcon from "@mui/icons-material/NearMe";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const WIDTH = 1076;

const CardContainer = () => {
  const isDesktop = useMediawidth(WIDTH);

  return (
    <Container >
      <Cards isDesktop={isDesktop}>
        <BasicCard
          title="Offices"
          contens={[
            "8350 NW 52nd Terr Suite 301, Doral, FL 33166",
            "809 NE 7th Terr Cape Coral, FL 33909",
          ]}
          icon={<NearMeIcon color="primary" />}
        />
        <BasicCard
          title="Make a Call - 24hrs"
          contens={["(786) 881-3081", "(239) 951-3250"]}
          icon={<PhoneIcon color="primary" />}
        />
        <BasicCard
          title="Send a Mail"
          contens={["sales@avraxwindows.com"]}
          icon={<EmailIcon color="primary" />}
        />
      </Cards>
    </Container>
  );
};

export default CardContainer;
