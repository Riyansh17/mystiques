import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/pages/Contact.css';


function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: mystiqueshutters@gmail.com</p>
          <p>Phone: +91-70145-39810</p>
          <p>Address: Udaipur, Rajasthan 313001</p>
        </div>
        <ContactForm />
      </div>
      <div className="map">
        {/* Add an interactive map component here */}
      </div>
    </div>
  );
}

export default Contact;