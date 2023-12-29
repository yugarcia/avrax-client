import React from "react";
import { Typography, Rating, Grid } from "@mui/material";
import { Content, ImgContainer } from "./styled-components.jsx";

const Review = ({ src, name, review, stars, index }) => {
  return (
    <Grid item xs={3} sm={1} md={1} key={index}>
      <Content>
        <ImgContainer>
          <img src={src} style={{ width: "40px" }} alt="our team" />
          <Typography component="h5" variant="menu" color="primary.light">
            {name}
          </Typography>
        </ImgContainer>
        <Rating name="read-only" value={stars} readOnly />
        <Typography
          component="p"
          variant="paragraph"
          color="secondary"
          sx={{ lineHeight: 1.5, textAlign: "justify" }}
        >
          {review}
        </Typography>
      </Content>
    </Grid>
  );
};

export default Review;
