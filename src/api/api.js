import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '2a9508b53f96c4bcd1c5060f447f5cf1';
const OPTIONS = {
  params: {
    api_key: API_KEY,
  },
};

axios.defaults.baseURL = BASE_URL;
export const getTrendingMovies = async () => {
  const { data } = await axios('/3/trending/movie/week', OPTIONS);

  return data.results;
};

export const getMovieDetailsById = async movieId => {
  const { data } = await axios(`/3/movie/${movieId}`, OPTIONS);

  return data;
};

export const getCasts = async id => {
  const { data } = await axios(`/3/movie/${id}/credits`, OPTIONS);

  return data;
};

export const getReviews = async id => {
  const { data } = await axios(`/3/movie/${id}/reviews`, OPTIONS);

  return data;
};

export const getMoviesByName = async name => {
  const options = {
    params: {
      api_key: API_KEY,
      query: name,
    },
  };
  const { data } = await axios(`/3/search/movie`, options);

  return data;
};

//SEND REQUEST
// https://api.themoviedb.org/3/search/movie?api_key=2a9508b53f96c4bcd1c5060f447f5cf1&language=en-US&query=fdf&page=1&include_adult=false
