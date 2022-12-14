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

  const backLinkRef = location.state?.from ?? '/';

  return (
    <div>
      <GoBackLink to={backLinkRef} state={{ from: location.state.from }} />
      <FilmInfoCard details={details} />
      <Box>
        <Title>Editional information</Title>
        <Links>
          <LinkItem>
            <NavLinkItem to="cast" state={{ from: location.state.from }}>
              Cast
            </NavLinkItem>
          </LinkItem>
          <LinkItem>
            <NavLinkItem to="reviews" state={{ from: location.state.from }}>
              Reviews
            </NavLinkItem>
          </LinkItem>
        </Links>
      </Box>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
