import React from "react";
import "./FoodModal.css";

const FoodModal = ({ food, onClose }) => {
  if (!food) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={food.photo} alt={food.foodName} className="modal-image" />
        <div className="modal-details">
          <h2>{food.foodName}</h2>
          <p><strong>Quantity:</strong> {food.quantity}</p>
          <p><strong>Type:</strong> {food.vegNonVeg === "veg" ? "Vegetarian" : "Non-Vegetarian"}</p>
          <p><strong>Expiry Date:</strong> {new Date(food.expiryDate).toDateString()}</p>
          <p><strong>Address:</strong> {food.address}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
