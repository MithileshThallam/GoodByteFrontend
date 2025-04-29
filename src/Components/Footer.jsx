import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Good Byte</h3>
        <p className="footer-tagline">
          Bridging hearts and meals — because every byte counts.
        </p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Good Byte. Mithilesh Thallam. All rights reserved.</p>
      </div>
    </footer>
  );
}
