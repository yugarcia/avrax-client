import React, { forwardRef } from "react";
import { Card, CardContent, Typography, Slide } from "@mui/material";
import {
  ContentCard,
  CardHeaderWrapper as CardHeader,
} from "./styled-component.jsx";

const PromotionsCard = forwardRef(({ isMounted }, ref) => {
  return (
    <Slide direction="up" in={isMounted} mountOnEnter unmountOnExit>
      <ContentCard ref={ref}>
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
  );
});

export default PromotionsCard;
