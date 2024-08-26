import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import PortfolioDetail from '../components/PortfolioDetail';
import '../styles/pages/Portfolio.css';
import portfolioImages from '../assets/Data/portfolioImages';

const categories = ['wedding', 'Pre-wed', 'event'];

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { imageId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (imageId) {
      const image = portfolioImages.find(img => img.id.toString() === imageId);
      if (image) {
        setSelectedImage(image);
      }
    } else {
      setSelectedImage(null);
    }
  }, [imageId]);

  const handleImageClick = (image) => {
    const slug = image.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/gallery/${image.id}/${slug}`);
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