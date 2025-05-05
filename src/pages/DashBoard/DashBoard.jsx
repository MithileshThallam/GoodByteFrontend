import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const userName = "Ravi Sharma";
  const isNGO = true;

  return (
    <div className="dashboard-background">
        <div className="overlay">

       
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2>Welcome, {userName} {isNGO && <span className="ngo-badge">NGO</span>}</h2>
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
