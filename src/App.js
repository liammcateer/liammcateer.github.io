import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Particles from 'react-particles-js';
import particleConfig from './assets/particleConfig.json';
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Particles className="particle-container" params={particleConfig}/>
        <Navigation />
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </Router>
    
  );
}

export default App;
