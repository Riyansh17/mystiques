import React, { useState } from 'react';
import '../styles/components/ImageGallery.css';

function ImageGallery({ images, categories, onImageClick }) {
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all'
    ? images
    : images.filter(img => img.category === filter);

  return (
    <div className="image-gallery">
      <div className="gallery-filters">
        <button onClick={() => setFilter('all')}>All</button>
        {categories.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)}>{cat}</button>
        ))}
      </div>
      <div className="gallery-grid">
        {filteredImages.map(img => (
          <div key={img.id} className="gallery-item" onClick={() => onImageClick(img)}>
            <img src={img.src} alt={img.alt} />
            <div className="image-overlay">
              <h3>{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;