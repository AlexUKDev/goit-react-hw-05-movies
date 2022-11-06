import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCasts } from '../../api/api';
import { getFullImgUrl } from '../../utils/getFullImgUrl';
import { FaImages } from 'react-icons/fa';
import {
  List,
  ListItem,
  Avatr,
  AccentTitle,
  InfoText,
  ImgBox,
} from './Cast.Syled';

export const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    if (casts) {
      return;
    }

    const getCastsInfo = async () => {
      try {
        const res = await getCasts(movieId);

        setCasts(res.cast);
      } catch (error) {
        console.log(error);
      }
    };

    getCastsInfo();
  }, [casts, movieId]);

  if (!casts) {
    return;
  }
  return (
    <>
      {casts.length > 0 && (
        <List>
          {casts.map(cast => {
            const { profile_path, character, name } = cast;

            const avatarImg = getFullImgUrl(profile_path);

            return (
              <ListItem key={cast.id}>
                <ImgBox>
                  {profile_path ? (
                    <Avatr src={avatarImg} alt={name} />
                  ) : (
                    <FaImages size={100} />
                  )}
                </ImgBox>

                <InfoText>
                  <AccentTitle>Name:</AccentTitle> {name}
                </InfoText>
                <InfoText>
                  <AccentTitle>Character: </AccentTitle>
                  {character}
                </InfoText>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};
