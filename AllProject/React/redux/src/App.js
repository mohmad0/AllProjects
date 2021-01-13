import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increse } from './components/Actions/Actions';
import { decrese } from './components/Actions/Actions';

class App extends Component {

  increse = () => {
    this.setState({
      count: this.props.count + 1
    })
  }

  decrese = () => {
    this.setState({
      count: this.props.count - 1
    })
  }

  render(){

    
    return (
      <div className="App">
        <button onClick={this.props.increse}> + </button>

          <div> {this.props.count} </div>

        <button onClick={this.props.decrese}> - </button>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return{
    count: state.count
  }
}

function mapDispatchToProps(dispatch){
  return{
    increse: () => dispatch(increse()),
    decrese: () => dispatch(decrese())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
