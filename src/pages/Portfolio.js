import React, { useState } from 'react';
import ImageGallery from '../components/ImageGallery';
import PortfolioDetail from '../components/PortfolioDetail';
import '../styles/pages/Portfolio.css';
import portfolioImages from '../assets/Data/portfolioImages'

const categories = ['wedding', 'Pre-wed', 'event'];

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="portfolio">
      <h1>Our Portfolio</h1>
      <p>Explore our diverse collection of photography across various genres.</p>
      {selectedImage ? (
        <PortfolioDetail image={selectedImage} />
      ) : (
        <ImageGallery 
          images={portfolioImages} 
          categories={categories} 
          onImageClick={handleImageClick}
        />
      )}
    </div>
  );
}

export default Portfolio;