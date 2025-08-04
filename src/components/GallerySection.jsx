import React from "react";
import "./GallerySection.css";


const pets = [
  { id: 1, name: "Buddy", age: "2 years", image: "one.jpeg" },
  { id: 2, name: "Luna", age: "1.5 years", image: "image.png" },
  { id: 3, name: "Max", age: "3 years", image: "five.jpeg" },
  { id: 4, name: "Bella", age: "4 months", image: "four.jpg" },
  { id: 5, name: "Rocky", age: "2.5 years", image: "five.jpeg" },
  { id: 6, name: "Daisy", age: "1 year", image: "three.jpeg" },
];

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Meet Our Paw-some Friends 🐾</h2>

      <div className="slider">
        <div className="slide-track">
          {pets.concat(pets).map((pet, index) => (
            <div className="slide" key={index}>
              <img src={`/images/${pet.image}`} alt={pet.name} />
              <div className="slide-overlay">
                <h3>{pet.name}</h3>
                <p>{pet.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
