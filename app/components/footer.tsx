import React from "react";
import Image from "next/image";
import Logo from '../assets/logo.svg'; // Adjust the path as necessary
import SwedenOutline from '../../public/sweden.svg' // Adjust the path as necessary
import SwedenFlag from '../../public/Flag_of_Sweden.svg' // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-y relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex">
            {/* Links grouped together on the left */}
            <div className="mr-8"> {/* Adjust margin as needed */}
              <h6 className="text-gray-400 font-bold uppercase">Pages</h6>
              <ul className="text-xs">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
              </ul>
            </div>
            <div>
              <h6 className="text-gray-400 font-bold uppercase">More</h6>
              <ul className="text-xs">
                <li>Contact Us</li>
                <li>Payments</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center mb-4 lg:mb-0 lg:ml-auto"> {/* Adjust for proper alignment */}
            <p className="text-xs text-gray-400 ml-4">
              Proudly built in Sweden
            </p>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-8 lg:mt-4">
          <p>
            Copyright &copy; 2023 PXB MEDIA. All rights reserved.
          </p>
        </div>
      </div>
      {/* Sweden map at the bottom right */}
      <div className="absolute right-4 bottom-4 lg:right-10 lg:bottom-10 transform rotate-3 flex items-center justify-center" style={{ width: '100px', height: '100px' }}>
          <Image src={SwedenOutline} alt="Sweden outline" className="filter grayscale absolute z-10" width={100} height={100} />
          <Image src={SwedenFlag} alt="Sweden flag" className="absolute z-20 opacity-75" width={100} height={100} />
        </div>
    </footer>
  );
};

export default Footer;
