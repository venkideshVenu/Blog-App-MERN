import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#fff",
          padding: "1rem 2rem",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#007bff",
          }}
        >
          📝 BlogApp
        </div>
        <div>
          <button
            onClick={() => navigate("/auth/signin")}
            style={{
              padding: "0.5rem 1rem",
              marginRight: "1rem",
              backgroundColor: "transparent",
              border: "1px solid #007bff",
              color: "#007bff",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/auth/signup")}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          backgroundColor: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            color: "#333",
          }}
        >
          Share Your Stories with the World
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto 2rem auto",
            lineHeight: "1.6",
          }}
        >
          Create, publish, and share your thoughts with our simple and powerful
          blogging platform. Join thousands of writers who trust BlogApp to tell
          their stories.
        </p>
        <button
          onClick={() => navigate("/auth/signup")}
          style={{
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "2rem",
          }}
        >
          Start Writing Today
        </button>
      </section>

      {/* Features Section */}
      <section
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#f8f9fa",
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
          Why Choose BlogApp?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Feature 1 */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✍️</div>
            <h3 style={{ color: "#333", marginBottom: "1rem" }}>
              Easy Writing
            </h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Simple and intuitive editor that lets you focus on your content.
              No distractions, just pure writing experience.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌐</div>
            <h3 style={{ color: "#333", marginBottom: "1rem" }}>
              Global Reach
            </h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Share your stories with readers from around the world. Your
              content deserves a global audience.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔒</div>
            <h3 style={{ color: "#333", marginBottom: "1rem" }}>
              Secure & Private
            </h3>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
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
          backgroundColor: "#007bff",
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
                backgroundColor: "#007bff",
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
                backgroundColor: "#007bff",
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
                backgroundColor: "#007bff",
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
            backgroundColor: "#007bff",
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
            color: "#007bff",
            border: "1px solid #007bff",
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
