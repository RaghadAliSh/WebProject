import React from "react";
import "./Navigation-bar.css"; 

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">
          YourLogo
        </a>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
