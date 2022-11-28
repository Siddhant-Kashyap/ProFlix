import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://www.skmvdbb.catholic.edu.au/wp-content/uploads/2017/12/English-1024x512.jpg" onDragStart={handleDragStart} alt="presentation" height='140'/>,
  <img src="https://www.nayichetana.com/wp-content/uploads/2020/09/l_hind-language-57930d14ae513_l_835x547.jpg" onDragStart={handleDragStart} alt="presentation" height='140' />,
  <img src="https://www.skmvdbb.catholic.edu.au/wp-content/uploads/2017/12/English-1024x512.jpg" onDragStart={handleDragStart} alt="presentation" height='140'/>,
  <img src="https://www.nayichetana.com/wp-content/uploads/2020/09/l_hind-language-57930d14ae513_l_835x547.jpg" onDragStart={handleDragStart} alt="presentation" height='140'/>,
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
