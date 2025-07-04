import React, { useState } from "react";
import { useBlogs } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";

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
      setTimeout(() => navigate("/app/all-blogs"));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Show Error Messages */}
        {error && (
          <div
            style={{
              color: "red",
              backgroundColor: "#ffebee",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #f44336",
              borderRadius: "4px",
            }}
          >
            {error}
          </div>
        )}

        {/* Show Success Messages */}
        {successMessage && (
          <div
            style={{
              color: "green",
              backgroundColor: "#e8f5e8",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #4caf50",
              borderRadius: "4px",
            }}
          >
            {successMessage}
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            gap: "20px",
          }}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            placeholder="Enter the title"
          />
          <textarea
            type=""
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            placeholder="Enter the Content"
          />
          <button
            type="submit"
            disabled={loading || !title.trim()}
            style={{
              padding: "8px 16px",
              backgroundColor: loading || !title.trim() ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: loading || !title.trim() ? "not-allowed" : "pointer",
              fontSize: "16px",
            }}
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}
