import React, { useState } from "react";
import { useBlogs } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";
import "../styles/components/CreateBlog.css";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { loading, createBlog, error } = useBlogs();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await createBlog(title, content);
    if (success) {
      setTitle("");
      setContent("");
      setSuccessMessage("Blog Created Successfully");
      setTimeout(() => navigate("/app/all-blogs"), 1500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmit(e);
    }
  };

  return (
    <div className="create-blog-container">
      <div className="create-blog-header">
        <h1 className="create-blog-title">✍️ Create New Blog</h1>
        <p className="create-blog-subtitle">
          Share your thoughts and ideas with the world
        </p>
      </div>

      <form onSubmit={handleSubmit} className="create-blog-form">
        {/* Show Error Messages */}
        {error && <div className="message error">{error}</div>}

        {/* Show Success Messages */}
        {successMessage && (
          <div className="message success">{successMessage}</div>
        )}

        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Blog Title *
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={loading}
            className="form-input"
            placeholder="Enter an engaging title for your blog..."
            maxLength={100}
            required
          />
          <small className="text-muted">{title.length}/100 characters</small>
        </div>

        <div className="form-group">
          <label htmlFor="content" className="form-label">
            Blog Content *
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={loading}
            className="form-input form-textarea"
            placeholder="Write your blog content here... Use Ctrl+Enter to submit quickly."
            required
          />
          <small className="text-muted">
            {content.split(" ").filter((word) => word.length > 0).length} words
            •
            {Math.ceil(
              content.split(" ").filter((word) => word.length > 0).length / 200
            )}{" "}
            min read
          </small>
        </div>

        <button
          type="submit"
          disabled={loading || !title.trim() || !content.trim()}
          className="submit-button"
        >
          {loading ? "Publishing..." : "Publish Blog"}
        </button>
      </form>
    </div>
  );
}
