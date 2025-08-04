import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>PawfectHome 🐾</h3>
          <p>Bringing love, paws, and companionship into your life.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/adopt">Adopt</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 123 Paw Street, kolkata, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 PawfectHome @support.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PawfectHome. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
