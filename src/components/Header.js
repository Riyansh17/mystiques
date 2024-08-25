import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Header.css";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/assets/images/Logo.png" alt="Mystique Shutters Logo" />
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={mobileMenuOpen ? "open" : ""}>
        <ul>
          <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link to="/portfolio" onClick={toggleMobileMenu}>Portfolio</Link></li>
          <li><Link to="/wedding" onClick={toggleMobileMenu}>Wedding</Link></li>
          <li><Link to="/pre-wedding" onClick={toggleMobileMenu}>Pre-Wedding</Link></li>
          <li><Link to="/film" onClick={toggleMobileMenu}>Film</Link></li>
          <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;