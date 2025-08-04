import React from "react";
import ContactSection from "../components/ContactSection";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        {/* Left Side - Contact Info */}
        <div className="contact-left">
          <h2>Get in Touch 🐾</h2>
          <p>If you have any questions or want to reach out, contact us:</p>

          <div className="contact-info">
            <p><strong>📍 Address:</strong> 123 Paw Street, Kolkata, India</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>📧 Email:</strong> PawfectHome@support.com</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-right">
          <form className="contact-form">
            <h3>Send Us a Message</h3>
            <input type="text" placeholder=" Call yourself...?" required />
            <input type="email" placeholder="your@gmail.com..." required />
            <textarea placeholder="meow your thoughts..." rows="5" required></textarea>
            <button type="Submit" style={{
              backgroundColor: "#e6532fff"
            }}>Send the Magic 📨</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
