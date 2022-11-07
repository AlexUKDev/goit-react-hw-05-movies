import { Wrap, Title, List, ListItem, LinkItem } from './MoviesList.Styles';

export const MoviesList = ({ moviesList, title }) => {
  return (
    <Wrap>
      {title && <Title>{title}</Title>}
      <List>
        {moviesList.map(({ id, original_title }) => {
          return (
            <ListItem key={id}>
              <LinkItem to={`/movies/${id}`}>{original_title}</LinkItem>
            </ListItem>
          );
        })}
      </List>
    </Wrap>
  );
};
