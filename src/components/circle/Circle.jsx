import React, { useState, useEffect } from 'react';
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import './App.css';

import img1 from '../../assets/images/ai.jpg';
import img2 from '../../assets/images/data anyltics.jpg';
import img3 from '../../assets/images/iot.png';
import img4 from '../../assets/images/digital learning.jpg';
import img5 from '../../assets/images/carrier councelling.jpg';

const Circle = () => {
  const [focusElement, setFocusElement] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const images = [img1, img2, img3, img4, img5];
  const info = ['Artificial Intelligence', 'Data Analytics', 'Internet Of Things', 'Digital Learning', 'Carrier Counseling'];

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive adjustments based on window width
  const getResponsiveSettings = () => {
    if (windowWidth > 1200) {
      return {
        carouselRadius: 180,
        peripheralImageRadius: 50,
        centralImageRadius: 60,
        borderWidth: 4,
      };
    } else if (windowWidth > 768) {
      return {
        carouselRadius: 140,
        peripheralImageRadius: 40,
        centralImageRadius: 50,
        borderWidth: 3,
      };
    } else {
      return {
        carouselRadius: 100,
        peripheralImageRadius: 30,
        centralImageRadius: 40,
        borderWidth: 2,
      };
    }
  };

  const { carouselRadius, peripheralImageRadius, centralImageRadius, borderWidth } = getResponsiveSettings();

  return (
    <div className="carousel">
      <div className="main">
        <FancyCarousel 
          images={images} 
          setFocusElement={setFocusElement}
          carouselRadius={carouselRadius}
          peripheralImageRadius={peripheralImageRadius}
          centralImageRadius={centralImageRadius}
          focusElementStyling={{ border: '2px solid #ba4949' }}
          autoRotateTime={5}
          borderWidth={borderWidth}
          borderHexColor={'1c364f'}
        />
        <h2> {info[focusElement]} </h2>
      </div>
    </div>
  );
}

export default Circle;
  