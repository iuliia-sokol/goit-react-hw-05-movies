import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchMovie } from '../../fetchAPI';
import { MovieListStyled, MovieListItem, MovieName } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  console.log(movies);
  const location = useLocation();
  return (
    <MovieListStyled>
      {movies.map(movie => {
        console.log(movie);
        return (
          <MovieListItem key={movie.id}>
            <MovieName>
              {movie.title} <span>{movie.vote_average.toFixed(2)}</span>
            </MovieName>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={`${fetchMovie.BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                width="200"
              />
            </Link>
          </MovieListItem>
        );
      })}
    </MovieListStyled>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
