import React, { useState, useEffect } from 'react';
import '../styles/components/Testimonial.css';
import testimonials from '../assets/Data/Testimonial';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
        <div className="testimonial-content">
          <div className="text-container">
            <div><img src="/assets/images/tcover.png" alt="Wedding Celebration" /></div>
            <div><h2 className="testimonial-title">{testimonials[currentSlide].title}</h2>
            <p>{testimonials[currentSlide].content}</p></div>
             <div className="slider-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
          </div>
        </div>
  );
};

export default TestimonialSlider;