'use client'

import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Create a Contentful client instance
const client = createClient({
  space: 'ui0j94rkokft', // Replace with your space ID
  accessToken: 'UgzzqHTBZpQyCpNWX0i86LScGiO8Lr8j2KcUCGPn6Ys', // Replace with your access token
  host: "cdn.contentful.com"
});

const ArticleDetail = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchArticleBySlug = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'pxbMediaNewsArticle', // Replace with your Contentful content type ID
          'fields.slug': slug,
          limit: 1,
        });

        if (response.items.length > 0) {
          const item = response.items[0];
          const bodyText = item.fields.body.content
            .map((block) => block.content.map((content) => content.value).join(''))
            .join('\n');

          const articleData = {
            title: item.fields.title,
            excerpt: item.fields.excerpt,
            body: bodyText,
            coverImageUrl: item.fields.coverImage ? `https:${item.fields.coverImage.fields.file.url}` : undefined,
          };

          setArticle(articleData);
        }
      } catch (error) {
        console.error("Error fetching article by slug:", error);
        // Handle the error appropriately
      }
    };

    fetchArticleBySlug();
  }, [slug]);

  if (!article) return <div className="container mx-auto p-4 text-white">Loading...</div>;

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
      <div className="container justify-center items-center mx-auto px-4 py-6">
        <header className="mb-8">
          <Link legacyBehavior href="/news">
            <a className="text-gray-400 hover:text-gray-300">Back to news</a>
          </Link>
        </header>
        <article className=''>
          {article.coverImageUrl && (
            // Use inline styles for specific dimensions
            <img src={article.coverImageUrl} alt="Cover Image" style={{ width: '200px', height: '200px' }} className="object-cover mb-4 rounded" />
          )}
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          {article.excerpt && <p className="mb-4">{article.excerpt}</p>}
          <div className="text-gray-500 whitespace-pre-line">{article.body}</div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;
