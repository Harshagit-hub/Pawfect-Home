import React from "react";
import { Link } from "react-router-dom"; // ← Import Link from react-router-dom
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
  <div className="navbar-content">
    <div className="navbar-logo">PawfectHome 🐾 </div>
    <div className="spacer" />
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/features">Features</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/adopt">Adopt</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
</nav>

  );
}

export default Navbar;
