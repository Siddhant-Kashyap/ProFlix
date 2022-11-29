import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";

const CardLang = (props) => {
  return (
    <>
      <Card sx={{pl:'1rem',pr:'1rem'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="144"
            image={props.image}
            alt={props.lang}
          />
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardLang;
