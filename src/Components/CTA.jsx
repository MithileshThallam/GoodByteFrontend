import React from "react";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section" id="join">
      <div className="cta-content">
        <h2 className="cta-title">Join the Movement to End Food Waste</h2>
        <p className="cta-text">
          Whether you're here to help or in need of support — Good Byte is your community-powered solution.
        </p>
        <div className="cta-buttons">
          <button className="cta-btn signup">Sign Up</button>
          <button className="cta-btn login">Log In</button>
        </div>
      </div>
    </section>
  );
}
