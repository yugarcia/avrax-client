import React from "react";
import { SocialMediaContainer } from "./styled-components.jsx";
import Icon from "./Icon.jsx";

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <Icon icon="facebook" link="https://m.facebook.com/avraxwindows" />
      <Icon icon="twitter" link="https://x.com//CesarEs59421082" />
      <Icon icon="instagram" link="https://www.instagram.com/avrax.windows" />
      <Icon icon="youtube" link="https://www.youtube.com/@AvraxImpactWindows" />
    </SocialMediaContainer>
  );
};

export default SocialMedia;
