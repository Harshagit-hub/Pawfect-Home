import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom"; // Add at the top


function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Adopt your new best friend 🐾</h1>
        <p>Every rescue animal has a story waiting to be written.</p>
        <Link to="/adopt" className="hero-button">Bring happiness</Link>
      </div>
      <div className="hero-image">
        <img src="/images/cutee-dog.jpeg" alt="Cute Dog" />
      </div>
    </section>
  );
}

export default HeroSection;
