import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Collapse,
} from "@mui/material";
import { ContentCard, ButtonCard } from "./styled-component.jsx";

const PromotionsCollapsible = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);

  const onClick = () => {
    setOpen(!open);
  };

  return (
    <ContentCard>
      <Card sx={{ maxWidth: 345, height: 300, display: "flex" }}>
        <CardActions disableSpacing sx={{ padding: 0 }}>
          <ButtonCard
            onClick={onClick}
            text={open ? "Hide Promotions" : "Show Promotions"}
            isRotate={true}
          ></ButtonCard>
        </CardActions>

        <Collapse in={open} orientation="horizontal" timeout={1000}>
          <CardContent sx={{ width: 400 }}>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ContentCard>
  );
};

export default PromotionsCollapsible;
