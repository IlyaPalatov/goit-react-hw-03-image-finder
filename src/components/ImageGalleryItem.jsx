import React from 'react';

const ImageGalleryItem = ({ image, onImageClick }) => {
  const handleImageClick = () => {
    onImageClick(image);
  };

  return (
    <li className="gallery-item">
      <img src={image.webformatURL} alt={image.tags} onClick={handleImageClick} />
    </li>
  );
};

export default ImageGalleryItem;
