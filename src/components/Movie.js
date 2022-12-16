import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <div className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
    </div>
  );
};

export default Movie;
