const API_KEY = '37184113-cc7f1841943926b48c61b8d8a';

const fetchImages = (searchQuery, page) => {
  const URL = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(URL)
    .then(response => response.json())
    .then(data => data.hits)
    .catch(error => {
      console.error('Error fetching data:', error);
      return [];
    });
};

export { fetchImages };
