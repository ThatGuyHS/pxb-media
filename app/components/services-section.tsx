import React from 'react';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';

const ServicesSection = () => {
  return (
    <div className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Our services</h2>
            <p className="uppercase tracking-wide font-semibold">Our knowledge</p>
          </div>
          {/* Carousel controls */}
          <div className="flex">
            <button className="mx-2 p-2 bg-yellow-400 rounded-full">
              {/* Replace with left arrow icon */}
              <span className="text-black">&lt;</span>
            </button>
            <button className="mx-2 p-2 bg-yellow-400 rounded-full">
              {/* Replace with right arrow icon */}
              <span className="text-black">&gt;</span>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 text-center">
          {/* Service Card */}
          {[...Array(6)].map((_, index) => (
            <div className="md:w-1/3 px-4 mb-8" key={index}>
              <div className="p-8 border border-gray-800 rounded-lg">
                <div className="mb-4">
                  {/* Placeholder for Icon */}
                  <div className="w-12 h-12"> 
                  <VideoCameraBackIcon fontSize='large' />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Big scale esport events and projects, but easier.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
