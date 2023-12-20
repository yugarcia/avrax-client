import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
} from "@mui/material";
import { ContentCard, ButtonCard } from "./styled-component.jsx";
import promotion from "../../../../../assets/Promotion-web.jpg";

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
      <Card sx={{ maxWidth: 445, height: 300, display: "flex" }}>
        <Collapse in={open} orientation="horizontal" timeout={1000}>
          <CardContent sx={{  padding:0 }}>
            <img src={promotion} />
          </CardContent>
        </Collapse>
        <CardActions disableSpacing sx={{ padding: 0 }}>
          <ButtonCard
            onClick={onClick}
            text={open ? "Hide Promotions" : "Show Promotions"}
            isRotate={true}
          ></ButtonCard>
        </CardActions>
      </Card>
    </ContentCard>
  );
};

export default PromotionsCollapsible;
