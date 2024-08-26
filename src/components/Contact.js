import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Contact.css';

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-overlay">
        <h2>Looking for a photographer / videographer?</h2>
        <Link to="/Contact" className="get-in-touch-btn">Get In Touch</Link>
      </div>
    </div>
  );
}

export default Contact;