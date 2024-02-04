'use client'

import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

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

  if (!article) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <Link legacyBehavior href="/news">
          <a className="text-blue-500">Back to news</a>
        </Link>
      </header>
      <article>
        {article.coverImageUrl && (
          <img src={article.coverImageUrl} alt="Cover Image" className="w-full h-auto object-cover mb-4" />
        )}
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        {article.excerpt && <p className="mb-4">{article.excerpt}</p>}
        <div className="text-gray-700 whitespace-pre-line">{article.body}</div>
      </article>
    </div>
  );
};

export default ArticleDetail;
