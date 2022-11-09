// import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../api/themoviedbApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const createTrandingMovies = async () => {
    try {
      const response = await getTrendingMovies();

      setMovies(response);
    } catch (error) {
      Notify.failure(
        'Sorry something wrong. Check the internet and try reload.'
      );
      console.log(error);
    }
  };

  useEffect(() => {
    if (movies.length > 0) {
      return;
    }
    createTrandingMovies();
  }, [movies]);

  if (movies.length < 0) {
    return;
  }
  // const backLinkRef = location.state?.from ?? '/';
  return (
    <MoviesList
      moviesList={movies}
      title={'Trending today'}
      state={{ from: location }}
    />
  );
};

export default Home;
