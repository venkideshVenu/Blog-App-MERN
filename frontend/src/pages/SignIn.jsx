import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import "../styles/pages/Auth.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { signIn, loading, error, clearError, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app/home");
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (field, value) => {
    // Clear error when user starts typing
    if (error) {
      clearError();
    }

    // Clear success message when user starts typing
    if (successMessage) {
      setSuccessMessage("");
    }

    // Update the appropriate field
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      return;
    }

    const result = await signIn(email, password);
    if (result.success) {
      setSuccessMessage("Sign in successful! Redirecting to home...");
      setEmail("");
      setPassword("");
      // Redirect to home after 1 second
      setTimeout(() => {
        navigate("/app/home");
      }, 1000);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">🔐 Welcome Back</h1>
          <p className="auth-subtitle">
            Sign in to continue your blogging journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Show Error Messages */}
          {error && <div className="message error">{error}</div>}

          {/* Show Success Messages */}
          {successMessage && (
            <div className="message success">{successMessage}</div>
          )}

          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              disabled={loading}
              className="form-input"
              placeholder="📧 Enter your email address"
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              disabled={loading}
              className="form-input"
              placeholder="🔑 Enter your password"
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !email.trim() || !password.trim()}
            className="submit-button"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?
            <button
              type="button"
              onClick={() => navigate("/auth/signup")}
              className="auth-link"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
