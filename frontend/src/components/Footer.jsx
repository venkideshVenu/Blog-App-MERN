import React from "react";
import "../styles/components/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">📝 BlogApp</div>
          <p className="footer-description">
            Empowering writers to share their stories with the world. Create,
            publish, and connect with readers everywhere.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              📘
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              🐦
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              💼
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              📸
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/app/all-blogs">📚 All Blogs</a>
            </li>
            <li>
              <a href="/app/createBlog">✍️ Write Blog</a>
            </li>
            <li>
              <a href="/auth/profile">👤 Profile</a>
            </li>
            <li>
              <a href="/help">❓ Help Center</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Resources</h3>
          <ul className="footer-links">
            <li>
              <a href="/writing-guide">📖 Writing Guide</a>
            </li>
            <li>
              <a href="/community">🌟 Community</a>
            </li>
            <li>
              <a href="/blog-tips">💡 Blog Tips</a>
            </li>
            <li>
              <a href="/inspiration">🎨 Inspiration</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Support</h3>
          <ul className="footer-links">
            <li>
              <a href="/contact">📧 Contact Us</a>
            </li>
            <li>
              <a href="/privacy">🔒 Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">📋 Terms of Service</a>
            </li>
            <li>
              <a href="/feedback">💬 Feedback</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {currentYear} BlogApp. All rights reserved. Made with ❤️ for writers
        everywhere.
      </div>
    </footer>
  );
}
