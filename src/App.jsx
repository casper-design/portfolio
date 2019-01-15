import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/CustomNavbar';
import SimpleTransitions from './components/SimpleTransitions';
import ServiceHub from './components/ServiceHub';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/SimpleTransitions" component={SimpleTransitions} />
          <Route path="/ServiceHub" component={ServiceHub} />
        </div>
      </Router>
    );
  }
}

export default App;
