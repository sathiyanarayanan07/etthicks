import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function Blogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  // Default placeholder image URL
  const DEFAULT_IMAGE = "https://via.placeholder.com/800x600/D9D9D9/666666?text=No+Image+Available";

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("https://etthicks.thirdvizion.com/api/blogs?populate=*");
      const result = await response.json();
      setBlogs(result.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  const handleBlogClick = (blog) => {
    navigate("/blog/details", { state: { blog } });
  };

  // Helper function to get image URL safely from array
  const getImageUrl = (blog) => {
    // Check if image array exists and has at least one item
    if (blog?.image && Array.isArray(blog.image) && blog.image.length > 0 && blog.image[0]?.url) {
      return `http://localhost:1337${blog.image[0].url}`;
    }
    return DEFAULT_IMAGE;
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Loading blogs...</p>
      </div>
    );
  }

  // Find latest blog
  const latestBlog = blogs.length > 0 ? blogs[0] : null;

  // Sort by date helper
  const sortByDate = (a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  };

  // Filter & sort
  const filteredArticles = [...blogs]
    .filter((a) => {
      const searchLower = search.toLowerCase();
      return (
        a.name.toLowerCase().includes(searchLower) ||
        a.description.toLowerCase().includes(searchLower)
      );
    })
    .sort(sortByDate);

  const ArticleCard = ({ blog, index }) => {
    const [imageError, setImageError] = useState(false);
    const translateClass =
      index % 3 === 1
        ? "lg:-translate-y-12 xl:-translate-y-6 2xl:-translate-y-12"
        : "";

    return (
      <div
        onClick={() => handleBlogClick(blog)}
        className={`w-full rounded-xl flex flex-col overflow-hidden cursor-pointer hover:scale-105 transition transform ${translateClass}`}
      >
        {/* Blog Image with error handling */}
        <img
          src={imageError ? DEFAULT_IMAGE : getImageUrl(blog)}
          alt={blog.image?.[0]?.alternativeText || blog.name}
          onError={() => setImageError(true)}
          className="flex-1 w-full h-auto object-cover"
        />

        {/* Blog Info */}
        <div className="bg-gray-50 p-4">
          <h2 className="text-xs text-gray-500 mb-1">
            {new Date(blog.createdAt).toLocaleDateString()}
          </h2>
          <p className="text-lg md:text-sm xl:text-lg font-medium text-black">{blog.name}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col bg-black text-white min-h-screen pt-14 md:pt-0 xl:pt-12">
      {/* ---------------- BlogLanding Section ---------------- */}
      {latestBlog && (
        <div className="flex items-center justify-center p-4 md:p-6 lg:p-10 mt-10 md:mt-20 xl:mt-6">
          <div
            className="relative w-full h-64 md:h-96 xl:h-[500px] overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${getImageUrl(latestBlog)})`
            }}
            onClick={() => handleBlogClick(latestBlog)}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 md:via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-4 sm:bottom-6 left-2 md:left-6 flex flex-col sm:flex-row items-start sm:items-end justify-between w-full pr-6">
              <div className="mb-0 sm:mb-0">
                <h2
                  className="text-white text-xl md:text-2xl lg:text-3xl xl:text-5xl font-normal"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {latestBlog.name}
                </h2>
                <p
                  className="text-gray-400 mt-1 text-xs md:text-md lg:text-lg"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {latestBlog.description.substring(0, 100)}...
                </p>
              </div>

              <button
                className="hidden md:flex w-10 h-10 sm:w-12 sm:h-11 md:h-12 rounded-full bg-yellow-500 items-center justify-center shadow-lg hover:bg-yellow-400 transition mr-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleBlogClick(latestBlog);
                }}
              >
                <ArrowUpRight className="text-white w-5 sm:w-6 h-5 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- Articles Section ---------------- */}
      <div className="w-full p-8 sm:p-6 md:p-8">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-12 gap-4 sm:gap-0">
          <h1
            className="w-full text-4xl md:text-5xl lg:text-6xl font-normal"
          >
            Articles
          </h1>
          <div className="w-full flex items-center justify-end gap-2 sm:gap-4">
            {/* Search Box */}
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 md:h-auto text-start w-full md:w-60 bg-[#D9D9D9] rounded-full px-6 sm:px-4 md:py-2 text-black outline-none text-sm md:text-xs lg:text-sm xl:text-md"
            />
            {/* Sort Dropdown */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="h-10 md:h-auto bg-[#D9D9D9] rounded-full px-3 sm:px-4 md:py-2 text-black outline-none text-sm sm:text-xs lg:text-sm xl:text-md"
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:mt-20">
          {filteredArticles.map((blog, index) => (
            <ArticleCard key={blog.documentId} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
