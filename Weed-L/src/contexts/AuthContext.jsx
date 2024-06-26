import React, { useState, useEffect, createContext } from "react";
import axios from "../api/axiosConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        if (document.cookie.includes("token=")) {
          const response = await axios.get("/auth/status", {
            withCredentials: true,
          });
          setIsAuthenticated(response.data.isAuthenticated);
        }
      } catch (error) {
        console.error("Error checking authentication status:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  const logout = async () => {
    try {
      await axios.post("/auth/logout", {}, { withCredentials: true });
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
