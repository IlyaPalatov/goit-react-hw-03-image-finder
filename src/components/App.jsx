import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Spinner from './Spinner';
import { fetchImages } from './api';

import '../styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      images: [],
      page: 1,
      isLoading: false,
      selectedImage: null,
      hasMoreImages: false, 
    };
  }

  handleFormSubmit = query => {
    this.setState({ searchQuery: query, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery || prevState.page !== this.state.page) {
      this.fetchImagesFromApi();
    }
  }

  fetchImagesFromApi = () => {
    const { searchQuery, page } = this.state;
    if (!searchQuery) return;

    this.setState({ isLoading: true });

    fetchImages(searchQuery, page)
      .then(data => {
        const hasMoreImages = data.length >= 12;
        this.setState(prevState => ({
          images: [...prevState.images, ...data],
          isLoading: false,
          hasMoreImages, 
        }));

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ isLoading: false });
      });
  };

  handleImageClick = image => {
    this.setState({ selectedImage: image });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage, hasMoreImages } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Spinner />}
        {hasMoreImages && <Button onClick={this.handleLoadMore} />}
        {selectedImage && <Modal image={selectedImage} onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

export default App;
