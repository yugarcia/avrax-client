import React from "react";
import { CardContainer as CardContainerStyled } from "../../styled-components.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";
import BasicCard from "../../components/Card/index.jsx";
import NearMeIcon from "@mui/icons-material/NearMe";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const WIDTH = 1076;

const CardContainer = () => {
  const isDesktop = useMediawidth(WIDTH);

  return (
    <CardContainerStyled isDesktop={isDesktop}>
      <BasicCard
        title="Main Office"
        contens={["Miami, FL", "8350 NW 52nd Ter Ste 301 Doral, Fl 33166 ."]}
        icon={<NearMeIcon color="primary" />}
      />
      <BasicCard
        title="Make a Call"
        contens={["786 881 3081", "Call 24hrs"]}
        icon={<PhoneIcon color="primary" />}
      />
      <BasicCard
        title="Send a Mail"
        contens={["sales@avraxwindows.com", "leynier@avraxwindows.com"]}
        icon={<EmailIcon color="primary" />}
      />
    </CardContainerStyled>
  );
};

export default CardContainer;
