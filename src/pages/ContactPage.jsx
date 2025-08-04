import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="contact-wrapper">
       <div className="contact-content-wrapper">
  <div className="contact-header">
    <h1>We’d Love to Hear From You 🐾</h1>
    <p>
      Whether you have questions, feedback, or just want to say hello 👋, we're
      all ears!
    </p>
  </div>

          <div className="contact-container">
            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send us a message</h2>
              <form>
                <input type="text" placeholder="Call yourself...?" required />
                <input type="email" placeholder="your@gmail.com..." required />
                <input type="text" placeholder="What's on your mind?" required />
                <textarea placeholder="meow your thoughts..." rows="6" required></textarea>
                <button type="submit">Send the Magic ❤️</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Reach Us</h2>
              <div className="info-card">
                <h3>📞 Phone</h3>
                <p>+91 98765 43210</p>
              </div>
              <div className="info-card">
                <h3>✉️ Email</h3>
                <p>support@PawfectHome.com</p>
              </div>
              <div className="info-card">
                <h3>📍 Location</h3>
                <p>Kolkata, India</p>
              </div>
            </div>
          </div>

          <div className="contact-footer-message">
            Thank you for visiting <strong>PawfectHome</strong>. Let’s help every paw find a home 🧡
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
