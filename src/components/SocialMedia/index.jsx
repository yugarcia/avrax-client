import React from "react";
import { SocialMediaContainer } from "./styled-components.jsx";
import Icon from "./Icon.jsx";

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <Icon icon="facebook" />
      <Icon icon="twitter" />
      <Icon icon="instagram" />
      <Icon icon="linkedin" />
    </SocialMediaContainer>
  );
};

export default SocialMedia;
