// import { Link, Outlet } from 'react-router-dom';
import { Mesage } from 'components/Mesage/Mesage';
import { useState } from 'react';
import { getTrendingMovies } from '../../api/api';
import { MoviesList } from '../../components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const createTrandingMovies = async () => {
    try {
      const response = await getTrendingMovies();

      setMovies(response);
    } catch (error) {
      console.log(error);
    }
  };

  createTrandingMovies();
  return (
    <>
      {movies.length > 0 ? (
        <MoviesList moviesList={movies} title={'Trending today'} />
      ) : (
        <Mesage
          mesage={'Sorry something wrong. Check the internet and try reload.'}
        />
      )}
    </>
  );
};
