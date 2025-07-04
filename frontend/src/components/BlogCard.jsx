import React from "react";
import { useNavigate } from "react-router";


export default function BlogCard({ blog }) {
 const navigate = useNavigate()
  return (
    <div>
      <div
        key={blog._id}
        onClick={() => navigate(`/app/blog/${blog._id}`)}
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
