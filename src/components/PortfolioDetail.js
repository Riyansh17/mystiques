import React, { useState } from 'react';
import '../styles/components/PortfolioDetail.css';
import ImageModal from './ImageModal';

function PortfolioDetail({ image }) {
  const [selectedDetailImage, setSelectedDetailImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (detailImage, index) => {
    setSelectedDetailImage(detailImage);
    setCurrentImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedDetailImage(null);
  };

  const handlePrevImage = () => {
    const newIndex = (currentImageIndex - 1 + image.detailImages.length) % image.detailImages.length;
    setSelectedDetailImage(image.detailImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (currentImageIndex + 1) % image.detailImages.length;
    setSelectedDetailImage(image.detailImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="portfolio-detail">
      <div className="main-image">
        <h2>{image.title}</h2>
        {image.detailImages && image.detailImages.length > 0 ? (
          <img 
            src={image.detailImages[0].src} 
            alt={image.alt} 
            onClick={() => handleImageClick(image.detailImages[0], 0)}
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <div className="thumbnail-grid">
        {image.detailImages && image.detailImages.length > 1 &&
          image.detailImages.slice(1).map((imageItem, index) => (
            <img 
              key={imageItem.id} 
              src={imageItem.src} 
              alt={`${image.title} ${index + 1}`} 
              onClick={() => handleImageClick(imageItem, index + 1)}
            />
          ))
        }
      </div>
      {selectedDetailImage && (
        <ImageModal 
          image={{
            ...selectedDetailImage,
            caption: `${image.title} - Image ${currentImageIndex + 1}`
          }}
          onClose={handleCloseModal}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      )}
    </div>
  );
}

export default PortfolioDetail;