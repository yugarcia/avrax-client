import React from "react";
import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";

const BasicCard = ({ title, icon, contens }) => {
  return (
    <Card sx={{ width: 400, height: "100%" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          paddingLeft: "40px",
        }}
      >
        <Typography variant="menu" color="primary">
          {title}
        </Typography>
      </CardContent>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          paddingLeft: "40px",
        }}
      >
        {icon}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          {contens?.map((content, index) => (
            <Typography
              sx={{ fontSize: 14 }}
              color="primary"
              gutterBottom
              key={index}
            >
              {content}
            </Typography>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicCard;
