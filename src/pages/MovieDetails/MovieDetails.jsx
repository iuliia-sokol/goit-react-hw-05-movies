import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovie } from '../../fetchAPI';
import {
  WrapperMovie,
  MovieList,
  MovieLink,
  MovieInfo,
  MovieInfoTitle,
} from './MovieDetails.styled';

// import { BackLink } from 'components/BackLink/BackLink';

export const MovieDetails = () => {
  const { id } = useParams();

  const [movieId, setMovieId] = useState(null);
  const location = useLocation();
  //   const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovie.getMovieById(id).then(setMovieId);
  }, [id]);

  if (!movieId) {
    return null;
  }

  const {
    poster_path,
    original_title,
    original_name,
    release_date,
    first_air_date,
    vote_average,
    genres,
    overview,
  } = movieId;

  return (
    <div>
      {/* <BackLink to={backLinkHref}>Go back</BackLink> */}
      <WrapperMovie>
        <img
          src={`${fetchMovie.BASE_URL}${poster_path}`}
          alt={original_title}
          width="300"
        />
        <div>
          <h1>
            {original_title || original_name} (
            <span>{parseInt(release_date || first_air_date)}</span>)
          </h1>
          <p>User Score: {`${Math.round(vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.map((genre, index) => (
              <span key={index} style={{ marginRight: '10px' }}>
                {genre.name} /
              </span>
            ))}
          </p>
        </div>
      </WrapperMovie>
      <MovieInfo>
        <MovieInfoTitle>Additional Information</MovieInfoTitle>
        <MovieList>
          <li>
            <MovieLink to="cast" state={location.state}>
              Cast
            </MovieLink>{' '}
          </li>
          <li>
            <MovieLink to="review" state={location.state}>
              Reviews
            </MovieLink>{' '}
          </li>
        </MovieList>
      </MovieInfo>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
