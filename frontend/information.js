import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Make sure to import your CSS file for styling
import backgroundImage from './background.jpg'; // Import your background image
import logo from './logo.png'; // Import your company's logo

function HomePage() {
  return (
    <div className="container">
      <img src={backgroundImage} alt="Background" className="background-image" />
      <div className="content">
        <img src={logo} alt="Company Logo" className="logo" />
        <div className="info">
          <h1>Welcome to Our Healthcare Platform</h1>
          <p>Our platform offers comprehensive healthcare solutions tailored to your needs. Whether you need access to medical professionals, appointments, or health records, we've got you covered.</p>
        </div>
        <div className="actions">
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;