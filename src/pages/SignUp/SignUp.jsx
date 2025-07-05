import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/authService"; // Adjust path if needed
import "./SignUp.css";

export default function Signup() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("user");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    registrationID: "",
    ngoAddress: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userPayload = {
        ...formData,
        userType,
      };

      await signup(userPayload);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      alert(error.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-field">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="signup-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="signup-field">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="signup-field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="signup-field">
          <label>User Type</label>
          <div className="user-type-toggle">
            <label>
              <input
                type="radio"
                value="user"
                checked={userType === "user"}
                onChange={() => setUserType("user")}
              />
              User
            </label>
            <label>
              <input
                type="radio"
                value="ngo"
                checked={userType === "ngo"}
                onChange={() => setUserType("ngo")}
              />
              NGO
            </label>
          </div>
        </div>

        {userType === "ngo" && (
          <>
            <div className="signup-field">
              <label>Registration ID</label>
              <input
                type="text"
                placeholder="Enter NGO Registration ID"
                name="registrationID"
                value={formData.registrationID}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="signup-field">
              <label>NGO Address</label>
              <textarea
                placeholder="Enter NGO Address"
                name="ngoAddress"
                value={formData.ngoAddress}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </>
        )}

        <button type="submit" className="signup-btn">
          Sign Up
        </button>

        <div className="login-link">
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
