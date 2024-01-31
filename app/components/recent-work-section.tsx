import React from 'react';

const RecentWorkSection = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Header for Recent Work */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Recent Work</h2>
          <div className="uppercase tracking-wide font-semibold">Cases</div>
        </div>
        
        {/* Carousel Placeholder */}
        <div className="relative">
          {/* Replace with a proper carousel component */}
          <div className="flex justify-center">
            <div className="w-1/4 h-64 bg-gray-800 mx-2"></div>
            <div className="w-1/4 h-64 bg-gray-800 mx-2"></div>
            <div className="w-1/4 h-64 bg-gray-800 mx-2"></div>
          </div>
          {/* Carousel Controls */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button className="text-yellow-400 mx-2 p-2">
              <span className="text-2xl">&lt;</span>
            </button>
            <button className="text-yellow-400 mx-2 p-2">
              <span className="text-2xl">&gt;</span>
            </button>
          </div>
        </div>
        
        {/* About This Project */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold mb-2">About This Project</h3>
          <hr className="border-gray-700 my-4" />
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <p className="md:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="md:w-1/2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorkSection;
