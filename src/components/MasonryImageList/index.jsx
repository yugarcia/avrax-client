import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "./styled-components.jsx";
import { useMediawidth } from "../../hooks/useMediawidth.js";

const MOBILE_WIDTH = 600;
const WIDTH = 1076;

const MasonryImageList = ({ items }) => {
  const isDesktop = useMediawidth(WIDTH);
  const isMobile = useMediawidth(MOBILE_WIDTH);
  const [cols, setCols] = useState(4);

  useEffect(() => {
    if (isDesktop) {
      setCols(4);
    } else if (isMobile) {
      setCols(3);
    } else {
      setCols(2);
    }
  }, [isMobile, isDesktop]);

  return (
    <Container
      style={{
        backgroundColor: "primary",
      }}
    >
      <Box sx={{ width: "100%", height: 750, overflowY: "scroll" }}>
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
