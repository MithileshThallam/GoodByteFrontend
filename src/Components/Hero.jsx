import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom"; 

export default function Hero() {
  return (
    <div className="hero-section" id="">
      <div className="overlay">
        <h1 className="title">
          Welcome to <br /><span className="highlight">Good Byte</span>
        </h1>
        <p className="subtitle">
          Bridging hearts and meals — donate or receive food with dignity and ease.
        </p>
        <div className="auth-buttons">
          <Link to="/signup"><button className="btn primary">Sign Up</button></Link>
          <Link to="/login"><button className="btn secondary">Login</button></Link>
        </div>
      </div>
    </div>
  );
}
