import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://good-byte-backend.vercel.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token and user in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("Stored token:", data.token); // Debug
        alert("Login successful");
        navigate("/dashboard");
      } else {
        console.error("Login error:", data); // Debug
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#" className="forgot-link">Forgot password?</a>
        </div>

        <button type="submit" className="login-btn">Login</button>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
        </div>
      </form>
    </div>
  );
}
