'use client'

import React, { useRef } from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import FeatureSection from './components/feature-section';
import ServicesSection from './components/services-section';
import RecentWorkSection from './components/recent-work-section';
import NewsSection from './components/news-section';
import Footer from './components/footer';

const HeroSection = () => {
  // Create refs for each section
  const featureSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const recentWorkSectionRef = useRef(null);
  const newsSectionRef = useRef(null);

  // Function to scroll to a ref
  const scrollToSection = (sectionRef: any) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <div className="relative bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <source src="/festa.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute z-20 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6 relative z-30">
        {/* Navigation */}
        <nav className="flex justify-between items-center">
          <div className="text-3xl">PXB MEDIA</div>
          <div className="flex space-x-4">
            <a href="#!" onClick={() => scrollToSection(featureSectionRef)} className="hover:text-gray-300">Features</a>
            <a href="#!" onClick={() => scrollToSection(servicesSectionRef)} className="hover:text-gray-300">Services</a>
            <a href="#!" onClick={() => scrollToSection(recentWorkSectionRef)} className="hover:text-gray-300">Our work</a>
            <a href="#!" onClick={() => scrollToSection(newsSectionRef)} className="hover:text-gray-300">News</a>
            {/* Implement scrolling for the Contact section if you have a ref for it */}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold text-center mb-6">
            Your crazy cool title about your crazy cool site
          </h1>
          <div className="flex space-x-3">
            {/* Social Icons */}
            <FaTwitter className="hover:text-gray-300" />
            <FaFacebookF className="hover:text-gray-300" />
            <FaInstagram className="hover:text-gray-300" />
            <FaLinkedinIn className="hover:text-gray-300" />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <span className="flex items-center justify-center text-3xl animate-bounce">
            <IoIosArrowDown />
          </span>
          <p className="text-center">SCROLL DOWN</p>
        </div>
      </div>
    </div>
    <div ref={featureSectionRef}><FeatureSection /></div>
    <div ref={servicesSectionRef}><ServicesSection /></div>
    <div ref={recentWorkSectionRef}><RecentWorkSection /></div>
    <div ref={newsSectionRef}><NewsSection /></div>
    <Footer />
    </>
  );
};

export default HeroSection;
