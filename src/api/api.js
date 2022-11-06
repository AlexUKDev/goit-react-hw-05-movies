import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '2a9508b53f96c4bcd1c5060f447f5cf1';

axios.defaults.baseURL = BASE_URL;
export const getTrendingMovies = async () => {
  const options = {
    params: {
      api_key: API_KEY,
    },
  };

  const { data } = await axios('/3/trending/movie/week', options);

  return data.results;
};

export const getMovieDetailsById = async movieId => {
  const options = {
    params: {
      api_key: API_KEY,
    },
  };

  const { data } = await axios(`/3/movie/${movieId}`, options);

  return data;
};

export const getCasts = async id => {
  const options = {
    params: {
      api_key: API_KEY,
    },
  };

  const { data } = await axios(`/3/movie/${id}/credits`, options);

  return data;
};

export const getReviews = async id => {
  const options = {
    params: {
      api_key: API_KEY,
    },
  };

  const { data } = await axios(`/3/movie/${id}/reviews`, options);

  return data;
};

//SEND REQUEST
// https://api.themoviedb.org/3/movie/541134/reviews?api_key=2a9508b53f96c4bcd1c5060f447f5cf1&language=en-US&page=1
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=2a9508b53f96c4bcd1c5060f447f5cf1&language=en-US
// https://api.themoviedb.org/3/trending/movie/week?api_key=2a9508b53f96c4bcd1c5060f447f5cf1

// Для бекенда используй themoviedb.org API. Необходимо зарегистриваться (можно ввести произвольные данные) и получить API-ключ.
// В этой работе будут использоваться следующие ендпоинты.

//        /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
//        /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
//        /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
//        /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
//        /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
