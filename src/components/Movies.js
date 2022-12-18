import React, { useState, useEffect, useCallback } from 'react';
import MovieList from "./MovieList"

import tmdbService from '../services/TmdbService';

const Movies = (props) => {
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
      <MovieList movies={movies} />
    </React.Fragment>
  )
}

export default Movies;