import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import './DonateFood.css';
import axios from 'axios';

const DonateFood = () => {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [vegNonVeg, setVegNonVeg] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!photo) {
      alert("Please upload a photo");
      setIsSubmitting(false);
      return;
    }

    try {
      const base64Photo = await toBase64(photo);

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
        setIsSubmitting(false);
        return;
      }

      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          alert("Session expired. Please login again.");
          localStorage.removeItem("token");
          setIsSubmitting(false);
          return;
        }
      } catch (err) {
        alert("Invalid session. Please login again.");
        localStorage.removeItem("token");
        setIsSubmitting(false);
        return;
      }

      const payload = {
        foodName,
        quantity,
        vegNonVeg,
        expiryDate,
        address,
        photo: base64Photo
      };

      const response = await axios.post(
        'https://good-byte-backend.vercel.app/api/food/donate',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (response.status === 201) {
        alert("Food donated successfully!");
        setFoodName('');
        setQuantity('');
        setVegNonVeg('');
        setExpiryDate('');
        setAddress('');
        setPhoto(null);
      }
    } catch (error) {
      console.error("Donation error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to donate food. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="donate-food-wrapper">
      <div className="overlay">
        <div className="donate-food-container">
          <div className="donate-food-form">
            <h2>Donate Food</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="foodName">Food Name</label>
                <input type="text" id="foodName" value={foodName} onChange={(e) => setFoodName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" required />
              </div>
              <div className="form-group">
                <label htmlFor="vegNonVeg">Veg/Non-Veg</label>
                <select id="vegNonVeg" value={vegNonVeg} onChange={(e) => setVegNonVeg(e.target.value)} required>
                  <option value="">Select</option>
                  <option value="veg">Veg</option>
                  <option value="nonVeg">Non-Veg</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="date" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="photo">Upload Photo</label>
                <input type="file" id="photo" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} required />
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Donate'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateFood;
