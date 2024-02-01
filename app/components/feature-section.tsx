import React from 'react';

const FeatureSection = () => {
  return (
    <div className="relative bg-yellow-300 pt-12 pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4">Big scale esport events and projects, but easier.</h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="bg-black text-white font-bold py-2 px-4 rounded">
              ABOUT US
            </button>
          </div>
        </div>
      </div>
      {/* Skewed Corner */}
      <div className="absolute bottom-0 right-0 bg-[#1A1A1A] h-32 w-64" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}></div>
    </div>
  );
};

export default FeatureSection;
