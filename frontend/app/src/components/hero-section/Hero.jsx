import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; 

const images = [
  "https://www.edgehill.ac.uk/wp-content/uploads/2022/03/carts-new-13.jpg",
  "https://media.post.rvohealth.io/wp-content/uploads/2023/10/Hub_facebook_fitness_1200x628.jpg",
  "https://files.nccih.nih.gov/yoga-gettyimages-1204500395-16-9.jpg", 
  "https://images.squarespace-cdn.com/content/v1/60bf5f9827252223e672cb6d/5af5d0fd-3127-413a-99de-9c4d0dd0bfcd/HFB_5739CapitalBW101.jpg"
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[600px] flex items-center justify-center bg-gray-200 relative overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: 'opacity 1s ease-in-out' }}
        />
      ))}
      <div className="absolute bg-black bg-opacity-40 text-white w-full h-full flex flex-col justify-start items-center pt-12">
        <h1 className="text-5xl md:text-6xl font-bold">Welcome to Coachify</h1>
        <p className="text-lg md:text-2xl mt-2">Explore Courses, Train with Experts</p>

    
        <div className="mt-8 flex items-center w-11/12 md:w-1/2 h-14">
          <input
            type="text"
            placeholder="Search for Coaches ..."
            className="flex-grow h-full text-gray-800 rounded-l-full px-6 py-2 focus:outline-none text-base md:text-lg"
          />
          <button
            className="h-full w-14 bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center rounded-r-full hover:from-blue-600 hover:to-indigo-700 transition-transform transform hover:scale-105"
          >
            <FaSearch size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
