import React from "react";
import "./FeaturesSection.css"; // import the CSS file

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Why Choose PawfectHome?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">🐾 Pet Adoption</h3>
            <p className="feature-text">Find your perfect companion and give them a loving forever home.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">🩺 Health Services</h3>
            <p className="feature-text">Access vet care, vaccinations, and pet wellness resources easily.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">🏠 Shelter Info</h3>
            <p className="feature-text">Discover local shelters, NGOs, and adoption events near you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
