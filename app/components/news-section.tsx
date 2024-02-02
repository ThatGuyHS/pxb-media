import React from 'react';

const NewsSection = () => {
  return (
    <div className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">News</h2>
          <div className="uppercase tracking-wide font-semibold">Stay up to date</div>
        </div>
        <div className="flex justify-center space-x-4 my-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="max-w-sm">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#00abf5] skew-y-3 group-hover:skew-y-0 transition-transform duration-300"></div>
                <div className="relative bg-[#1A1A1A] p-4">
                  <div className="mb-4 h-48 bg-gray-800"></div> {/* Placeholder for the image */}
                  <h5 className="text-xl font-bold mb-2">Big scale esport events and projects, but easier.</h5>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button className="text-[#00abf5] border border-[#00abf5] rounded px-4 py-2">Read more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-[#00abf5]-400 text-black px-6 py-2 rounded font-bold">ALL THE NEWS</button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
