// Layout.js
import React from "react";
import Navbar from "./Navbar";
import "./layout.css"; // Optional: Add styling for layout if needed
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="content">{children}</main>
      <footer className="footer-container">
        {/* <p>&copy; 2024 Dental Expert System. All rights reserved.</p> */}
        <img src="/img/footer.jpg" alt="footer" className="footer" />
      </footer>
    </div>
  );
};

export default Layout;
