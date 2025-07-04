import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/ErrorPage.css";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-animation">
          <div className="error-code">404</div>
          <div className="error-icon">📭</div>
        </div>

        <h1 className="error-title">Oops! Page Not Found</h1>
        <p className="error-message">
          The page you're looking for seems to have wandered off into the
          digital void. Don't worry, it happens to the best of us!
        </p>

        <div className="error-actions">
          <button
            onClick={() => navigate("/")}
            className="error-button primary"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="error-button secondary"
          >
            Go Back
          </button>
        </div>

        <div className="error-details">
          <p className="error-help">
            If you think this is a mistake, here are some things you can try:
          </p>
          <ul className="error-suggestions">
            <li>Check the URL for any typos</li>
            <li>Go back to the previous page</li>
            <li>Visit our homepage and navigate from there</li>
            <li>Contact support if the problem persists</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
