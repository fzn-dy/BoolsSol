import React, { useState } from 'react';

const Portfolio = () => {
  const images = [
    {
      src: './assets/bisonish_burn.jpg',
      alt: 'Stainless Steel',
      color: '#bdc3c7',
    },
    {
      src: 'https://i.loli.net/2020/01/20/YWA6RhCcESgN3Ty.png',
      alt: 'Army Green',
      color: '#218c74',
    },
    {
      src: 'https://i.loli.net/2020/01/19/4HaLyI7NQRf3teO.png',
      alt: 'Cranberry',
      color: '#dd6b7b',
    },
    {
      src: 'https://i.loli.net/2020/01/19/QVY6JSEbqiOvAp1.png',
      alt: 'Midnight Blue',
      color: '#30465c',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex justify-start items-center min-h-screen bg-gray-200">
      {/* Carousel Container */}
      <div className="relative flex">
        {/* Slides */}
        <div className="relative top-[-4em] left-40">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute w-[450px] h-[450px] transition-opacity duration-600 ease-in-out ${
                activeIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Overlays */}
        <div className="relative w-[36em] h-[18em]">
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full origin-left transition-transform duration-1200 ease-[cubic-bezier(0.77, 0, 0.175, 1)]"
              style={{
                backgroundColor: image.color,
                zIndex: activeIndex === index ? 10 : 1,
                transform: activeIndex === index ? 'scaleX(1)' : 'scaleX(0)',
              }}
            />
          ))}
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col justify-center items-start ml-24 space-y-4">
          {images.map((image, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavClick(index)}
                className={`text-2xl font-serif text-gray-500 transition-colors duration-300 ${
                  activeIndex === index ? 'text-black cursor-default' : 'hover:text-black'
                }`}
              >
                {image.alt}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
