import React , { Component } from 'react';
import './index.css';

import Home from './../Home';
import About from './../About';
import Profile from './../Profile';
import Portfolio from './../Portfolio';
import SocialMedia from './../SocialMedia';
import Work from './../Work';
import Footer from './../Footer';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}

export default App;
