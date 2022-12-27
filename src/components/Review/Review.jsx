import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovie } from '../../fetchAPI';
import { ReviewsList, ReviewItem, Author, Content } from './Review.styled';

export const Review = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  console.log(reviews);
  useEffect(() => {
    fetchMovie.getMovieReview(id).then(setReviews);
  }, [id]);

  if (reviews === null) {
    return;
  }

  return (
    <div>
      {reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(el => (
            <ReviewItem key={el.id}>
              <Author>Author: {el.author} </Author>
              <Content>{el.content}</Content>
            </ReviewItem>
          ))}
        </ReviewsList>
      ) : (
        <p> We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
