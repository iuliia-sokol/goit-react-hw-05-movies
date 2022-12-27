import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StartPage } from '../pages/StartPage/StartPage';

// import { Home } from 'pages/Home/Home';
// import { Movies } from 'pages/Movies/Movies';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Review } from './Review/Review';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Review = lazy(() => import('./Review/Review'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};
