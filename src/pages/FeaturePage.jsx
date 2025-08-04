import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import "./FeaturePage.css";

const features = [
  {
    img: "/images/easy-adopt.jpeg",
    title: "Easy Adoption Process",
    desc: "We make the adoption process smooth, quick, and stress-free for you and your new friend.",
  },
  {
    img: "/images/features2.jpeg",
    title: "Health-Checked Pets",
    desc: "All our pets are vaccinated, groomed, and regularly checked by vets to ensure their well-being.",
  },
  {
    img: "/images/feature3.png",
    title: "24/7 Support",
    desc: "Our team is always available to help you with any questions or pet-related guidance you need.",
  },
  {
    img: "/images/feature4.jpeg",
    title: "Wide Variety of Breeds",
    desc: "Whether you love big dogs, small puppies, or cuddly cats — we’ve got a perfect match for you.",
  },
  {
    img: "/images/feature5.jpeg",
    title: "Verified Shelters",
    desc: "We only partner with certified shelters and rescue homes to ensure safety and ethical practices.",
  },
  {
    img: "/images/feature6.jpeg",
    title: "Free Training & Tips",
    desc: "Get access to pet care tips, training guides, and expert advice with every adoption.",
  },
  {
    img: "/images/feature7.jpeg",
    title: "Pet Parent Community",
    desc: "Join our community, share your pet journey, and bond with fellow animal lovers across the country.",
  },
  {
    img: "/images/feature.png",
    title: "Adoption Stories",
    desc: "Read about happy endings and heartwarming journeys from pet parents who found their perfect match.",
  },
];

const FeaturePage = () => {
  return (
    <>
      <Navbar />

      <section className="features-section">
        <motion.div
          className="features-hero"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="features-title">Why Choose PawfectHome ? 🐾 </h2>
          <p className="features-subtitle">
            We bring pets closer to homes and hearts — discover how we make adoption easier and more meaningful.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={feature.img} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FeaturePage;
