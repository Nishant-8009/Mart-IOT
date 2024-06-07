import React from 'react'
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import './App.css';


import img1 from '../../assets/images/ai.jpg';
import img2 from '../../assets/images/data anyltics.jpg';
import img3 from '../../assets/images/iot.jpg';
import img4 from '../../assets/images/digital learning.jpg';
import img5 from '../../assets/images/bg.jpg';
import { useState } from 'react';

const Circle = () => {
    const [focusElement, setFocusElement] = useState(0);
    const images = [img1,img2,img3,img4,img5];

    
    const info = [ 'Artificial Intelligence','Data Analytics', 'Internet Of Things', 'Digital Learning','Carrier Councelling'];
  return (
    <div className="carousel">
    <div className='main'>
    
   <FancyCarousel 
   images={images} 
   setFocusElement={setFocusElement}
   carouselRadius={222}
      peripheralImageRadius={50}
      centralImageRadius={100}
      focusElementStyling={{border: '2px solid #ba4949'}}
      autoRotateTime={5}
      borderWidth={4}
      borderHexColor={'1c364f'}
   />
        <h2> {info[focusElement]} </h2>
      </div>
  </div>
  )
}

export default Circle