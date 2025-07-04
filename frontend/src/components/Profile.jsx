import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL, ENDPOINTS } from "../constants/apiEndPoints";
import "../styles/components/Profile.css";

export default function Profile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}${ENDPOINTS.GETUSER}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      console.log(response);
      setUser(response.data.user);
    } catch (err) {
      setError("Failed to load profile information");
      console.error("Error fetching user:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading your profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <div className="message error">{error}</div>
      </div>
    );
  }

  // Get initials for avatar
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Format join date
  const formatDate = (dateString) => {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          {getInitials(user.username || user.email)}
        </div>
        <h1 className="profile-title">
          👋 Welcome, {user.username || "User"}!
        </h1>
        <p className="profile-subtitle">
          Manage your profile and blog settings
        </p>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2 className="section-title">📋 Personal Information</h2>
          <div className="profile-info">
            <div className="info-item">
              <label className="info-label">Username</label>
              <div className="info-value">
                {user.username || "Not provided"}
              </div>
            </div>
            <div className="info-item">
              <label className="info-label">Email Address</label>
              <div className="info-value">{user.email || "Not provided"}</div>
            </div>
            <div className="info-item">
              <label className="info-label">Member Since</label>
              <div className="info-value">{formatDate(user.createdAt)}</div>
            </div>
            <div className="info-item">
              <label className="info-label">Account ID</label>
              <div className="info-value">{user._id || "N/A"}</div>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2 className="section-title">📊 Your Stats</h2>
          <div className="profile-stats">
            <div className="stat-card">
              <div className="stat-number">{user.blogCount || 0}</div>
              <div className="stat-label">Blogs Written</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{user.viewCount || 0}</div>
              <div className="stat-label">Total Views</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{user.followerCount || 0}</div>
              <div className="stat-label">Followers</div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-actions">
        <button
          className="action-button primary"
          onClick={() => navigate("/app/createBlog")}
        >
          ✍️ Write New Blog
        </button>
        <button
          className="action-button secondary"
          onClick={() => navigate("/app/my-blogs")}
        >
          📚 View My Blogs
        </button>
      </div>
    </div>
  );
}
