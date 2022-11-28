import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { LList } from '../Data/LanguageListLogo';

const handleDragStart = (e) => e.preventDefault();



const items = [
  <img src={LList.cpp} onDragStart={handleDragStart} alt="presentation" height='140'/>,
  <img src={LList.java} onDragStart={handleDragStart} alt="presentation" height='140' />,
  <img src={LList.python} onDragStart={handleDragStart} alt="presentation" height='140'/>,
  <img src={LList.Js} onDragStart={handleDragStart} alt="presentation" height='140'/>,
  <img src= {LList.CSharp}onDragStart={handleDragStart} alt="presentation" height='140'/>,
  <img src= {LList.Node}onDragStart={handleDragStart} alt="presentation" height='140'/>,
];

export const Carousel = () => {
    const responsive = {
        0: {
          items: 2,
        },
        512: {
          items: 4,
        },
      };
  return (
    <>
    <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    
    </>
  )
  
}
