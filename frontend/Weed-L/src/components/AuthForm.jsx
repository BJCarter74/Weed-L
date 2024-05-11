import React, { useState, useContext } from "react";
import axios from "../api/axiosConfig.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleToggle = () => setIsLogin(!isLogin);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = isLogin ? "/auth/login" : "/auth/register";
    try {
      const response = await axios.post(url, { username, password });
      if (isLogin && response.data.token) {
        setIsAuthenticated(true);
        navigate("/sessions");
      }
    } catch (error) {
      // Implement a user-friendly error handling instead of console.error
      // For example, display an error message on the UI
      console.error(
        `${isLogin ? "Login" : "Registration"} failed:`,
        error.response ? error.response.data : "Error occurred"
      );
    }
  };

  return (
    <div>
      <h1>{isLogin ? "Login" : "Register"}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <button onClick={handleToggle}>
        {isLogin ? "Need to register?" : "Already have an account?"}
      </button>
    </div>
  );
};

export default AuthForm;
