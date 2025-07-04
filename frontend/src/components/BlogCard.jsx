import React from "react";
import { useNavigate } from "react-router";
import "../styles/components/BlogCard.css";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  // Calculate reading time (assuming 200 words per minute)
  const wordsCount = blog.content ? blog.content.split(" ").length : 0;
  const readingTime = Math.ceil(wordsCount / 200);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <article
      className="blog-card"
      onClick={() => navigate(`/app/blog/${blog._id}`)}
    >
      <h3 className="blog-card-title">{blog.title}</h3>
      <p className="blog-card-content">{blog.content}</p>

      <div className="blog-card-footer">
        <div className="blog-card-author">{blog.author || "Anonymous"}</div>
        <div className="blog-card-date">
          {blog.createdAt ? formatDate(blog.createdAt) : "Recent"}
        </div>
      </div>

      <div className="blog-card-meta">
        <span className="blog-card-read-more">
          Read more ({readingTime} min read)
        </span>
      </div>
    </article>
  );
}
