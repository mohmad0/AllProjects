import React , { Component } from 'react';
import './App.css';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Index from './Components/Index/index';
import Navbar from './Components/Navbar/index';
import Contact from './Components/Contact/index';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/Contact" component={Contact} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
