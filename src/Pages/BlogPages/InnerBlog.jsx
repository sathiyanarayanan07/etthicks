// src/Pages/BlogPages/InnerBlog.jsx
import React, { useState } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";

function InnerBlog() {
  const location = useLocation();
  const blog = location.state?.blog;
  const [imageError, setImageError] = useState(false);

  const Base_Url = import.meta.env.VITE_API_URL

  // Default placeholder image URL
  const DEFAULT_IMAGE = "https://via.placeholder.com/1200x600/D9D9D9/666666?text=No+Image+Available";

  // Helper function to get image URL safely from array
  const getImageUrl = (blog) => {
    // Check if image array exists and has at least one item
    if (blog?.image && Array.isArray(blog.image) && blog.image.length > 0 && blog.image[0]?.url) {
      return `${Base_Url}${blog.image[0].url}`;
    }
    return DEFAULT_IMAGE;
  };

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col pt-20">
      {/* Blog Content */}
      <div className="w-full p-8 text-sm lg:text-lg flex-1 max-w-4xl xl:max-w-5xl mx-auto">
        <Link
          to="/blogs"
          className="text-yellow-400 mb-6 inline-block hover:underline font-nunito"
        >
          ← Back to Blogs
        </Link>

        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 font-worksans"
        >
          {blog.name}
        </h1>

        <p className="text-gray-400 mb-6 ">
          {new Date(blog.createdAt).toLocaleDateString()}
        </p>

        {/* Blog Image with error handling */}
        {blog.image && blog.image.length > 0 && (
          <img
            src={imageError ? DEFAULT_IMAGE : getImageUrl(blog)}
            alt={blog.image[0]?.alternativeText || blog.name}
            onError={() => setImageError(true)}
            className="w-full h-auto rounded-2xl mb-8 object-cover"
          />
        )}

        <p
          className="text-white text-justify text-lg font-nunito"
        >
          {blog.description}
        </p>
      </div>
    </div>
  );
}

export default InnerBlog;
