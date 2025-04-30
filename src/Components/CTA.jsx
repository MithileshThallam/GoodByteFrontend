import React from "react";
import "./CTA.css";
import { Link } from "react-router-dom"; 


export default function CTA() {
  return (
    <section className="cta-section" id="join">
      <div className="cta-content">
        <h2 className="cta-title">Join the Movement to End Food Waste</h2>
        <p className="cta-text">
          Whether you're here to help or in need of support — Good Byte is your community-powered solution.
        </p>
        <div className="cta-buttons">
          <Link to='/signup'><button className="cta-btn signup">Sign Up</button></Link>
          <Link to='/login'><button className="cta-btn login">Log In</button></Link>
        </div>
      </div>
    </section>
  );
}
