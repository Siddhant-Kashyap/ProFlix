import { Container, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
    <Container maxWidth='100%' sx={{backgroundColor:'#1b0b54',padding:'1rem'}}>
    <Typography sx={{color:'white',textAlign:'center'}} >Made with love and to Support the DEV community </Typography>
    <Typography sx={{color:'white',textAlign:'center'}}>By Siddhant Kashyap and Rashid Hussain</Typography>
    </Container>
    </>
  )
}

export default Footer