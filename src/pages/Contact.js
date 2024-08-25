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
          <p>Email: info@mystiqueshutters.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Photography Lane, New York, NY 10001</p>
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