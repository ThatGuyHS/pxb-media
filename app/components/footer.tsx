import React from "react";
import Image from "next/image";
import Logo from '../assets/logo.svg'; // Adjust the path as necessary
import SwedenOutline from '../../public/sweden.svg' // Adjust the path as necessary
import SwedenFlag from '../../public/Flag_of_Sweden.svg' // Adjust the path as necessary
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-8 border-y relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex">
            <div className="mr-8">
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
              <div className="flex space-x-3 pt-10">
            {/* Social Icons */}
            <a href="https://twitter.com/pxbmedia" className="hover:text-gray-300">
            <FaTwitter className="hover:text-gray-300" />
            </a>
            <a href="https://facebook.com/phoenixblue" className="hover:text-gray-300">
            <FaFacebookF className="hover:text-gray-300" />
            </a>
            <a href="https://instagram.com/phoenixbluegg" className="hover:text-gray-300">
            <FaInstagram className="hover:text-gray-300" />
            </a>
          </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-8 lg:mt-4">
          <p>
            Copyright &copy; 2023 PXB MEDIA. All rights reserved.
          </p>
        </div>
      </div>
      {/* Sweden map at the bottom right */}
      <div className="absolute right-4 bottom-4 lg:right-10 lg:bottom-10 transform rotate-5 flex items-center justify-center" style={{ width: '100px', height: '100px' }}>
          <Image src={SwedenOutline} alt="Sweden outline" className="filter grayscale absolute z-10" width={300} height={300} />
        </div>
    </footer>
  );
};

export default Footer;
