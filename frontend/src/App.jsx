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
              </Route>

              <Route path="/app" element={<AppLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="all-blogs" element={<Blogs type={"all-blogs"} />} />
                <Route path="my-blogs" element={<Blogs type={"user-blogs"} />} />
                <Route path="createBlog" element={<CreateBlog />} />
              </Route>
            </Routes>
          </BlogProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
