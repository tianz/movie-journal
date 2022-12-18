import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import MainHeader from './components/MainHeader';
import Movies from './pages/Movies';
import Stats from './pages/Stats/Stats';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path='/stats'>
          <Stats />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
      </main>
    </div>
  );
}

export default App;
