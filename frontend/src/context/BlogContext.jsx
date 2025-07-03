import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";


const BlogContext = createContext();

export const useBlogs = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};
export const BlogProvider = ({ children }) => {

};
