import React from "react";
import { Grid } from "@mui/material";
import { Title, Container } from "./styled-components.jsx";
import TextTitle from "../../../../components/Title/index.jsx";
import Review from "./Review.jsx";
import { useMediawidth } from "../../../../hooks/useMediawidth.js";

const WIDTH = 1076;
const MOBILE_WIDTH = 600;

const REVIEWS = [
  {
    imageSrc:
      "https://lh3.googleusercontent.com/a/ACg8ocL9sg1KTgnLir_7P2n-ktHZNPfu8-RqXrWx6O8p5izG=w72-h72-p-rp-mo-br100",
    name: "Maria Yera",
    paragraph:
      "I had all the windows in my home replaced ... a total of 8 windows and 2 doors. Ric showed me several samples and suggested a couple. He came out a couple of times to the house to make sure everything was OK. He handled the permit and ordered the windows. The installers came on time and were very professional. It was all done in a day. The windows look absolutely gorgeous. Would I suggest Avrax Impact Windows & Doors to family and friends? 100% Yes!!!",
    star: 5,
  },

  {
    imageSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjU215-NmhUXOGHJuzGNOHok6HBNqZ_b_Se2u5pEEKumUg=w72-h72-p-rp-mo-br100",
    name: "Elegant and Cozy Suite",
    paragraph:
      "Después de buscar varios estimados, encontré esta excelente compañía; con precios muy buenos, profesionales, a tiempo, un trabajo A+, cuidan hasta el último detalle. Los recomiendo, quede súper complacida con su trabajo. El equipo completo de trabajo fueron muy amables. Gracias, Avrax.",
    star: 5,
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjU9abZTEoTse7yksJYHVpFRIf3Ii8dfWQu2Wp0yD17lUpg=w72-h72-p-rp-mo-ba3-br100",
    name: "Ches G G",
    paragraph:
      "Si estás pensando en proteger tu hogar con ventanas de impacto, no dudes en llamarlos para pedir un estimado. Son una compañía de profesionales. Te sentirás muy cómodo con su visita, presupuesto y labor. Llámalos ya!",
    star: 5,
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjVvZ6FqcpYN-UVpyit0c9-C8ZIP5vcYx9YRQ0V7EpXKkQ=w72-h72-p-rp-mo-br100",
    name: "Techoice “One Fitness Tech Choice” Inc.",
    paragraph:
      "We had the best hurricane commercial installation experience with AVRAX. Their initial Free estimate explained all the questions and commercial concerns we had. Once our first store was completed and professionally installed, we understood why Mister Glass is the best impact windows product in the market. Unbelievable quality, beautiful finish, as well as robust hurricane-proof glass. Exceptional customer experience from start to finish. We did our first business store replacement with AVRAX in 2021. Based on that initial experience, we ended up doing our 2nd and 3rd business storefront replacement with them in 2022. AVRAX always succeeded our expectations and beyond. All our stores are now hurricane-proof and more secure from intruding or robbery at each shopping plaza. Best Impact Windows protection we have ever installed. Top product (Mister Glass) and state-of-the-art quality. Thanks to all the fantastic and lovely AVRAX crew!",
    star: 5,
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/a-/ALV-UjVxCzr5oLvQo9W7HNfxQCOwPymSvwalns-ny99cctUZo3E=w72-h72-p-rp-mo-ba4-br100",
    name: "Lucille D",
    paragraph:
      "These guys are amazing. They installed for my sister so I decided to give them a call. I got 5 quotes and their prices were unbeatable. They beat out all of the local companies even factoring in traveling costs since we are in the Tampa area. These are true Miami-Dade hurricane rated impact resistant windows. These types of windows are an upcharge in my area. Install went great. Permitting was smooth process. Very happy with their services and costs. Install took a few hours. My permit was successfully completed/closed.",
    star: 5,
  },
];
const OurTeamSection = () => {
  const isDesktop = useMediawidth(WIDTH);
  const isTablet = useMediawidth(MOBILE_WIDTH);

  return (
    <Container isdesktop={isDesktop}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 1, md: 2 , lg: 3}}
      >
        <Grid
          item
          xs={3}
          sm={1}
          md={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title isdesktop={isDesktop} isMobile={!isTablet}>
            <TextTitle color="primary.light" textAlign={"right"}>
              Reviews
            </TextTitle>
          </Title>
        </Grid>
        {REVIEWS.map((review, idx) => (
          <Review
            src={review.imageSrc}
            name={review.name}
            review={review.paragraph}
            stars={review.star}
            index={idx}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default OurTeamSection;
