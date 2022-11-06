// import { useEffect, useState } from 'react';
// import { AppWrap } from './App.Styled';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Home } from '../Home/Home';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { Movies } from 'components/Movies/Movies';

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

// Маршруты
// В приложении должны быть следующие маршруты. Если пользователь зашел по несуществующему маршруту, его необходимо перенаправлять на домашнюю страницу.

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
