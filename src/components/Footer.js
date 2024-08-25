import React from 'react';
import '../styles/components/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are "Mystique shutters" a team of passionate photographers & videographers dedicated to immortalizing your love story. Our mission is to capture every precious moment with creativity and artistry, ensuring your memories last a lifetime.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Udaipur, Rajasthan</p>
          <p>+91-70145-39810</p>
          <p>mystiqueshutters@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Youtube">Youtube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;