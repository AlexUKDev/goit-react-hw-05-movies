// import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/api';
import { TrendingList } from '../TrendingList/TrendingList';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    const getMoviesList = async () => {
      const results = await getTrendingMovies();
      setTrendingMovies(results);
    };

    getMoviesList();
    console.log(trendingMovies);
  });

  return (
    <>
      {trendingMovies && (
        <TrendingList moviesList={trendingMovies} title={'Trending today'} />
      )}
    </>
  );
};
