import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Slide, Box } from "@mui/material";
import {
  ContentCard,
  CardHeaderWrapper as CardHeader,
} from "./styled-component.jsx";
import { useIntersect } from "../../../../../hooks/useIntersect";

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
          <Card sx={{ width: 1, height: 300 }}>
            <CardHeader
              title={
                <Typography variant="button" color="primary.light">
                  PROMOTIONS
                </Typography>
              }
            />
            <CardContent>
              <Typography color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </ContentCard>
      </Slide>
    </Box>
  );
};

export default PromotionsCard;
