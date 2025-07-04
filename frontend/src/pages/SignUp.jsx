import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import "../styles/pages/Auth.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { signUp, loading, error, clearError, isAuthenticated } = useAuth();
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
    if (field === "username") setUsername(value);
    if (field === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !username.trim() || !password.trim()) {
      return;
    }

    const result = await signUp(email, username, password);
    if (result.success) {
      setSuccessMessage("Account created successfully! Please sign in.");
      setEmail("");
      setUsername("");
      setPassword("");
      // Redirect to signin after 2 seconds
      setTimeout(() => {
        navigate("/auth/signin");
      }, 2000);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">🚀 Join BlogApp</h1>
          <p className="auth-subtitle">
            Create your account and start sharing your stories
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
              type="text"
              value={username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              disabled={loading}
              className="form-input"
              placeholder="👤 Choose a username"
              required
              autoComplete="username"
              minLength={3}
              maxLength={20}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              disabled={loading}
              className="form-input"
              placeholder="🔑 Create a password"
              required
              autoComplete="new-password"
              minLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={
              loading || !email.trim() || !username.trim() || !password.trim()
            }
            className="submit-button"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?
            <button
              type="button"
              onClick={() => navigate("/auth/signin")}
              className="auth-link"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
