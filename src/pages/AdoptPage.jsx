import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AdoptPage.css";

const pets = [
  {
    name: "Bella",
    breed: "Labrador Retriever",
    age: "2 years",
    gender: "Female",
    description: "A playful and loving labrador who enjoys fetch and belly rubs.",
    image: "/images/one.jpeg",
  },
  {
    name: "Max",
    breed: "Golden Retriever",
    age: "3 years",
    gender: "Male",
    description: "Gentle and friendly, perfect for families with kids.",
    image: "/images/two.jpeg",
  },
  {
    name: "Milo",
    breed: "Beagle",
    age: "1.5 years",
    gender: "Male",
    description: "An energetic little explorer who loves long walks.",
    image: "/images/three.jpeg",
  },
  {
    name: "Lucy",
    breed: "Persian Cat",
    age: "4 years",
    gender: "Female",
    description: "A calm, affectionate cat who enjoys naps and cuddles.",
    image: "/images/image.png",
  },
];

const AdoptPage = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  const openModal = (pet) => {
    setSelectedPet(pet);
    document.body.style.overflow = "hidden"; // prevent scroll
  };

  const closeModal = () => {
    setSelectedPet(null);
    document.body.style.overflow = "auto"; // re-enable scroll
  };

  return (
    <div className="adopt-wrapper">
      <Navbar />

      <div className="adopt-page">
        <h2 className="adopt-title">Find Your Perfect Companion </h2>
        <p className="adopt-subtitle">Browse pets waiting for a forever home.</p>

        {/* Gallery Section */}
        <div className="gallery-section">
          <h3 className="gallery-title">Pet Gallery</h3>
          <div className="gallery-container">
            <div className="gallery-scroll">
              {[...pets, ...pets].map((pet, index) => (
                <img
                  key={index}
                  src={pet.image}
                  alt={pet.name}
                  className="gallery-img"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Pet Profiles */}
        <div className="pet-profiles">
          {pets.map((pet, index) => (
            <div key={index} className={`pet-card ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="pet-info">
                <h3>{pet.name}</h3>
                <p><strong>Breed:</strong> {pet.breed}</p>
                <p><strong>Age:</strong> {pet.age}</p>
                <p><strong>Gender:</strong> {pet.gender}</p>
                <p className="pet-desc">{pet.description}</p>
                <button className="adopt-btn" onClick={() => openModal(pet)}>
                  ❤️ Adopt {pet.name}
                </button>
              </div>
              <div className="pet-image">
                <img src={pet.image} alt={pet.name} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* Modal */}
      {selectedPet && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-form" onClick={(e) => e.stopPropagation()}>
            <h2>Adopt {selectedPet.name}</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Why do you want to adopt?" required />
              <button type="submit" className="submit-btn">Submit Application</button>
              <button className="close-btn" onClick={closeModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdoptPage;
