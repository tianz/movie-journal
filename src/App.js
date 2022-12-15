import React, { useState } from 'react';
import MovieList from './components/MovieList';

import './App.css';
import TheMovieDatabaseApiClient from './api/TheMovieDatabaseApiClient';

function App() {
  const tmdbClient = new TheMovieDatabaseApiClient();
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async () => {
    const data = await tmdbClient.getRatedMovies();
    const formattedMovies = data.results.map(movie => {
      return {
        id: movie.id,
        title: movie.original_title,
        releaseDate: movie.release_date
      }
    });
    setMovies(formattedMovies);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
