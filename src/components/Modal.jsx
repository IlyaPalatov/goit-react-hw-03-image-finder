import React, { Component } from 'react';
import basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleImageClick = () => {
    const { image } = this.props;
    const instance = basicLightbox.create(`<img src="${image.largeImageURL}" alt="${image.tags}" />`);
    instance.show();
  };

  render() {
    return (
      <div className="overlay" onClick={this.props.onClose}>
        <div className="modal">
          <img src={this.props.image.webformatURL} alt={this.props.image.tags} onClick={this.handleImageClick} />
        </div>
      </div>
    );
  }
}

export default Modal;
