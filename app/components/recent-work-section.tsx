import React, { useState } from 'react';

interface CaseItem {
  imageUrl: string;
  description: string; // Assuming every case item has a description
}

interface RecentWorkSectionProps {
  cases: CaseItem[];
}

const RecentWorkSection: React.FC<RecentWorkSectionProps> = ({ cases }) => {
  // State to track the currently selected case
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  return (
    <div className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Header for Recent Work */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Recent Work</h2>
          <div className="uppercase tracking-wide font-semibold">Cases</div>
        </div>
        
        {/* Carousel Placeholder */}
        <div className="relative">
          <div className="flex justify-center">
            {cases.map((caseItem, index) => (
              <div key={index} className="w-1/4 h-64 bg-gray-800 mx-2" onClick={() => setSelectedCase(caseItem)}>
                <img
                  className="object-cover w-full h-full"
                  src={caseItem.imageUrl}
                  alt="case item"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ))}
          </div>
          {/* Carousel Controls */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button className="text-[#00abf5] mx-2 p-2">
              <span className="text-2xl">&lt;</span>
            </button>
            <button className="text-[#00abf5] mx-2 p-2">
              <span className="text-2xl">&gt;</span>
            </button>
          </div>
        </div>
        
        {/* About This Project */}
        {selectedCase && (
          <div className="mt-12 text-center">
            <h3 className="text-3xl font-bold mb-2">About This Project</h3>
            <hr className="border-gray-700 my-4" />
            <p className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              {selectedCase.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentWorkSection;
