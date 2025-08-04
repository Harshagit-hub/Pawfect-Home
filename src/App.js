import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Sections for Home
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import GallerySection from "./components/GallerySection";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Separate Pages
import FeaturePage from "./pages/FeaturePage";
import GalleryPage from "./pages/GalleryPage";
import AdoptPage from "./pages/AdoptPage";
import ContactPage from "./pages/ContactPage";

const HomePage = () => (
  <>
    <Navbar />
    <HeroSection />
    <InfoSection />
    <GallerySection />
    <FeaturesSection />
    <ContactSection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
