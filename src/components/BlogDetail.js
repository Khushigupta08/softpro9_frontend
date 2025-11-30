import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import axios from "axios";
import { buildApiUrl } from '../utils/apiConfig';
import ScrollArrowButton from './ScrollArrowButton';

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(buildApiUrl(`/api/blogs/slug/${slug}`))
      .then((res) => setBlog(res.data))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!blog) return <div className="flex items-center justify-center min-h-screen text-gray-600">Loading blog...</div>;

  const imageSrc = blog.imgUrl
    ? blog.imgUrl
    : blog.imgFile
    ? buildApiUrl(`/uploads/${blog.imgFile}`)
    : "https://via.placeholder.com/800x400?text=No+Image";

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
            <meta property="og:title" content={blog.title} />
            <meta property="og:description" content={blog.excerpt ? blog.excerpt.replace(/<[^>]*>?/gm, '').slice(0, 200) : ''} />
            <meta property="og:image" content={imageSrc} />
            <meta property="og:url" content={window.location.origin + `/blogs/${blog.slug}`} />
            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>
          
          <div className="max-w-3xl mx-auto">
            <Link to="/blogs" className="text-purple-600 hover:text-purple-700 mb-4 inline-block">← Back to Blogs</Link>
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            {imageSrc && <img src={imageSrc} alt={blog.title} className="w-full rounded-lg mb-6" />}
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content || blog.excerpt }} />
          </div>
        </div>
      </div>
    </>
  );
}
