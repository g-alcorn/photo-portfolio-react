import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  //Initialize state
  const [state, setState] = useState(0);
  const length = slides.length;

  //Checks if there is an array of images
  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  // onClick functions for arrow buttons
  const nextSlide = () => {
    //Sets state to current img number - If current img is final element of array, it will reset to first element
    setState(state === length - 1 ? 0 : state + 1)
  }
  
  const prevSlide = () => {
    //Sets state to current img number - If current img is first element of array, it will reset to last element
    setState(state === 0 ? length - 1 : state- 1)
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
      {SliderData.map((slide, index) => {
        return (
          <div 
            className={index === state ? "slide active" : "slide"} 
            key={index}
          >
             {index === state && (
             <img src={slide.image} alt="cat" className="img"/>
             )}
          </div>
          
        )
      })}
      
    </section>
  )
};

export default ImageSlider;