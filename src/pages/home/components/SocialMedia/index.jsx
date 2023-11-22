import React from "react";
import { Container } from "./styled-components.jsx";
import Icon from "./Icon.jsx";

const SocialMedia = () => {
  return (
    <Container>
      <Icon icon="facebook" />
      <Icon icon="twitter" />
      <Icon icon="instagram" />
      <Icon icon="linkedin" />
    </Container>
  );
};

export default SocialMedia;
