import {
  Wrap,
  Title,
  BoxList,
  ListItem,
  LinkItem,
} from './TrendingList.Styles';

export const TrendingList = ({ moviesList, title }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <BoxList>
        {moviesList.map(({ id, original_title }) => {
          return (
            <ListItem key={id}>
              <LinkItem to={`/movies/${id}`}>{original_title}</LinkItem>
            </ListItem>
          );
        })}
      </BoxList>
    </Wrap>
  );
};
