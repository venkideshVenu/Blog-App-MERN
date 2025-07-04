import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";

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
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const success = await deleteBlog(id);
      if (success) {
        navigate("/app/my-blogs");
      }
    }
  };

  if (loading) {
    return <div>Loading blog...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <button
        onClick={() => navigate("/app/all-blogs")}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        ← Back to Blogs
      </button>

      <article
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ marginBottom: "1rem", color: "#333" }}>{blog.title}</h1>

        <div
          style={{
            marginBottom: "1rem",
            color: "#666",
            fontSize: "0.9rem",
          }}
        >
          By: {blog.author} | {new Date(blog.createdAt).toLocaleDateString()}
        </div>

        <div
          style={{
            lineHeight: "1.6",
            color: "#333",
            marginBottom: "2rem",
          }}
        >
          {blog.content}
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            onClick={() => navigate(`/app/edit-blog/${id}`)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Edit
          </button>

          <button
            onClick={handleDelete}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      </article>
    </div>
  );
}
