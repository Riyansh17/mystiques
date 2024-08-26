import React from 'react';
import '../styles/pages/Home.css';
import Testimonial from '../components/Testimonial';

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
          <div className="service-card">
            <h3>Weddings</h3>
            <p>Capturing timeless moments of love and celebration on your special day.</p>
          </div>
          <div className="service-card">
            <h3>Portraits</h3>
            <p>Creating unique and personalized portraits that reflect your true essence.</p>
          </div>
          <div className="service-card">
            <h3>Commercial Shoot</h3>
            <p>Showcasing style and elegance with stunning fashion photography.</p>
          </div>
          <div className="service-card">
            <h3>Films</h3>
            <p>Telling captivating stories through creative and thought-provoking cinematic images.</p>
          </div>
        </div>
      </section>
      <section className='testimonial'>
    <Testimonial />
  </section>
    </div>
  );
}

export default Home;