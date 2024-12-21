// Layout.js
import React from "react";
import Navbar from "./Navbar";
import "./layout.css"; // Optional: Add styling for layout if needed

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="content">{children}</main>
      <footer className="footer">
        <p>&copy; 2024 Dental Expert System. All rights reserved.</p>
        <p>
          Designed with ❤️ by <a href="#">Your Team</a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
