import React from 'react';
import './Navbar.css'; // Import the styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <h2>Diagnocat</h2>
        </div>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#">Products</a>
            <ul className="dropdown">
              <li><a href="#">Product 1</a></li>
              <li><a href="#">Product 2</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
            <ul className="dropdown">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Team</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">Events</a>
            <ul className="dropdown">
              <li><a href="#">Event 1</a></li>
              <li><a href="#">Event 2</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">Resources</a>
            <ul className="dropdown">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Guides</a></li>
            </ul>
          </li>
        </ul>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
