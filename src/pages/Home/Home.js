// import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MoviesList } from '../../components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

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
    if (movies.length === 0) {
      createTrandingMovies();
    }
  }, [movies]);

  return (
    <>
      {movies.length > 0 && (
        <MoviesList moviesList={movies} title={'Trending today'} />
      )}
    </>
  );
};
