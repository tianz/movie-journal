import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Movies from './pages/Movies';
import Stats from './pages/Stats/Stats';

function App() {
  return (
    <div>
      <Route path='/stats'>
        <Stats />
      </Route>
      <Route path='/movies'>
        <Movies />
      </Route>
    </div>
  );
}

export default App;
