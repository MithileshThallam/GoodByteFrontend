import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form">
        <div className="login-field">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="login-field">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
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
