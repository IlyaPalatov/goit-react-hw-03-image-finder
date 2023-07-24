import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;
    return (
      <ul className="gallery">
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} onImageClick={onImageClick} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
