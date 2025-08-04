import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./GalleryPage.css";

const petProfiles = [
  {
    name: "Max",
    age: "3 yrs",
    breed: "Golden Retriever",
    bio: "Playful, friendly, loves parks. Vaccinated & healthy.",
    img: "/images/three.jpeg",
  },
  {
    name: "Luna",
    age: "2 yrs",
    breed: "Siamese Cat",
    bio: "Curious, cuddly, indoor cat. Spayed & litter trained.",
    img: "/images/five.jpeg",
  },
  {
    name: "Buddy",
    age: "4 yrs",
    breed: "Beagle",
    bio: "Great with kids, trained & energetic.",
    img: "/images/one.jpeg",
  },
  {
    name: "Milo",
    age: "1 yr",
    breed: "Persian Cat",
    bio: "Quiet, loves naps and windowsills. Fully vaccinated.",
    img: "/images/two.jpeg",
  },
];

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <div className="gallery-page-container"> {/* New container for overall fade-in */}
        <div className="gallery-hero">
          <h1 className="gallery-title">Meet Our Loving Friends 🐾</h1>
          <p className="hero-subtitle">All our pets are healthy, vaccinated, and looking for forever homes.</p>
        </div>

        <div className="gallery-scroll-section">
          <h2 className="gallery-scroll-title">Browse Our Adorable Friends</h2>
          <div className="scrolling-gallery">
            {petProfiles.map((pet, index) => (
              <img
                key={index}
                src={pet.img}
                alt={pet.name}
                className="scroll-gallery-img"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }} // Staggered fade-in for scroll images
              />
            ))}
          </div>
        </div>

        <div className="pet-cards-section">
          {petProfiles.map((pet, index) => (
            <div
              key={index}
              className={`pet-card ${index % 2 === 0 ? "left-img" : "right-img"}`}
              style={{ animationDelay: `${0.2 * index}s` }} // Staggered slideUp animation delay for cards
            >
              {index % 2 === 0 ? (
                <>
                  <div className="pet-bio">
                    <h2>{pet.name}</h2>
                    <p><strong>Age:</strong> {pet.age}</p>
                    <p><strong>Breed:</strong> {pet.breed}</p>
                    <p>{pet.bio}</p>
                  </div>
                  <div className="pet-img">
                    <img src={pet.img} alt={pet.name} />
                  </div>
                </>
              ) : (
                <>
                  <div className="pet-img">
                    <img src={pet.img} alt={pet.name} />
                  </div>
                  <div className="pet-bio">
                    <h2>{pet.name}</h2>
                    <p><strong>Age:</strong> {pet.age}</p>
                    <p><strong>Breed:</strong> {pet.breed}</p>
                    <p>{pet.bio}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;