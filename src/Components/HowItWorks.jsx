import React from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        <div className="step-card">
          <div className="step-icon">📝</div>
          <h3>Sign Up</h3>
          <p>Create your account as a donor, receiver, or NGO to get started.</p>
        </div>
        <div className="step-card">
          <div className="step-icon">🍱</div>
          <h3>Donate or Request</h3>
          <p>Post food donations or browse food near you based on location & expiry.</p>
        </div>
        <div className="step-card">
          <div className="step-icon">🤝</div>
          <h3>Connect</h3>
          <p>Once matched, coordinate pickup/delivery and help reduce food waste.</p>
        </div>
      </div>
    </section>
  );
}
