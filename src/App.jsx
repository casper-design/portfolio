import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/CustomNavbar';
import Contact from './components/Contact';
import Spotify from './components/Spotify';
import ServiceHub from './components/ServiceHub';
import SimpleTransitions from './components/SimpleTransitions';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Spotify" component={Spotify} />
          <Route path="/ServiceHub" component={ServiceHub} />
          <Route path="/SimpleTransitions" component={SimpleTransitions} />
        </div>
      </Router>
    );
  }
}

export default App;
