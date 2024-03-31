import axios from 'axios';

async function fetchImages(query, currentPage, resultPerPage) {
  const configUrl = {
    params: {
      key: '43141556-e350930b31d45d5f85cd5b156',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: currentPage,
      per_page: resultPerPage,
    },
  };
  const data = await axios('https://pixabay.com/api/', configUrl);
  return data;
}

export { fetchImages };
