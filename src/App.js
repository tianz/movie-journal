import React, { useState, useEffect, useCallback } from 'react';
import MovieList from './components/MovieList';

import './App.css';
import TheMovieDatabaseApiClient from './api/TheMovieDatabaseApiClient';

function App() {
  const tmdbClient = new TheMovieDatabaseApiClient();
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = useCallback(async () => {
    const data = await tmdbClient.getRatedMovies();
    const formattedMovies = data.results.map(movie => {
      return {
        id: movie.id,
        title: movie.original_title,
        releaseDate: movie.release_date
      }
    });
    setMovies(formattedMovies);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <MovieList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
