import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particleConfig from './assets/particleConfig.json';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Particles className="particle-container" params={particleConfig}/>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
