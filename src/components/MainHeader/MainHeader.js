import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header>
      <h1 className={styles.h1}>Movie Journal</h1>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <NavLink to='/overview'>Overview</NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to='/movies'>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
