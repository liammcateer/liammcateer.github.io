import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Particles from 'react-particles-js';
import particleConfig from './assets/particleConfig.json';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Particles className="particle-container" params={particleConfig}/>
        <Navigation />
      </div>
    </Router>
    
  );
}

export default App;
