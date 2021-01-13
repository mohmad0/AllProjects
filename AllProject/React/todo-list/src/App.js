import React, { Component } from 'react';
import './App.css'
import TodoItem from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';


  // deleteItem = (id) => {
  //   let items = this.state.items;
  //   let i = items.findIndex(item => item.id === id);
  //   items.splice(i,1)
  //   this.setState({items})

  // }

  // deleteItem = (id) => {
  //   let items = this.state.items.filter(item =>{
  //     return item.id !== id
  //   })
  //   this.setState({items})

  // }

class App extends Component {

  state = {
    items: [

    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item =>{
      return item.id !== id
    })
    this.setState({items})

  }

  AddItem = (item) => {
    item.id = Math.random()
    let items = this.state.items;
    items.push(item)
    this.setState({items})
  }

  render(){
    return (
      <div className="App container">
        <h1 className="text_center">Todo List</h1>
        <TodoItem items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.AddItem} />
      </div>
    ); 
  }
}

export default App;
