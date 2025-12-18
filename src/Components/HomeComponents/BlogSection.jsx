// src/Components/Home/BlogSection.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BlogSection() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Default placeholder image URL
  const DEFAULT_IMAGE = "https://via.placeholder.com/800x600/D9D9D9/666666?text=No+Image+Available";

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/blogs?populate=*");
      const result = await response.json();
      setBlogs(result.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  // Helper function to get image URL safely from array
  const getImageUrl = (blog) => {
    // Check if image array exists and has at least one item
    if (blog?.image && Array.isArray(blog.image) && blog.image.length > 0 && blog.image[0]?.url) {
      return `http://localhost:1337${blog.image[0].url}`;
    }
    return DEFAULT_IMAGE;
  };

  // Helper function to get alt text
  const getImageAlt = (blog) => {
    if (blog?.image && Array.isArray(blog.image) && blog.image.length > 0) {
      return blog.image[0]?.alternativeText || blog.name;
    }
    return blog.name;
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center" style={{ background: 'radial-gradient(ellipse at center, #072a31, #000000)' }}>
        <p className="text-white text-xl">Loading blogs...</p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center" style={{ background: 'radial-gradient(ellipse at center, #072a31, #000000)' }}>
        <p className="text-white text-xl">No blogs available</p>
      </div>
    );
  }

  // Get latest blog
  const latestBlog = blogs[0];

  // Get next 3 blogs for cards
  const otherBlogs = blogs.slice(1, 4);

  const handleBlogClick = (blog) => {
    navigate("/blog/details", { state: { blog } });
  };

  // Blog Image Component with error handling
  const BlogImage = ({ blog, className }) => {
    const [imageError, setImageError] = useState(false);
    
    return (
      <img
        src={imageError ? DEFAULT_IMAGE : getImageUrl(blog)}
        alt={getImageAlt(blog)}
        onError={() => setImageError(true)}
        className={className}
      />
    );
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden px-6 sm:px-8 md:px-12 py-16" style={{ background: 'radial-gradient(ellipse at center, #072a31, #000000)' }}>
      <h1 className="lg:hidden text-white text-2xl md:text-5xl font-medium font-['Work_Sans'] uppercase leading-none relative z-10 mb-10">
        Blog
      </h1>

      {/* -------- Top Section (Latest Blog) -------- */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-6 relative">
        {/* Left Content */}
        <div
          className="flex-1 relative w-full cursor-pointer"
          onClick={() => handleBlogClick(latestBlog)}
        >
          {/* Blog Heading */}
          <h1 className="hidden lg:flex text-white text-8xl font-semibold font-['Work_Sans'] uppercase leading-none relative z-10 mb-10">
            Blog
          </h1>

          {/* Blog Title */}
          <h2 className="text-white text-2xl md:text-4xl font-medium font-['Work_Sans'] relative z-10">
            {latestBlog.name}
          </h2>

          {/* Blog Description */}
          <p className="text-gray-500 text-base md:text-xl font-normal font-['Work_Sans'] leading-relaxed mt-4 max-w-full md:max-w-2xl relative z-10">
            {latestBlog.description.substring(0, 150)}...{" "}
            <span className="text-amber-500 underline">More</span>
          </p>

          {/* Subheading Number */}
          <span
            className="absolute top-0 left-0 text-white/10 text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold font-['Work_Sans'] uppercase z-0 pointer-events-none"
            aria-hidden="true"
          >
            01
          </span>
        </div>

        {/* Right Image */}
        <div
          className="w-full lg:w-[499px] h-60 sm:h-72 md:h-96 bg-black/20 rounded-2xl overflow-hidden relative z-10 cursor-pointer"
          onClick={() => handleBlogClick(latestBlog)}
        >
          <BlogImage
            blog={latestBlog}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* -------- Bottom Blog Cards -------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {otherBlogs.map((blog) => (
          <div
            key={blog.documentId}
            onClick={() => handleBlogClick(blog)}
            className="relative w-full h-48 sm:h-56 md:h-64 rounded-3xl overflow-hidden cursor-pointer group"
          >
            <BlogImage
              blog={blog}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <p className="absolute bottom-4 left-4 text-white text-base sm:text-lg md:text-xl font-medium font-['Work_Sans'] leading-snug">
              {blog.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
