import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetailsById } from '../../api/themoviedbApi';
import { GoBackLink } from '../../components/GoBackLink/GoBackLink';
import { FilmInfoCard } from '../../components/FilmInfoCard/FilmInfoCard';
import { Title, Box, Links, LinkItem, NavLinkItem } from './MovieDetails.Syled';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (details) {
      return;
    }
    const getDetails = async () => {
      try {
        const response = await getMovieDetailsById(movieId);
        setDetails(response);
      } catch (error) {
        console.log(error);
      }
    };

    getDetails();
  }, [details, movieId]);

  if (!details) {
    return;
  }

  const backLinkRef = location.state?.from ?? '/movies';

  return (
    <div>
      <GoBackLink to={backLinkRef} />
      <FilmInfoCard details={details} />
      <Box>
        <Title>Editional information</Title>
        <Links>
          <LinkItem>
            <NavLinkItem to="cast">Cast</NavLinkItem>
          </LinkItem>
          <LinkItem>
            <NavLinkItem to="reviews">Reviews</NavLinkItem>
          </LinkItem>
        </Links>
      </Box>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
