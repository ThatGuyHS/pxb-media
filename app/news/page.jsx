'use client'
import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';

// Create a Contentful client instance
const client = createClient({
 space: 'ui0j94rkokft', // Replace with your space ID
 accessToken: 'UgzzqHTBZpQyCpNWX0i86LScGiO8Lr8j2KcUCGPn6Ys', // Replace with your access token
 host: "cdn.contentful.com"
});

const ArticlesGrid = () => {
 const [articles, setArticles] = useState([]);

 // Function to fetch news entries from Contentful
 function fetchNewsEntriesOfModel(contentTypeId) {
   client.getEntries({
     content_type: contentTypeId, // Filter by Content Type ID
     limit: 1000, // Optional: Adjust the limit as needed, up to 1000
   })
   .then((response) => {
     const mappedContentfulResponse = mapContentfulResponseToArray(response);
     setArticles(mappedContentfulResponse);
     console.log(mappedContentfulResponse, "mappedContentfulResponseWithNews"); // Log here to avoid dependency on selectedCases state
   })
   .catch(console.error); // Handle errors
 }

 // Function to map the Contentful response to an array
 function mapContentfulResponseToArray(response) {
   let mappedData = [];
 
   if (response && response.items && response.items.length > 0) {
     mappedData = response.items.map((article) => {
       const articleFields = article.fields;
 
       // Extracting the title and excerpt
       const title = articleFields.title;
       const excerpt = articleFields.excerpt || '';
 
       // Extracting the body text
       const body = articleFields.body?.content.map((paragraph) => 
         paragraph.content.map((textNode) => textNode.value).join('')
       ).join('\n');
 
       // Mapping the cover image URL
       let coverImageUrl = '';
       if (articleFields.coverImage) {
         const coverImageId = articleFields.coverImage.sys.id;
         const coverImageAsset = response.includes.Asset.find((asset) => asset.sys.id === coverImageId);
         if (coverImageAsset) {
           coverImageUrl = `https:${coverImageAsset.fields.file.url}`;
         }
       }
 
       return { title, excerpt, body, coverImageUrl };
     });
   }
 
   return mappedData;
 }

 useEffect(() => {
   // Replace 'your_content_type_id' with the actual Content Type ID from Contentful
   fetchNewsEntriesOfModel('pxbMediaNewsArticle');
 }, []);

 return (
   <div className="container mx-auto p-4">
     {/* Header section with logo and h1 */}
     <header className="flex justify-between items-center mb-8">
       <div className="logo">
         {/* Replace 'path/to/your/logo.svg' with the actual path to your logo image */}
         <img src="/pxb-media-logo.png" alt="Logo" className="h-10" />
       </div>
       <h1 className="text-2xl font-bold text-center flex-1">PXB Media - News</h1>
     </header>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {articles.map((article, index) => (
         <div key={index} className="border rounded-lg p-4 shadow-lg">
           {article.coverImageUrl && (
             <img src={article.coverImageUrl} alt={article.title} className="w-full h-48 object-cover object-center mb-4 rounded"/>
           )}
           <h2 className="text-xl font-bold mb-2">{article.title}</h2>
           <p className="text-gray-700 text-base">{article.excerpt}</p>
         </div>
       ))}
     </div>
   </div>
 );
};

export default ArticlesGrid;
