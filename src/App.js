import React from 'react';

import MovieList from './components/MovieList'
import './App.css';

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      releaseDate: '2021-05-19',
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
