import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to='/'><img src='/img/logo.jpg'></img></Link>
        </div>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
        <li className="nav-item">
            <Link to="/">Diagnose</Link>
          </li>
          <li className="nav-item">
            <Link to="/DiseasesPage">Diseases</Link>
          </li>
          <li className="nav-item">
            <Link to='/Agency'>Agnecies</Link>
          </li>
          <li className="nav-item">
            <Link to="/About">About</Link>
          </li>
          
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
