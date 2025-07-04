import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignout = async () => {
    await signOut();
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      gap: "10px",
      padding: "1rem",
      borderBottom: "1px solidrgb(54, 106, 158)"
    }}>
      <div 
        onClick={() => navigate("/app/all-blogs")}
        style={{ cursor: "pointer", padding: "0.5rem 1rem" }}
      >
        All Blogs
      </div>
      <div 
        onClick={() => navigate("/app/my-blogs")}
        style={{ cursor: "pointer", padding: "0.5rem 1rem" }}
      >
        My Blogs
      </div>
      <div 
        onClick={() => navigate("/app/createBlog")}
        style={{ cursor: "pointer", padding: "0.5rem 1rem" }}
      >
        Create Blog
      </div>
      <div 
        onClick={() => navigate("/app/home")}
        style={{ cursor: "pointer", padding: "0.5rem 1rem" }}
      >
        Profile
      </div>
      <div 
        onClick={handleSignout}
        style={{ cursor: "pointer", padding: "0.5rem 1rem", color: "red" }}
      >
        Sign Out
      </div>
    </div>
  );
}
