import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">Good Byte</div>
      </div>
      <div className="navbar-links">
     
        <a href="#about">About</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#join">Join</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-right">
        <Link to='/login'><button className="btn">Login</button></Link>
        <Link to='/signup'><button className="btn btn-outline">Sign Up</button></Link>
      </div>
    </nav>
  );
}
