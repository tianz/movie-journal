import React from 'react';

import styles from './Movie.module.css';

const imageHost = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

const Movie = (props) => {
  return (
    <div className={styles['movie-container']}>
      <img src={`${imageHost}${props.posterPath}`} />
    </div>
  );
};

export default Movie;
