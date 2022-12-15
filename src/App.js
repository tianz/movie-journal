import React, { useState, useEffect, useCallback } from 'react';
import MovieList from './components/MovieList';

import './App.css';
import tmdbService from './services/TmdbService';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = useCallback(async () => {
    const data = await tmdbService.getRatedMovies();
    const formattedMovies = data.map(movie => {
      return {
        id: movie.id,
        title: movie.original_title,
        releaseDate: movie.release_date
      }
    });
    setMovies(formattedMovies);;
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
