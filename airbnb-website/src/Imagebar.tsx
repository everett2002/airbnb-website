import React, { useState, useEffect } from 'react';
import './index.css'; // Import your CSS file
import whirlpool from './assets/whirlpool.jpg'
import forestwaterfall from './assets/forest-waterfall.jpg'
import golf from './assets/golf.jpg'

const ImageBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='overflow-hidden bg-gray-900'>
    <div className="flex scroll-smooth space-x-5" style={{ transform: `translateX(-${640-(scrollPosition*0.25)}px)` }}>
      <img src={whirlpool} className='w-[50vh] md:w-[35vw]' alt="Image 1" />
      <img src={golf} className='w-[50vh] md:w-[35vw]' alt="Image 2" />
      <img src={forestwaterfall} className='w-[50vh] md:w-[35vw]' alt="Image 3" />
      <img src={whirlpool} className='w-[50vh] md:w-[35vw]' alt="Image 3" />
      {/* Add more images here */}
    </div>
    </div>
  );
};

export default ImageBar;
