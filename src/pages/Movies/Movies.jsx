import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesByName } from 'api/themoviedbApi';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(null);
  const location = useLocation();
  const search = searchParams.get('query') ?? '';

  const createMoviesByName = async filmName => {
    if (!filmName) {
      return;
    }

    try {
      setIsLoading(true);

      const { results } = await getMoviesByName(filmName);
      if (results.length === 0) {
        Notify.failure(
          'Nothing was found according to your request. Try again'
        );
      }

      setMovies(results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchParamsHandler = e => {
    let searchValue = e.target.value.toLowerCase().trim();

    setSearchParams(searchValue ? { query: searchValue } : {});
  };

  const submitHandler = e => {
    e.preventDefault();
    if (!search) {
      Notify.failure('Please enter a movie name and try again');
    }

    setQuery(search);
  };

  useEffect(() => {
    if (location.state !== null) {
      setQuery(search);
    }

    if (!query) {
      return;
    }

    createMoviesByName(query);
  }, [query, search, location]);

  return (
    <>
      <SearchBox
        searchParamsHandler={searchParamsHandler}
        submitHandler={submitHandler}
        searchValue={search}
      />
      {isLoading && <p>Loading...</p>}
      {movies.length > 0 && <MoviesList moviesList={movies} />}
    </>
  );
};

export default Movies;
