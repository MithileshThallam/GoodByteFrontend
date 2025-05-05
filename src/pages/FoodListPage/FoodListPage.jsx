// components/FoodListPage.jsx
import React, { useEffect, useState } from "react";

import "./FoodListPage.css";
import FoodCard from "../../Components/FoodCard";
import FoodModal from "../../Components/FoodModal";
import { getAllFood } from "../../services/foodService";

const FoodListPage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchFood();
  }, [filter]);

  const fetchFood = async () => {
    try {
      const data = await getAllFood(filter);
      setFoodItems(data);
    } catch (err) {
      console.error("Error fetching food items", err);
    }
  };

  return (
    <div className="dashboard-background">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2>Available Food Donations</h2>
          <div className="filter-buttons">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("veg")}>Veg</button>
            <button onClick={() => setFilter("nonVeg")}>Non-Veg</button>
          </div>
        </div>
        <div className="card-container">
          {foodItems.map((food) => (
            <FoodCard key={food._id} food={food} onClick={() => setSelectedFood(food)} />
          ))}
        </div>
        {selectedFood && (
          <FoodModal food={selectedFood} onClose={() => setSelectedFood(null)} />
        )}
      </div>
    </div>
  );
};

export default FoodListPage;
