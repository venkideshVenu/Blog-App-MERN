import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import "../styles/pages/BlogDetail.css";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, getBlogById, deleteBlog } = useBlogs();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await getBlogById(id);
        setBlog(blogData);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  const handleDelete = async () => {
    if (
      window.confirm(
        "⚠️ Are you sure you want to delete this blog? This action cannot be undone."
      )
    ) {
      const success = await deleteBlog(id);
      if (success) {
        navigate("/app/my-blogs");
      }
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.content.substring(0, 150) + "...",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Blog link copied to clipboard!");
  };

  // Calculate reading time
  const calculateReadingTime = (content) => {
    if (!content) return 0;
    const wordsCount = content.split(" ").length;
    return Math.ceil(wordsCount / 200); // Average 200 words per minute
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="blog-detail-container">
        <div className="blog-loading">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-detail-container">
        <div className="blog-error">
          <div className="error-icon">⚠️</div>
          <h2 className="error-title">Failed to Load Blog</h2>
          <p className="error-message">{error}</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-detail-container">
        <div className="blog-not-found">
          <div className="not-found-icon">📭</div>
          <h2 className="not-found-title">Blog Not Found</h2>
          <p className="not-found-message">
            The blog you're looking for doesn't exist or may have been removed.
          </p>
          <button
            onClick={() => navigate("/app/all-blogs")}
            className="action-button primary"
          >
            Back to All Blogs
          </button>
        </div>
      </div>
    );
  }

  const readingTime = calculateReadingTime(blog.content);

  return (
    <div className="blog-detail-container">
      <button
        onClick={() => navigate("/app/all-blogs")}
        className="back-button"
      >
        Back to Blogs
      </button>

      <article className="blog-article">
        <header className="blog-header">
          <h1 className="blog-title">{blog.title}</h1>

          <div className="blog-meta">
            <div className="blog-author">
              {blog.author || "Anonymous Writer"}
            </div>
            <div className="blog-date">{formatDate(blog.createdAt)}</div>
            <div className="blog-reading-time">{readingTime} min read</div>
          </div>
        </header>

        <div className="blog-content">{blog.content}</div>

        <div className="blog-actions">
          <button
            onClick={() => navigate(`/app/edit-blog/${id}`)}
            className="action-button edit"
          >
            Edit Blog
          </button>

          <button onClick={handleShare} className="action-button share">
            Share Blog
          </button>

          <button onClick={handleDelete} className="action-button delete">
            Delete Blog
          </button>
        </div>
      </article>
    </div>
  );
}
