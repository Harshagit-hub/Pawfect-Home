import React from "react";
import "./InfoSection.css";

function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-container">
        <div className="info-image">
          <img src="/images/dogs.jpeg" alt="Happy pets" />
        </div>
        <div className="info-text">
          <h2>Built with Love for Every Paw</h2>
          <p>
            PawfectHome is your trusted friend in pet parenting. Whether you’re adopting,
            caring for a furry companion, or just browsing adorable faces — we’re here
            to make it joyful and simple.
          </p>
          <div className="info-highlights">
            <div className="highlight">
              <span>❤️</span> Pet Adoption Made Easy
            </div>
            <div className="highlight">
              <span>📚</span> Expert Guides & Resources
            </div>
            <div className="highlight">
              <span>👥</span> Community of Pet Lovers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
