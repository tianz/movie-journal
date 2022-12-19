import React from 'react';
import { Route } from 'react-router-dom';

import MainHeader from './components/MainHeader/MainHeader';
import Movies from './pages/Movies';
import Stats from './pages/Stats/Stats';
import './App.css';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/overview'>
          <Stats />
        </Route>
      </main>
    </div>
  );
}

export default App;
