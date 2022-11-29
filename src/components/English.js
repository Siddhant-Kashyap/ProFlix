import React from 'react'
import { LangList } from "../Data/LanguageListLogo";
import CardLang from "./SmallComponent/CardLang";
import { Box, Container } from "@mui/material";
import Footer from './Footer';

const English = () => {
  return (
    <>
     <Container sx={{ backgroundColor: "#fffff2", minHeight: "82vh" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 4,
              width: 128,
              height: 128,
            },
          }}
        >

         {LangList.map((lang)=><CardLang image={lang.link} alt ="xyz"/>)}
       </Box>
      </Container>
      <Footer/>
    </>
  )
}

export default English