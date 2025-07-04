import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import { BlogProvider } from "./context/BlogContext";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import CreateBlog from "./components/CreateBlog";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <BlogProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />

              <Route path="/auth" element={<AuthLayout />}>
                <Route path="signup" element={<SignUp />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="profile" element={<Profile />} />
              </Route>

              <Route path="/app" element={<AppLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="createBlog" element={<CreateBlog />} />
                <Route
                  path="all-blogs"
                  element={<Blogs type={"all-blogs"} />}
                />
                <Route
                  path="my-blogs"
                  element={<Blogs type={"user-blogs"} />}
                />
                <Route path="blog/:id" element={<BlogDetail />} />
              </Route>

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BlogProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
