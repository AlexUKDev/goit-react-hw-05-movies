import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../api/api';
import { Mesage } from 'components/Mesage/Mesage';
import { List, ListItem, Author, Text, Data } from './Reviews.Syled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (reviews) {
      return;
    }

    const getReviewsInfo = async () => {
      try {
        const response = await getReviews(movieId);

        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    getReviewsInfo();
  }, [reviews, movieId]);

  if (!reviews) {
    return;
  }
  return (
    <>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(review => {
            const { author, content, created_at } = review;
            return (
              <ListItem key={review.id}>
                <Author>{author}</Author>
                <Data>{new Date(created_at).toLocaleString()}</Data>
                <Text>{content}</Text>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Mesage mesage={"We don't have any reviews for this movie."} />
      )}
    </>
  );
};

export default Reviews;
