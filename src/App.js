import React from 'react';
import './partials/_resets.scss';
import './App.scss';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="App">
      <div className="App__filter">
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
