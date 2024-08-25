import React from 'react';
import '../styles/components/ImageModal.css';

function ImageModal({ image, onClose, onPrev, onNext }) {
  return (
    <div className="image-modal-overlay">
      <div className="image-modal-content">
        <img src={image.src} alt={image.alt} />
        {image.caption && <p className="image-caption">{image.caption}</p>}
      </div>
      <button className="modal-button close-button" onClick={onClose}>×</button>
      <button className="modal-button prev-button" onClick={onPrev}>‹</button>
      <button className="modal-button next-button" onClick={onNext}>›</button>
    </div>
  );
}

export default ImageModal;