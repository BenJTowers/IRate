import axios from 'axios';

const API_KEY = 'y942100f57f044c652201693e28393f2b';  
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
});

export const searchMovies = (query) => {
  return api.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
};