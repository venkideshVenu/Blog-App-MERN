import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <div className="landing-logo">📝 BlogApp</div>
        <nav className="landing-nav">
          <button
            onClick={() => navigate("/auth/signin")}
            className="nav-button outline"
          >
            🔐 Sign In
          </button>
          <button
            onClick={() => navigate("/auth/signup")}
            className="nav-button primary"
          >
            🚀 Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="landing-hero">
        <h1 className="hero-title">Share Your Stories with the World</h1>
        <p className="hero-subtitle">
          Create, publish, and share your thoughts with our simple and powerful
          blogging platform. Join thousands of writers who trust BlogApp to tell
          their stories.
        </p>
        <div className="hero-actions">
          <button
            onClick={() => navigate("/auth/signup")}
            className="hero-button primary"
          >
            ✨ Start Writing Today
          </button>
          <button
            onClick={() => navigate("/auth/signin")}
            className="hero-button secondary"
          >
            📚 Explore Blogs
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="landing-features">
        <h2 className="features-title">Why Choose BlogApp?</h2>
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon">✍️</div>
            <h3 className="feature-title">Easy Writing</h3>
            <p className="feature-description">
              Simple and intuitive editor that lets you focus on your content.
              No distractions, just pure writing experience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3 className="feature-title">Global Reach</h3>
            <p className="feature-description">
              Share your stories with readers from around the world. Your
              content deserves a global audience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3 className="feature-title">Secure & Private</h3>
            <p className="feature-description">
              Your data is safe with us. Advanced security measures keep your
              content and personal information protected.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          Join Our Growing Community
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <div>
            <div style={{ fontSize: "3rem", fontWeight: "bold" }}>10K+</div>
            <div style={{ fontSize: "1.1rem", opacity: 0.9 }}>
              Active Writers
            </div>
          </div>
          <div>
            <div style={{ fontSize: "3rem", fontWeight: "bold" }}>50K+</div>
            <div style={{ fontSize: "1.1rem", opacity: 0.9 }}>
              Published Posts
            </div>
          </div>
          <div>
            <div style={{ fontSize: "3rem", fontWeight: "bold" }}>100K+</div>
            <div style={{ fontSize: "1.1rem", opacity: 0.9 }}>
              Monthly Readers
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "3rem",
            color: "#333",
          }}
        >
          How It Works
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "#667eea",
                color: "white",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: "0 auto 1rem auto",
              }}
            >
              1
            </div>
            <h3 style={{ color: "#333", marginBottom: "1rem" }}>Sign Up</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Create your free account in seconds. No credit card required.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "#667eea",
                color: "white",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: "0 auto 1rem auto",
              }}
            >
              2
            </div>
            <h3 style={{ color: "#333", marginBottom: "1rem" }}>Write</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Use our intuitive editor to create and format your blog posts.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "#667eea",
                color: "white",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: "0 auto 1rem auto",
              }}
            >
              3
            </div>
            <h3 style={{ color: "#333", marginBottom: "1rem" }}>Publish</h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Share your stories with the world and connect with readers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#f8f9fa",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            color: "#333",
          }}
        >
          Ready to Start Your Blogging Journey?
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#666",
            marginBottom: "2rem",
            maxWidth: "500px",
            margin: "0 auto 2rem auto",
          }}
        >
          Join thousands of writers who have already discovered the power of
          BlogApp. Your story matters, and we're here to help you tell it.
        </p>
        <button
          onClick={() => navigate("/auth/signup")}
          style={{
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginRight: "1rem",
          }}
        >
          Get Started Free
        </button>
        <button
          onClick={() => navigate("/auth/signin")}
          style={{
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            backgroundColor: "transparent",
            color: "#667eea",
            border: "1px solid #667eea",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          📝 BlogApp
        </div>
        <p
          style={{
            color: "#ccc",
            fontSize: "0.9rem",
          }}
        >
          © 2024 BlogApp. All rights reserved. Made with ❤️ for writers
          everywhere.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
