import React from "react";

export default function BlogCard({ blog }) {
  return (
    <div>
      <div
        key={blog._id}
        style={{
          border: "1px solid #ddd",
          padding: "1rem",
          margin: "1rem 0",
          borderRadius: "4px",
        }}
      >
        <h3>{blog.title}</h3>
        <p>{blog.content}</p>
        <small>By: {blog.author || "Unknown"}</small>
      </div>
    </div>
  );
}
