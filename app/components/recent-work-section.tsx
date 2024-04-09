import React, { useState } from "react";

interface CaseItem {
  imageUrl: string;
  description: string;
}

interface RecentWorkSectionProps {
  cases: CaseItem[];
}

const RecentWorkSection: React.FC<RecentWorkSectionProps> = ({ cases }) => {
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  return (
    <div className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Header for Recent Work */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Recent Work</h2>
          <div className="uppercase tracking-widest font-semibold text-gray-400">Showcase</div>
        </div>

        {/* Carousel/Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => setSelectedCase(caseItem)}
            >
              <img
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-110"
                src={caseItem.imageUrl}
                alt="Showcase item"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                <p className="text-sm font-medium px-4">View Project</p>
              </div>
            </div>
          ))}
        </div>

        {/* About This Project */}
        {selectedCase && (
          <div className="mt-12 text-center">
            <h3 className="text-3xl font-bold mb-4">About This Project</h3>
            <hr className="border-gray-700 my-4" />
            <p className="mx-auto max-w-4xl text-lg leading-relaxed">
              {selectedCase.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentWorkSection;
