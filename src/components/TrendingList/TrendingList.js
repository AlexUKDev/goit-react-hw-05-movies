import { BoxList, ListItem, LinkItem } from './TrendingList.Styles';

export const TrendingList = ({ moviesList }) => {
  return (
    <BoxList>
      {moviesList.map(({ id, original_title }) => {
        return (
          <ListItem key={id}>
            <LinkItem to={`/movies/${id}`}>{original_title}</LinkItem>
          </ListItem>
        );
      })}
    </BoxList>
  );
};
