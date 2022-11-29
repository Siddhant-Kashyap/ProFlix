import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";

const CardLang = (props) => {
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt={props.lang}
          />
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardLang;
