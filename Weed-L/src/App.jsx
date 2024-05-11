import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sessions from "./pages/Sessions";
import Strains from "./pages/Strains";
import Login_Signup from "./pages/Login_Signup";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/strains" element={<Strains />} />
        <Route path="/login_signup" element={<Login_Signup />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
