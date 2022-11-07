import { Navigate, Route, Routes } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Home } from '../../pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from '../../pages/MovieDetails/MovieDetails';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
