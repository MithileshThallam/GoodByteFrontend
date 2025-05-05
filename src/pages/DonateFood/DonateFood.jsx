import React, { useState } from 'react';
import './DonateFood.css';

const DonateFood = () => {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [vegNonVeg, setVegNonVeg] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Food donation submitted!');
  };

  return (
    <div className="donate-food-wrapper">
      <div className="overlay">
      <div className="donate-food-container">

        {/* Right Form Section */}
        <div className="donate-food-form">
          <h2>Donate Food</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="foodName">Food Name</label>
              <input
                type="text"
                id="foodName"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                placeholder="Enter food name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="vegNonVeg">Veg/Non-Veg</label>
              <select
                id="vegNonVeg"
                value={vegNonVeg}
                onChange={(e) => setVegNonVeg(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="veg">Veg</option>
                <option value="nonVeg">Non-Veg</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="date"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="photo">Upload Photo</label>
              <input
                type="file"
                id="photo"
                onChange={(e) => setPhoto(e.target.files[0])}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Donate</button>
          </form>
        </div>
      </div>
    </div>
    </div>  

  );
};

export default DonateFood;
