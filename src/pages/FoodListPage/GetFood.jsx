import React, { useEffect, useState } from "react";
import './GetFood.css';

const GetFood = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [filteredFoodItems, setFilteredFoodItems] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const res = await fetch("https://good-byte-backend.vercel.app/api/food/all");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        const sortedData = data.sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate));
        setFoodItems(sortedData);
        setFilteredFoodItems(sortedData);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };

    fetchFoodItems();
  }, []);

  const handleCardClick = (food) => {
    setSelectedFood(food);
  };

  const handleCloseDetail = () => {
    setSelectedFood(null);
  };

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue);

    if (filterValue === "veg") {
      setFilteredFoodItems(foodItems.filter(item => item.vegNonVeg === "veg"));
    } else if (filterValue === "nonVeg") {
      setFilteredFoodItems(foodItems.filter(item => item.vegNonVeg === "nonVeg"));
    } else {
      setFilteredFoodItems(foodItems);
    }
  };

  const isExpired = (dateStr) => new Date(dateStr) < new Date();

  return (
    <div className={`food-container ${selectedFood ? 'show-blur' : ''}`}>
      <h1 className="food-title">Available Food</h1>

      <div className="filter-container">
        <select className="filter-select" onChange={handleFilterChange} value={filter}>
          <option value="">All</option>
          <option value="veg">Veg</option>
          <option value="nonVeg">Non-Veg</option>
        </select>
      </div>

      <div className="food-card-container">
        {filteredFoodItems.map((item) => (
          <div
            key={item._id}
            className={`food-card ${isExpired(item.expiryDate) ? 'expired' : ''}`}
            onClick={() => handleCardClick(item)}
          >
            <img
              src={item.photo}
              alt={item.foodName}
              className="food-image"
            />
            <div className="food-card-content">
              <h2 className="food-name">{item.foodName}</h2>
              <p className="food-detail">Quantity: {item.quantity}</p>
              <p className="food-detail">Type: {item.vegNonVeg}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedFood && (
        <div className="food-detail-card">
          <button className="close-btn" onClick={handleCloseDetail}>X</button>
          <div className="food-detail-content-wrapper">
            <img
              src={selectedFood.photo}
              alt={selectedFood.foodName}
              className="food-detail-image"
            />
            <div className="food-detail-content">
              <h2 className="food-detail-name">{selectedFood.foodName}</h2>
              <p className="food-detail-quantity">Quantity: {selectedFood.quantity}</p>
              <p className="food-detail-type">Type: {selectedFood.vegNonVeg}</p>
              <p className="food-detail-expiry">Expiry: {new Date(selectedFood.expiryDate).toLocaleDateString()}</p>
              <p className="food-detail-address">Address: {selectedFood.address}</p>
              <p className="food-detail-donor">Donor : {selectedFood.donorId?.fullName||"N/A"}</p>
              <p className="food-detail-donor">Donor Email: {selectedFood.donorId?.email || "N/A"}</p>
              <p className="food-detail-donor">PhoneNo: {selectedFood.donorId?.phoneNumber || "N/A"}</p>



            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetFood;
