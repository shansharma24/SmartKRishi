import React, { useState } from 'react';
import { sliderData } from '../assets/assets';
const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sliderData.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Features'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>AWESOME FEATURES</h1>
      <p className='text-center text-gray-500 max-w-80 mb-8 mx-auto'>Every Feature, Built for Farmers</p>

      {/* Slider Buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button onClick={handlePrev} className='p-3 bg-gray-200 rounded-full mr-2 hover:bg-gray-300 transition-colors' aria-label='Previous'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={handleNext} className='p-3 bg-gray-200 rounded-full mr-2 hover:bg-gray-300 transition-colors' aria-label='Next'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {sliderData.map((box, index) => (
            <div key={index} className="flex-shrink-0 w-1/3 p-4">
              <div
                className={`
                  flex flex-col items-center p-8 rounded-[4rem] shadow-lg 
                  ${box.color} text-white
                  transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl 
                  cursor-pointer
                  text-center
                `}
              >
                <div className="w-16 h-16 bg-white rounded-full mb-3 flex items-center justify-center overflow-hidden">
                  <img src={box.image_src} alt={box.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{box.title}</h3>
                <p className="text-base leading-relaxed text-gray-800">{box.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
