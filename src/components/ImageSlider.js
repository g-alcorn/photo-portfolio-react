import React, { useState } from 'react';
import { SliderData } from './SliderData';

function ImageSlider() {
  const [state, setState] = useState(0);
  //const length = slides.length;

  return (
    <div>
      {SliderData.map((slide, index) => {
        return (
          <img src={slide.image} alt="cat"/>
        )
      })}
    </div>
  )
};

export default ImageSlider;