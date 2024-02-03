import React from "react";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";

const ServicesWeOffer = [
  {
    title: "Big scale esport events and projects, but easier.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
  },
  {
    title: "Big scale esport events and projects, but easier.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
  },
  {
    title: "Big scale esport events and projects, but easier.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
  },
  {
    title: "Big scale esport events and projects, but easier.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
  },
  {
    title: "Big scale esport events and projects, but easier.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
  },
  {
    title: "Big scale esport events and projects, but easier.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
  },
]


const ServicesSection = () => {
  return (
    <div className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Our services</h2>
            <p className="uppercase tracking-wide font-semibold">
              What we provide
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 text-center">
          {/* Service Card */}
          {ServicesWeOffer.map((item, index) => (
            <div className="md:w-1/3 px-4 mb-8" key={index}>
              <div className="p-8 border border-gray-800 rounded-lg">
                <div className="mb-4">
                  {/* Placeholder for Icon */}
                  <div className="w-12 h-12">
                    <VideoCameraBackIcon fontSize="large" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
