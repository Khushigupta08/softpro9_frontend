import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import axios from "axios";
import he from 'he';
import 'react-quill-new/dist/quill.snow.css';
import ScrollArrowButton from './ScrollArrowButton';

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/slug/${slug}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!blog) return <div className="flex items-center justify-center min-h-screen text-gray-600">Loading blog...</div>;

  // Image source check: URL ya file, warna placeholder
  const imageSrc = blog.imgUrl
    ? blog.imgUrl
    : blog.imgFile
    ? `http://localhost:5000/uploads/${blog.imgFile}`
    : "https://via.placeholder.com/800x400?text=No+Image";

  // react-quill
  const safeHTML = he.decode(blog.excerpt);

  return (
    <>
              <ScrollArrowButton />

    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Helmet>
          <title>{blog.title} | SoftPro9 Academy</title>
          <meta name="description" content={blog.excerpt ? blog.excerpt.replace(/<[^>]*>?/gm, '').slice(0, 155) : 'Read this article on SoftPro9 Academy.'} />
          <meta name="keywords" content={`${blog.tag || ''}, ${blog.category || ''}, SoftPro9 blog`} />
          <link rel="canonical" href={window.location.origin + `/blogs/${blog.slug}`} />

          {/* Open Graph */}
          <meta property="og:title" content={blog.title} />
          <meta property="og:description" content={blog.excerpt ? blog.excerpt.replace(/<[^>]*>?/gm, '').slice(0, 200) : ''} />
          <meta property="og:image" content={imageSrc} />
          <meta property="og:url" content={window.location.origin + `/blogs/${blog.slug}`} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={blog.title} />
          <meta name="twitter:description" content={blog.excerpt ? blog.excerpt.replace(/<[^>]*>?/gm, '').slice(0, 200) : ''} />

          {/* BlogPosting JSON-LD */}
          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "${blog.title.replace(/"/g, '\\"')}",
              "image": ["${imageSrc}"],
              "author": {"@type": "Person", "name": "${blog.author || 'SoftPro9'}"},
              "datePublished": "${blog.createdAt || new Date().toISOString()}",
              "description": "${(blog.excerpt || '').replace(/\n/g, ' ').replace(/"/g, '\\"').replace(/<[^>]*>?/gm, '').slice(0, 300)}",
              "mainEntityOfPage": {"@type": "WebPage", "@id": "${window.location.origin + `/blogs/${blog.slug}`}"}
            }`}
          </script>
        </Helmet>
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blogs
          </Link>
        </div>

        {/* Blog Content Card */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
          {/* Featured Image */}
          <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-gray-200">
            <img
              src={imageSrc}
              alt={blog.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x400?text=Image+Not+Found";
              }}
            />
          </div>

          {/* Blog Content */}
          <div className="p-6 sm:p-8 md:p-10">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Category:</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-semibold mr-2">Tag:</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  {blog.tag}
                </span>
              </div>
            </div>

            {/* Blog Description - Quill Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-blockquote:text-gray-700 prose-code:text-gray-800 prose-pre:bg-gray-100 prose-img:rounded-lg prose-img:shadow-md"
              dangerouslySetInnerHTML={{ __html: safeHTML }}
            />
          </div>
        </article>
      </div>
    </div>
    </>
);
}