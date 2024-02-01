import React from "react";

// Import your SVG assets for logo and outline of Sweden
// import Logo from './path-to-your-logo.svg'; // Uncomment and use the correct path
// import SwedenOutline from './path-to-sweden-outline.svg'; // Uncomment and use the correct path

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-y">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-row justify-between flex-grow">
            <div>
              <h6 className="text-gray-400 font-bold uppercase">Pages</h6>
              <ul className="text-xs">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact Us</li>
                <li>Payments</li>
                <li>Contact</li>
              </ul>
            </div>
            {/* If there are more columns, add them here */}
          </div>
          {/* Proudly built in Sweden Text */}
          <div className="flex items-center mb-4 lg:mb-0">
            {/* Replace 'Logo' with your actual logo component */}
            {/* Logo should go here */}
            <p className="text-xs text-gray-400 ml-4">
              Proudly built in Sweden
            </p>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-8 lg:mt-4">
          {/* Sweden outline image */}
          {/* Uncomment and add your Sweden outline SVG here */}
          {/* <SwedenOutline className="hidden lg:block" /> */}
          <p className="mt-4 lg:mt-0">
            Copyright &copy; 2023 PXB MEDIA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
