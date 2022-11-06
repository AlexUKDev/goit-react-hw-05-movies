import { getFullImgUrl } from '../../utils/getFullImgUrl';
import { getGenresList } from '../../utils/getGenresList';
import {
  Wrap,
  ImgBox,
  Img,
  InfoBox,
  AccentText,
} from './FilmCardDetale.Styled';

export const FilmInfoCard = ({ details }) => {
  const { poster_path, original_title, vote_average, overview, genres } =
    details;
  const imgUrl = getFullImgUrl(poster_path);
  const userScore = ((vote_average / 10) * 100).toFixed();
  const genresList = getGenresList(genres);

  return (
    <Wrap>
      <ImgBox>
        <Img src={imgUrl} alt={original_title} />
      </ImgBox>
      <InfoBox>
        <h2>{original_title}</h2>
        <p>
          User Score:
          <span> {userScore}%</span>
        </p>
        <AccentText>Overview</AccentText>
        <span>{overview}</span>
        <AccentText>Genres</AccentText>
        <span>{genresList}</span>
      </InfoBox>
    </Wrap>
  );
};
