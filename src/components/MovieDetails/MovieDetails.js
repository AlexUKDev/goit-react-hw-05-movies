import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieDetailsById } from '../../api/api';
import { GoBackLink } from '../GoBackLink/GoBackLink';
import { FilmInfoCard } from '../FilmInfoCard/FilmInfoCard';
import { Title, Box, Links, LinkItem, NavLinkItem } from './MovieDetails.Syled';

export const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  // const [reviews, setReviews] = useState(null);
  // const [casts, setCasts] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (details) {
      return;
    }
    const getDetails = async () => {
      try {
        const response = await getMovieDetailsById(movieId);
        console.log(response);
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

  return (
    <div>
      <GoBackLink to="/" />
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
// <h2>MovieDetails</h2>
