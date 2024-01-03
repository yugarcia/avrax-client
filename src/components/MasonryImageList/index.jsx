import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import Container from "../Container";
import { FilterList, FilterItem } from "./styled-components.jsx";
import { useMediawidth } from "../../hooks/useMediawidth.js";
import { Typography } from "@mui/material";

const MOBILE_WIDTH = 600;
const WIDTH = 1076;
const EXTRA_WIDTH = 1500;

const MasonryImageList = ({ items, onFilterClick }) => {
  const isExtraWidth = useMediawidth(EXTRA_WIDTH);
  const isDesktop = useMediawidth(WIDTH);
  const isMobile = useMediawidth(MOBILE_WIDTH);
  const [cols, setCols] = useState(4);

  useEffect(() => {
    if (isExtraWidth) {
      setCols(5);
      return;
    } else if (isDesktop) {
      setCols(3);
      return;
    } else if (isMobile) {
      setCols(3);
      return;
    } else {
      setCols(2);
    }
  }, [isMobile, isDesktop, isExtraWidth]);

  return (
    <Container
      style={{
        backgroundColor: "primary",
      }}
    >
      <Box sx={{ width: "100%", height: 750}}>
        <FilterList>
          <FilterItem onClick={() => onFilterClick()}>
            <Typography variant="menu" color="primary">
              All
            </Typography>
          </FilterItem>
          <FilterItem onClick={() => onFilterClick("image1")}>
            <Typography variant="menu" color="primary">
              {" "}
              image 1
            </Typography>
          </FilterItem>
          <FilterItem onClick={() => onFilterClick("image2")}>
            <Typography variant="menu" color="primary">
              image 2
            </Typography>
          </FilterItem>
        </FilterList>
        <ImageList variant="masonry" cols={cols} gap={8}>
          {items &&
            items.map((item) => (
              <ImageListItem key={item}>
                <img
                  srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item}?w=248&fit=crop&auto=format`}
                  alt={item}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
        </ImageList>
      </Box>
    </Container>
  );
};

export default MasonryImageList;
