import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>MystiqueShutters</h1>
          <p>Capturing Moments, Crafting Memories</p>
          {/* <div className="cta-buttons">
            <Link to="/portfolio" className="cta-button">View Portfolio</Link>
            <Link to="/contact" className="cta-button">Book Now</Link>
          </div> */}
        </div>
      </div>
      <section className="intro">
        <h2>Welcome to MystiqueShutters</h2>
        <p>
          We are a premier photography business with a global reach, dedicated to
          capturing your most precious moments with artistry and precision. Our team
          of skilled photographers brings creativity and expertise to every shoot,
          ensuring that your memories are preserved in stunning detail.
        </p>
      </section>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <Link to="/wedding" className="service-card">
            <h3>Wedding Photography</h3>
          </Link>
          <Link to="/pre-wedding" className="service-card">
            <h3>Pre-Wedding Shoots</h3>
          </Link>
          <Link to="/film" className="service-card">
            <h3>Film Photography</h3>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;