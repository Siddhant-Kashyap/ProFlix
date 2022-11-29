import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CardPage = (props) => {
  const history = useNavigate();
  return (
    <> 
    <Card sx={{ maxWidth: 345,ml:{md:'5rem'},mt:{md:'3rem'},mb:{md:'2rem'}}}>
    <CardActionArea onClick={()=>history(props.pages)} >
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt={props.alt}
      />
      <CardContent >
        <Typography gutterBottom variant="h5"  component="div" sx={{textAlign:'center',fontWeight:'bold'}}>
        {props.language}
        </Typography>
        <Typography variant="h6" color="text.secondary"sx={{textAlign:'center'}}>
       {props.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions sx={{ml:{md:14,xs:10}}}>
      <Button size="small" color="primary" onClick={()=>history(props.pages)}>
      Go to learning
      </Button>
    </CardActions>
  </Card></>
  )
}
