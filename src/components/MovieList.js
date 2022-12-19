import React from 'react';

import Movie from './Movie/Movie';
import classes from './MovieList.module.css';

const MovieList = (props) => {
  return (
    <div className={classes['movies-wrapper']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          posterPath={movie.posterPath} />
      ))}
    </div>
  );
};

export default MovieList;
