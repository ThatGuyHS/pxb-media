'use client'

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import FeatureSection from "./components/feature-section";
import ServicesSection from "./components/services-section";
import RecentWorkSection from "./components/recent-work-section";
import NewsSection from "./components/news-section";
import Footer from "./components/footer";
import Image from "next/image";

// Import the Contentful client
const contentful = require('contentful');

const HeroSection = () => {
  const [selectedCases, setSelectedCases] = useState([]);
  const [selectedNews, setSelectedNews] = useState([]);

  // Create a Contentful client instance
  const client = contentful.createClient({
    space: 'ui0j94rkokft', // Replace with your space ID
    accessToken: 'UgzzqHTBZpQyCpNWX0i86LScGiO8Lr8j2KcUCGPn6Ys', // Replace with your access token
    host: "cdn.contentful.com"
  });

  function mapContentfulResponseToArray(response: any) {
    let mappedData = [];
  
    if (response && response.items && response.items.length > 0) {
      mappedData = response.items.map((article: any) => {
        const articleFields = article.fields;
  
        // Extracting the title and excerpt
        const title = articleFields.title;
        const excerpt = articleFields.excerpt;
  
        // Extracting the body text
        const body = articleFields.body.content.map((paragraph: any) => 
          paragraph.content.map((textNode: any) => textNode.value).join('')
        ).join('\n');
  
        // Mapping the cover image URL
        let coverImageUrl = '';
        const coverImageId = articleFields.coverImage.sys.id;
        const coverImageAsset = response.includes.Asset.find((asset: any) => asset.sys.id === coverImageId);
        if (coverImageAsset) {
          coverImageUrl = `https:${coverImageAsset.fields.file.url}`;
        }
  
        return { title, excerpt, body, coverImageUrl };
      });
    }
  
    return mappedData;
  }

  function mapContentfulResponse(response: any) {
    const { items, includes: { Asset: assets } } = response;
    const mappedItems = items.map((item: any) => {
      const description = item.fields.description.content.map((block: any) => {
        return block.content.map((content: any) => content.value).join('');
      }).join('\n');
      const imageId = item.fields.titleImage.sys.id;
      const imageAsset = assets.find((asset: any) => asset.sys.id === imageId);
      const imageUrl = imageAsset ? `https:${imageAsset.fields.file.url}` : null;
      return {
        description,
        imageUrl
      };
    });
    return mappedItems;
  }

  function fetchEntriesOfModel(contentTypeId: any) {
    client.getEntries({
      content_type: contentTypeId, // Filter by Content Type ID
      limit: 1000, // Optional: Adjust the limit as needed, up to 1000
    })
    .then((response: any) => {
      console.log(response, "response");
    })
    .catch(console.error); // Handle errors
  }

  function fetchNewsEntriesOfModel(contentTypeId: any) {
    client.getEntries({
      content_type: contentTypeId, // Filter by Content Type ID
      limit: 1000, // Optional: Adjust the limit as needed, up to 1000
    })
    .then((response: any) => {
      const mappedContentfulResponse = mapContentfulResponseToArray(response);
      setSelectedNews(mappedContentfulResponse);
      console.log(mappedContentfulResponse, "mappedContentfulResponseWithNews"); // Log here to avoid dependency on selectedCases state
    })
    .catch(console.error); // Handle errors
  }

  useEffect(() => {
    const contentTypeId = 'pxbMediaCase'; // Replace with your model's Content Type ID
    fetchEntriesOfModel(contentTypeId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    console.log(selectedCases); // This will log the updated state whenever selectedCases changes
  }, [selectedCases]);

  useEffect(() => {
    const contentTypeId = 'pxbMediaNewsArticle'; // Replace with your model's Content Type ID
    fetchNewsEntriesOfModel(contentTypeId);
  }, []); // Empty dependency array means this effect runs once after the initial render
  

  const featureSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const recentWorkSectionRef = useRef(null);
  const newsSectionRef = useRef(null);
  const [selectedLink, setSelectedLink] = useState("/");

  const scrollToSection = (sectionRef: any) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  

  return (
    <>
      <div className="relative bg-[#1A1A1A] text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <source src="/festa.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute z-20 w-full h-full bg-[#1A1A1A] opacity-50"></div>

        <div className="container mx-auto px-4 py-6 relative z-30">
          <nav className="flex justify-between items-center">
            <div className="text-3xl">

              <Image src="/pxb-media-logo.png" alt="PXB Media" width={150} height={50} />
            </div>
            <div className="flex space-x-4">
            <a
                className={`hover:text-gray-300 ${
                  selectedLink === "#features" ? "underline decoration-[#2baaf1]" : ""
                }`}
                href="#features"
                onClick={() => {
                  setSelectedLink("#features");
                  scrollToSection(featureSectionRef);
                }}
              >
                Features
              </a>
              <a
                className={`hover:text-gray-300 ${
                  selectedLink === "#services" ? "underline decoration-[#2baaf1]" : ""
                }`}
                href="#services"
                onClick={() => { 
                  setSelectedLink("#services");
                  scrollToSection(servicesSectionRef)}}
              >
                Services
              </a>
              <a
                className={`hover:text-gray-300 ${
                  selectedLink === "#ourwork" ? "underline decoration-[#2baaf1]" : ""
                }`}
                href="#ourwork"
                onClick={() => {
                  setSelectedLink("#ourwork");
                  scrollToSection(recentWorkSectionRef)}}
              >
                Our work
              </a>
              <a
                className={`hover:text-gray-300 ${
                  selectedLink === "#news" ? "underline decoration-[#2baaf1]" : ""
                }`}
                href="#news"
                onClick={() => {
                  setSelectedLink("#news");
                  scrollToSection(newsSectionRef)}
              
              }
              >
                News
              </a>
            </div>
          </nav>

          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-center mb-6">
              We bring your ideas to life
            </h1>
          </div>

          <button onClick={() => scrollToSection(featureSectionRef)}>
            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <span className="flex items-center justify-center text-3xl animate-bounce">
                <IoIosArrowDown />
              </span>
              <p className="text-center">READ MORE</p>
            </div>
          </button>
        </div>
      </div>

      <div ref={featureSectionRef}>
        <FeatureSection />
      </div>
      <div ref={servicesSectionRef}>
        <ServicesSection />
      </div>
      
      {selectedCases.length > 0 && (
        <div ref={recentWorkSectionRef}>
          <RecentWorkSection cases={selectedCases} />
        </div>
      )}
      <div ref={newsSectionRef}>
        <NewsSection />
      </div>
      <Footer />
    </>
  );
};

export default HeroSection;
