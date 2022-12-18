import React from 'react';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/stats'>Stats</NavLink>
          </li>
          <li>
            <NavLink to='/movies'>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
