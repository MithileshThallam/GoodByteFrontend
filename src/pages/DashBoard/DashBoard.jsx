import React, { useEffect, useState } from 'react';
import './DashBoard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>; // or redirect to login if user is not logged in
  }

  const { fullName, userType } = user;

  return (
    <div className="dashboard-background">
      <div className="overlay">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h2>
              Welcome, {fullName} {userType === "ngo" && <span className="ngo-badge">NGO</span>}
            </h2>
          </div>
          <div className="card-container">
            <Link to="/donate" className="dashboard-card donate-card">
              <div className="card-content">
                <h3>Donate Food</h3>
              </div>
            </Link>
            <Link to="/get-food" className="dashboard-card getfood-card">
              <div className="card-content">
                <h3>Get Food</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
