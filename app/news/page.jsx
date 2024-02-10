'use client'
import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import Link from 'next/link';
import Image from "next/image";

// Create a Contentful client instance
const client = createClient({
 space: 'ui0j94rkokft', // Replace with your space ID
 accessToken: 'UgzzqHTBZpQyCpNWX0i86LScGiO8Lr8j2KcUCGPn6Ys', // Replace with your access token
 host: "cdn.contentful.com"
});

const ArticlesGrid = () => {
 const [articles, setArticles] = useState([]);

 function fetchNewsEntriesOfModel(contentTypeId) {
   client.getEntries({
     content_type: contentTypeId,
     limit: 1000,
   })
   .then((response) => {
     const mappedContentfulResponse = mapContentfulResponseToArray(response);
     setArticles(mappedContentfulResponse);
   })
   .catch(console.error);
 }

 function mapContentfulResponseToArray(response) {
   let mappedData = [];
 
   if (response && response.items && response.items.length > 0) {
     mappedData = response.items.map((article) => {
       const articleFields = article.fields;
 
       const title = articleFields.title;
       const excerpt = articleFields.excerpt || '';
       const slug = articleFields.slug || '';
 
       const body = articleFields.body?.content.map((paragraph) => 
         paragraph.content.map((textNode) => textNode.value).join('')
       ).join('\n');
 
       let coverImageUrl = '';
       if (articleFields.coverImage) {
         const coverImageId = articleFields.coverImage.sys.id;
         const coverImageAsset = response.includes.Asset.find((asset) => asset.sys.id === coverImageId);
         if (coverImageAsset) {
           coverImageUrl = `https:${coverImageAsset.fields.file.url}`;
         }
       }
 
       return { title, excerpt, body, coverImageUrl, slug };
     });
   }
 
   return mappedData;
 }

 useEffect(() => {
   fetchNewsEntriesOfModel('pxbMediaNewsArticle');
 }, []);

 return (
   <div className="bg-[#1A1A1A] text-white min-h-screen">
     <nav className="flex justify-between items-center p-4">
       <Link legacyBehavior href="/">
         <a>
           <Image src="/pxb-media-logo.png" alt="PXB Media" width={150} height={50} />
         </a>
       </Link>
       {/* Navigation placeholders for consistency */}
       <div className="flex space-x-4 text-sm">
         <Link legacyBehavior href="/#features"><a className="hover:text-gray-300">Features</a></Link>
         <Link legacyBehavior href="/#services"><a className="hover:text-gray-300">Services</a></Link>
         <Link legacyBehavior href="/#ourwork"><a className="hover:text-gray-300">Our Work</a></Link>
         <Link legacyBehavior href="/#news"><a className="hover:text-gray-300 underline decoration-[#2baaf1]">News</a></Link>
       </div>
     </nav>
     <div className="container mx-auto px-4 py-6">
       <h1 className="text-3xl font-bold text-center mb-8">PXB Media - News</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {articles.map((article, index) => (
           <div key={index} className="border border-gray-700 rounded-lg p-4 shadow-lg">
             {article.coverImageUrl && (
              <Link legacyBehavior href={`/news/${article.slug}?slug=${article.slug}`}>
               <a>
                 <img src={article.coverImageUrl} alt={article.title} className="w-full h-48 object-cover object-center mb-4 rounded"/>
               </a>
              </Link>
             )}
             <h2 className="text-xl font-bold mb-2">{article.title}</h2>
             <p className="text-gray-500 text-base">{article.excerpt}</p>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
};

export default ArticlesGrid;
