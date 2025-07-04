import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/components/NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignout = async () => {
    await signOut();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div onClick={() => navigate("/app/all-blogs")} className="navbar-item">
          📚 All Blogs
        </div>
        <div onClick={() => navigate("/app/my-blogs")} className="navbar-item">
          ✍️ My Blogs
        </div>
        <div
          onClick={() => navigate("/app/createBlog")}
          className="navbar-item"
        >
          ➕ Create Blog
        </div>
        <div onClick={() => navigate("/auth/profile")} className="navbar-item">
          👤 Profile
        </div>
        <div onClick={handleSignout} className="navbar-item signout">
          🚪 Sign Out
        </div>
      </div>
    </nav>
  );
}
