import { Box, Container } from "@mui/material";
import React from "react";
import { LangList } from "../Data/LanguageListLogo";
import CardLang from "./SmallComponent/CardLang";

const Hindi = () => {
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
        
          {/* <CardLang image={LList.Js} alt="JavaScript" />

          <CardLang image={LList.java} alt="Java" />
          <CardLang image={LList.cpp} alt="C++" />
          <CardLang image={LList.CSharp} alt="csharp" />
          <CardLang image={LList.Node} alt="NodeJS" />
          <CardLang image={LList.python} alt="python" /> */}
         
        </Box>
      </Container>
    </>
  );
};

export default Hindi;
