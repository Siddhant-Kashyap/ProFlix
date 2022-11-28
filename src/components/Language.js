import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Language = () => {
  return (
    
  <div  style={{display:'flex',justifyContent:'space-evenly',marginTop:'100px',height:'570px',overflow:'hidden'}}>
  <Card raised={true} variant="outlined" sx={{width: 300,maxHeight:300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.nayichetana.com/wp-content/uploads/2020/09/l_hind-language-57930d14ae513_l_835x547.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hindi
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Programming Seekhen Hindi me
          </Typography>
          <br/>
          <Button  variant="outlined" color="success" >Go to learning</Button>
        </CardContent>
      
      </CardActionArea>
    </Card>



    <Card raised={true} variant="outlined" sx={{ width: 300 ,maxHeight:300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.skmvdbb.catholic.edu.au/wp-content/uploads/2017/12/English-1024x512.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            English
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Learn Programming in English
          </Typography>
          <br/>
          <Button  variant="outlined" color="success" >Go to learning</Button>
        </CardContent>
      </CardActionArea>
    </Card>



    
   
  </div>



  


  )
}

export default Language