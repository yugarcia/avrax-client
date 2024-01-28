import React from "react";
import TextSection from "../../../../components/TextSection/index.jsx";
import image from "../../../../assets/Why Choose Us.jpg";

const WhyChooseSection = () => {
  return (
    <>
      <TextSection
        title="AVRAX"
        titleColor="primary"
        subtitle="Why Choose Us?"
        subtitleColor="secondary.dark"
        imageSrc={image}
        paragraph="Why Choose us? As a client you are obligated to doing business in an ethical and transparent manner and that is the main reason Avrax Impact Windows & Doors ® has been successful, with a qualified and experienced team of professionals available and ready to satisfy the most demanding costumers. Avrax’s capacity to be flexible and adaptable with competitive prices has given a massive reputation in the entire community of South Florida. We can adapt our products to any customer’s budget offering Finance to any project. We are specialized in residential and commercial making us the choice number one over the rest. Any Question? CONTACT US!"
        paragraphColor="secondary.light"
        paragraphInitialColor="primary"
      />
    </>
  );
};

export default WhyChooseSection;
