import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Event from './Event';
import Showhide from './Showhide';
import Footer from './Footer';
import State from './State';
import Stateful from './StatefulComponent';
import ParentMap from "./ListDataUsingMapParent";
import Form from './Form';
import Lifecycle from './ComponentLifecycle';


// Add It In {} If Was ==> export Without default
import {Test, x as foo , y } from './ImportAndExport';

// If There Export default And You Want To Change The Name Use That Between { } As Following If Not Remove { }
import {default as Good} from './ImportAndExport'
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Rout from './Rout';
import Col from './Col';

class Todo extends Component {


  Arrow = () => {
    console.log("Hello From Arrow Function")
  }

  Arrow2 = () => console.log("Hello From Arrow Function Another Method")

  render(){

  	// This Without Converting Into Babel Converter
  	const elm1 = React.createElement(
  		'h1',
  		{
  			className: "name_from_react_class",
  			id: "name_from_react_id"
  		},
  		'Hello Ahmed Gamal'
  	)

  	// This Without Converting Into Babel Converter
  	const elm2 = React.createElement(
  		'h1',
  		{
  			className: "name_from_react_class",
  			id: "name_from_react_id"
  		},
  		React.createElement(
  			'span',
  			null,
  			'Hello '
  		),
  		React.createElement(
  			'span',
  			null,
  			'Ali Gamal'
  		)
  	)

  	/*
  		React.createElement(
  			'The Element',
  			'The Attrebute',
  			'The Child That Will Be In The Element ==> If Was Text Put It In => '' But If Was anther Element Put Olso => React.createElement () And ect.
  		)
  	*/

  	// This JSX Style Will Be Converting Into Babel Converter To React.createElement()
  	const elm3 = (
  		<h1>
  			<span>Hello </span>
  			<span>Safe</span>
  		</h1>
  	)
  	

    return (
		<div className="container">
    		<Header />
        <State />
    		<Content />
    		<Event />
    		<Showhide />
    		<Footer />
    		{elm1}
    		{elm2}
    		{elm3}
        {Test()}
        {foo}
        <br/>
        {y}
        {Good()}
        {this.Arrow()}
        {this.Arrow2()}

        <Stateful />

        <ParentMap />

        <Form />

        <Lifecycle />

        <BrowserRouter> 

            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/Blog" component={Blog} />
              <Route path="/:test_params" component={Rout} />
            </Switch>
        </BrowserRouter>


        <table>
          <tbody>
            <tr>
              <Col />
            </tr>
          </tbody>
        </table>
		</div>
    );
  }
}

export default Todo;
