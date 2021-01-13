import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class Todo extends Component {
  render(){
    return (
		<div className="container">
    		<Header />
    		<Content />
    		<Footer />
		</div>
    );
  }
}

export default Todo;
