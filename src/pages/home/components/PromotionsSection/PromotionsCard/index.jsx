import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Slide, Box } from "@mui/material";
import {
  ContentCard,
  CardHeaderWrapper as CardHeader,
} from "./styled-component.jsx";
import { useIntersect } from "../../../../../hooks/useIntersect";
import promotion from "../../../../../assets/Promotion-web.jpg";

const PromotionsCard = () => {
  const [intersectRef, entry] = useIntersect({ threshold: 1 });

  const [promotionCardMounted, setPromotionCardMounted] = useState(false);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setPromotionCardMounted(entry?.isIntersecting);
    }
  }, [entry]);

  return (
    <Box sx={{ p: 2 }} ref={intersectRef}>
      <Slide direction="up" in={promotionCardMounted} timeout={1000}>
        <ContentCard>
          <Card sx={{ width: 335, height: 360 }}>
            <CardHeader
              title={
                <Typography variant="button" color="primary.light">
                  PROMOTIONS
                </Typography>
              }
            />
            <CardContent sx={{ padding: 0 }}>
              <img src={promotion} />
            </CardContent>
          </Card>
        </ContentCard>
      </Slide>
    </Box>
  );
};

export default PromotionsCard;
