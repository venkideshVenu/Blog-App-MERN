import React, { useEffect, useState } from "react";
import { useBlogs } from "../context/BlogContext";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Blogs.css";

export default function Blogs({ type }) {
  const { blogs, loading, error, getAllBlogs, getUserBlogs } = useBlogs();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const getBlogs = async () => {
    if (type === "all-blogs") {
      await getAllBlogs();
    } else if (type === "user-blogs") {
      await getUserBlogs();
    }
  };

  useEffect(() => {
    getBlogs();
  }, [type]);

  // Filter blogs based on search term
  const filteredBlogs = blogs?.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.author &&
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCreateBlog = () => {
    navigate("/app/createBlog");
  };

  if (loading) {
    return (
      <div className="blogs-container">
        <div className="blogs-loading">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blogs-container">
        <div className="blogs-error">
          <div className="error-icon">⚠️</div>
          <h2 className="error-title">Oops! Something went wrong</h2>
          <p className="error-message">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <h1 className="blogs-title">
          {type === "all-blogs"
            ? "📚 Discover Amazing Blogs"
            : "✍️ My Blog Collection"}
        </h1>
        <p className="blogs-subtitle">
          {type === "all-blogs"
            ? "Explore stories, insights, and ideas from our community of writers"
            : "Manage and review all your published blog posts"}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="blogs-filters">
        <input
          type="text"
          placeholder="🔍 Search blogs by title, content, or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          style={{
            padding: "0.75rem 1rem",
            border: "2px solid #e5e7eb",
            borderRadius: "25px",
            fontSize: "1rem",
            width: "100%",
            maxWidth: "400px",
            outline: "none",
            transition: "all 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#667eea")}
          onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
        />

        {type === "user-blogs" && (
          <button
            onClick={handleCreateBlog}
            className="filter-button active"
            style={{ marginLeft: "1rem" }}
          >
            ➕ New Blog
          </button>
        )}
      </div>

      {/* Blog Results */}
      {filteredBlogs && filteredBlogs.length > 0 ? (
        <>
          <div
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "#6b7280",
              fontSize: "1rem",
            }}
          >
            {searchTerm ? (
              <>
                Found {filteredBlogs.length} blog
                {filteredBlogs.length !== 1 ? "s" : ""} matching "{searchTerm}"
              </>
            ) : (
              <>
                Showing {filteredBlogs.length} blog
                {filteredBlogs.length !== 1 ? "s" : ""}
              </>
            )}
          </div>

          <div className="blogs-grid">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={blog._id || index} blog={blog} />
            ))}
          </div>
        </>
      ) : (
        <div className="blogs-empty">
          <div className="empty-icon">{type === "all-blogs" ? "📭" : "✍️"}</div>
          <h2 className="empty-title">
            {searchTerm
              ? "No blogs found"
              : type === "all-blogs"
              ? "No blogs available yet"
              : "You haven't written any blogs yet"}
          </h2>
          <p className="empty-message">
            {searchTerm
              ? `No blogs match your search "${searchTerm}". Try different keywords.`
              : type === "all-blogs"
              ? "Be the first to share your story with the community!"
              : "Start your blogging journey by creating your first blog post."}
          </p>
          {!searchTerm && (
            <button onClick={handleCreateBlog} className="empty-action">
              {type === "all-blogs"
                ? "Write Your First Blog"
                : "Create New Blog"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
