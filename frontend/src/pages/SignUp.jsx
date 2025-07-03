import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { signUp, loading, error, clearError, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
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
        navigate("/signin");
      }, 2000);
    }
  };

  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        {/* Show Error Messages */}
        {error && (
          <div
            style={{
              color: "red",
              backgroundColor: "#ffebee",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #f44336",
              borderRadius: "4px",
            }}
          >
            {error}
          </div>
        )}

        {/* Show Success Messages */}
        {successMessage && (
          <div
            style={{
              color: "green",
              backgroundColor: "#e8f5e8",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #4caf50",
              borderRadius: "4px",
            }}
          >
            {successMessage}
          </div>
        )}

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            disabled={loading}
            placeholder="something@email.com"
            required
          />
          <input
            type="text"
            value={username}
            onChange={(e) => handleInputChange("username", e.target.value)}
            disabled={loading}
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            disabled={loading}
            placeholder="Password"
            required
          />

          <button
            type="submit"
            disabled={
              loading || !email.trim() || !username.trim() || !password.trim()
            }
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <p>
            Already have an account?{" "}
            <button type="button" onClick={() => navigate("/signin")}>
              Sign In
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
