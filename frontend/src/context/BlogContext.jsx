import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { API_BASE_URL, ENDPOINTS } from "../constants/apiEndPoints";

const BlogContext = createContext();

export const useBlogs = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API_BASE_URL + ENDPOINTS.ALLBLOGS, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setBlogs(response.data.blogs);
    } catch (error) {
      setError("Error Fetching Blogs");
      console.error("Error Fetching Blogs".error);
    } finally {
      setLoading(false);
    }
  };

  const getUserBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API_BASE_URL + ENDPOINTS.USERBLOGS, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setBlogs(response.data.blogs);
    } catch (error) {
      setError("Error Fetching User Blogs");
      console.error("Error Fetching User Blogs".error);
    } finally {
      setLoading(false);
    }
  };

  const createBlog = async (title, content) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(
        API_BASE_URL + ENDPOINTS.CREATEBLOG,
        {
          title: title,
          content: content,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      setBlogs(response.data.blogs);
      return true;
    } catch (error) {
      setError("Error Fetching Blogs");
      console.error("Error Fetching Blogs".error);
      return true;
    } finally {
      setLoading(false);
    }
  };

  const getBlogById = async (id) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`${API_BASE_URL}${ENDPOINTS.BLOG}/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      console.log(response)
      return response.data.blog;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch blog";
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    try {
      setLoading(true);
      setError(null);

      const response = await  axios.delete(
        `${API_BASE_URL}${ENDPOINTS.DELETEBLOG}/${id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      return true;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch blog";
      setError(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    blogs,
    loading,
    error,
    getAllBlogs,
    getUserBlogs,
    createBlog,
    getBlogById,
    deleteBlog,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
