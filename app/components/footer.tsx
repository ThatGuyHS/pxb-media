import React from "react";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-8 border-y relative">
      <div className="container mx-auto px-4">
        {/* Flex container for Pages, More, and Social Icons */}
        <div className="flex flex-col items-center lg:items-start">
          {/* Pages and More sections */}
          <div className="flex flex-col lg:flex-row justify-between w-full">
            <div className="flex flex-col lg:flex-row">
              {/* Pages section */}
              <div className="mr-8">
                <h6 className="text-gray-400 font-bold uppercase">Pages</h6>
                <ul className="text-xs">
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                </ul>
              </div>
              {/* More section */}
              <div>
                <h6 className="text-gray-400 font-bold uppercase">More</h6>
                <ul className="text-xs">
                  <li>Contact Us</li>
                  <li>Payments</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            <a href="https://twitter.com/pxbmedia" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://facebook.com/phoenixblue" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/phoenixbluegg" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* Copyright text */}
        <div className="text-center text-gray-400 text-xs mt-8">
          <p>
            Copyright &copy; 2023 PXB MEDIA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
