import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { API_BASE_URL, ENDPOINTS } from "../constants/apiEndPoints";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an Auth Provider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initializing, setInitializing] = useState(true);

  // To clear the user token initially
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("token");
      }
    }
    setInitializing(false);
  }, []);

  const signUp = async (email, username, password) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(API_BASE_URL + ENDPOINTS.SIGNUP, {
        email: email,
        username: username,
        password: password,
      });

      console.log("Signup response:", response.data);

      if (response.data.success) {
        return {
          success: true,
          message: response.data.message,
          data: response.data.data,
        };
      } else {
        setError(response.data.message || "Sign up failed");
        return {
          success: false,
          message: response.data.message,
        };
      }
    } catch (error) {
      console.error("Sign up error:", error);

      let errorMessage = "Sign up failed";

      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.message) {
        errorMessage = error.message;
      }

      setError(errorMessage);
      return {
        success: false,
        message: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(API_BASE_URL + ENDPOINTS.SIGNIN, {
        email,
        password,
      });

      console.log("Signin response:", response.data);

      if (response.data.success) {
        // Store token
        const token = response.data.token;
        localStorage.setItem("token", token);

        setIsAuthenticated(true);

        return {
          success: true,
          message: response.data.message,
          data: response.data.data,
        };
      } else {
        setError(response.data.message || "Sign in failed");
        return {
          success: false,
          message: response.data.message,
        };
      }
    } catch (error) {
      console.error("Sign in error:", error);

      let errorMessage = "Sign in failed";

      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.message) {
        errorMessage = error.message;
      }

      setError(errorMessage);
      return {
        success: false,
        message: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);

      // Clear storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Reset state
      setUser(null);
      setIsAuthenticated(false);
      setError(null);
    } catch (error) {
      console.error("Sign out error:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    isAuthenticated,
    loading,
    error,
    initializing,
    signUp,
    signIn,
    signOut,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
