import React from "react";
import "./Navbar.css"; // Add a CSS file for Navbar-specific styles

const Navbar = () => {
  return (
    <nav className="nav">
      <h5 className="logo">RetroLearn</h5>
      <ul className="nav-list">
        <li>
          <a href="#features">Features</a>
          <div className="dropdown">
            <a href="#feature1">Teach Flexibly</a>
            <a href="#feature2">Engage Students</a>
            <a href="#feature3">Track Progress</a>
            <a href="#feature4">Collaborate</a>
          </div>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
        <li>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="button">🔍</button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
