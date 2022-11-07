import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'api/api';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoaging, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';

  console.log(search);

  const createMoviesByName = async filmName => {
    if (!filmName) {
      return;
    }

    try {
      setIsLoading(true);
      setMovies([]);

      const { results } = await getMoviesByName(filmName);
      if (results.length === 0) {
        Notify.failure(
          'Nothing was found according to your request. Try again'
        );
      }

      setMovies(results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchParams = e => {
    let searchValue = e.target.value.toLowerCase().trim();

    setSearchParams(searchValue ? { query: searchValue } : {});

    console.log(searchValue);
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    createMoviesByName(search);
  }, [search]);

  return (
    <>
      <SearchBox onChangeFn={getSearchParams} searchValue={search} />
      {isLoaging && <p>Loading</p>}
      {movies.length > 0 && <MoviesList moviesList={movies} />}
    </>
  );
};
