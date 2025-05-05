// components/FoodCard.jsx
import React from "react";
import "./FoodCard.css";

const FoodCard = ({ food, onClick }) => {
  const { foodName, photo, vegNonVeg, expiryDate } = food;

  const getLabelColor = () => {
    return vegNonVeg === "veg" ? "#4caf50" : "#f44336";
  };

  return (
    <div
      className="food-card"
      style={{ backgroundImage: `url(${photo})` }}
      onClick={onClick}
    >
      <div className="card-content">
        <h3>{foodName}</h3>
        <p className="badge" style={{ backgroundColor: getLabelColor() }}>
          {vegNonVeg.toUpperCase()}
        </p>
        <p className="expiry">Expires on: {new Date(expiryDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default FoodCard;
