import React, { useState, useEffect } from 'react';

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    require("../../images/s1.jpg"),
    require("../../images/s2.jpg"),
    require("../../images/s3.jpg"),
    require("../../images/s4.jpg"),
    require("../../images/s5.jpg"),
    require("../../images/s3.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]); // Added `images.length` to dependency array

  return (
    <div className='home'>
      <div className="slider">
        {images.map((imgSrc, index) => (
          <div key={index} className={`slide ${index === slideIndex ? "active" : ""}`}>
            <img src={imgSrc} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div id="heading">
        <h1>Pallavi</h1>
        <h4>Hotels & Resorts</h4>
      </div>
    </div>
  );
}
