import React, { useEffect } from "react";
import { useBlogs } from "../context/BlogContext";
import BlogCard from "../components/BlogCard";

export default function Blogs({ type }) {
  const { blogs, loading, error, getAllBlogs, getUserBlogs } = useBlogs();

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

  return (
    <>
      {loading ? (
        "Loading ...."
      ) : (
        <div style={{ padding: "2rem" }}>
          <h1>{type === "all-blogs" ? "All Blogs" : "My Blogs"}</h1>
          {blogs && blogs.length > 0 ? (
            <div>
              {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          ) : (
            <p>No blogs found.</p>
          )}
        </div>
      )}
    </>
  );
}
