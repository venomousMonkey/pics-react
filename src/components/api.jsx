import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID vGHwhdKEryiDEG-_GrNA_IIfnNAbhDfyfaxRart-c1k',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
