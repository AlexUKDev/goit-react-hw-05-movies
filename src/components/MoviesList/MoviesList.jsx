import { useLocation } from 'react-router-dom';
import { Wrap, Title, List, ListItem, LinkItem } from './MoviesList.Styles';

export const MoviesList = ({ moviesList, title }) => {
  const location = useLocation();
  return (
    <Wrap>
      {title && <Title>{title}</Title>}
      <List>
        {moviesList.map(({ id, original_title }) => {
          return (
            <ListItem key={id}>
              <LinkItem to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </LinkItem>
            </ListItem>
          );
        })}
      </List>
    </Wrap>
  );
};
