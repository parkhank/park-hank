import React from 'react';
import './partials/_resets.scss';
import './App.scss';

import Hero from './components/Hero';
import About from './components/About';

const App = () => {
  return (
    <div className="App">
      <div className="App__filter">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
