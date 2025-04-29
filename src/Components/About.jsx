import React from "react";
import { FaHandsHelping, FaUtensils, FaPeopleCarry } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2 className="about-title">Why Good Byte?</h2>

        <div className="about-item fade-in">
          <FaHandsHelping className="about-icon" />
          <p className="about-text">
            Good Byte is a community-driven platform connecting food donors and seekers. Whether you’re a household, restaurant, or NGO, you can share excess food with those who need it — safely and respectfully.
          </p>
        </div>

        <div className="about-item fade-in delay-1">
          <FaUtensils className="about-icon" />
          <p className="about-text">
            We help reduce food waste by connecting surplus food with people in need, all while ensuring safety, dignity, and convenience for everyone involved.
          </p>
        </div>

        <div className="about-item fade-in delay-2">
          <FaPeopleCarry className="about-icon" />
          <p className="about-text">
            Our mission is to build a culture of giving where communities care for each other. Join us in turning every meal into a meaningful gesture of kindness.
          </p>
        </div>
      </div>
    </section>
  );
}
