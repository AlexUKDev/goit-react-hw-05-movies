// import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/api';
import { TrendingList } from '../TrendingList/TrendingList';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    if (trendingMovies) {
      return;
    }

    const getMoviesList = async () => {
      const response = await getTrendingMovies();
      if (trendingMovies === null) {
        setTrendingMovies(response);
      }
    };

    getMoviesList();
  }, [trendingMovies]);

  return (
    <>
      {trendingMovies && (
        <TrendingList moviesList={trendingMovies} title={'Trending today'} />
      )}
    </>
  );
};
