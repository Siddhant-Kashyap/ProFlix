import { Container, Grid } from '@mui/material'
import React from 'react'
import { CardPage } from './CardPage'
import { Carousel } from './Carousel'
import Footer from './Footer'


const LandingPage = () => {
  return (
    <>
     <Container sx={{backgroundColor:'#fffff2',minHeight:'82vh'}}>
   <Grid container >

    {/* for Hindi card */}
   <Grid item  xs={12} md={6} sx={{padding:'2rem',pt:{xs:'1rem',md:'1rem'}}}>
   <CardPage
    image="https://www.nayichetana.com/wp-content/uploads/2020/09/l_hind-language-57930d14ae513_l_835x547.jpg"
    alt="hindiCatlog"
    language="Hindi"
    description=" Programming Seekhen Hindi me"
    pages="/hindiSection"
    />

    
   </Grid>
   

   {/* for english card */}
   <Grid item  xs={12} md={6} sx={{padding:'2rem',pt:{xs:'1rem',md:'1rem'}}}>
   <CardPage
    image="https://www.skmvdbb.catholic.edu.au/wp-content/uploads/2017/12/English-1024x512.jpg"
    alt="EnglishCatlog"
    language="English"
    description=" Learn Programming in English"
    pages="/englishSection"
   />
   </Grid>
   {/* for carousel card */}
   <Grid item md={12} >
   <Carousel/>
   </Grid>
   </Grid>
   </Container>
   
   {/* footer */}
    <Footer />
    </>
  )
}

export default LandingPage