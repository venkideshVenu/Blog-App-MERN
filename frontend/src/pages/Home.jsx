import { useNavigate } from "react-router-dom";
import "../styles/pages/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-icon">✍️</div>
        <h1 className="hero-title">Welcome to Your Blog Dashboard</h1>
        <p className="hero-subtitle">
          Your creative space to write, share, and connect with readers around
          the world. Start your blogging journey today!
        </p>
        <div className="hero-actions">
          <button
            onClick={() => navigate("/app/createBlog")}
            className="hero-button primary"
          >
            ✨ Write New Blog
          </button>
          <button
            onClick={() => navigate("/app/all-blogs")}
            className="hero-button secondary"
          >
            📚 Explore Blogs
          </button>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="home-features">
        <div
          className="feature-card"
          onClick={() => navigate("/app/createBlog")}
        >
          <div className="feature-icon">✍️</div>
          <h3 className="feature-title">Create Blog</h3>
          <p className="feature-description">
            Start writing your next amazing blog post. Share your thoughts,
            experiences, and insights with the world.
          </p>
        </div>

        <div
          className="feature-card"
          onClick={() => navigate("/app/all-blogs")}
        >
          <div className="feature-icon">📚</div>
          <h3 className="feature-title">All Blogs</h3>
          <p className="feature-description">
            Discover and read amazing content from our community of writers.
            Find inspiration for your next post.
          </p>
        </div>

        <div className="feature-card" onClick={() => navigate("/app/my-blogs")}>
          <div className="feature-icon">📝</div>
          <h3 className="feature-title">My Blogs</h3>
          <p className="feature-description">
            Manage and edit your published blog posts. Track your writing
            progress and engagement.
          </p>
        </div>

        <div className="feature-card" onClick={() => navigate("/auth/profile")}>
          <div className="feature-icon">👤</div>
          <h3 className="feature-title">My Profile</h3>
          <p className="feature-description">
            View and update your profile information. See your writing
            statistics and achievements.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats">
        <h2 className="stats-title">📊 Your Blogging Journey</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">Blogs Written</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">Total Views</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">Blog Likes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">Followers</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="home-cta">
        <h2 className="cta-title">Ready to Share Your Story?</h2>
        <p className="cta-subtitle">
          Every great writer started with a single word. What's your story going
          to be?
        </p>
        <button
          onClick={() => navigate("/app/createBlog")}
          className="cta-button"
        >
          🚀 Start Writing Now
        </button>
      </section>
    </div>
  );
}

export default Home;
