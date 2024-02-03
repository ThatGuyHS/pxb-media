import React from 'react';
import { NewsCard } from '@/components/news-card';




const NewsSection: React.FC = () => {
  const newsItems = [
    {
      imageUrl: "/pxb-media-logo.png", // Replace with your image path
      title: "Big scale esport events and projects, but easier.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    // ... other news items
  ];

  return (
    <div className="bg-[#1A1A1A] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 text-white">News</h2>
          <div className="uppercase tracking-wide font-semibold text-[#00abf5]">Stay up to date</div>
        </div>
        <div className="flex flex-wrap -mx-2">
          {newsItems.map((item, index) => (
            <NewsCard 
             
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-[#00abf5] text-black px-6 py-2 rounded font-bold">ALL THE NEWS</button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
