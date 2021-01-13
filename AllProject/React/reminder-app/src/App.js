import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Add_reminder , Remove_reminder , Clear_reminder } from './components/Actions/Actions';
import moment from 'moment';
import logo from './reminder.png';


/*
    1- Action Types
    2- Action Creator
    3- Reducer
    >> dispatch
    4- JSX
*/


class App extends Component {

  state = {
    text:'',
    date: ''
  }

  render_Reminders = () => {
    const {Reminders} = this.props;
    return(
      <ul className="list-group">
        {
          Reminders.map(Reminder => {
            return(
              <li key={Reminder.id} className="list-group-item">
                <div>{Reminder.text}</div>
                <div>{moment(new Date(Reminder.date)).fromNow()}</div>
                <div className="closeIcon btn btn-danger" onClick={ () => this.props.Remove_reminder(Reminder.id)}>X</div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render(){
    return (
      <div className="App">
        <img src={logo} alt=""/>
        <div className="reminder-title">
          <h2>What Should You Do ?</h2>
        </div>
        <input 
              className="form-control" 
              type="text" 
              placeholder="What You Think..."
              onChange={(e) => this.setState({text: e.target.value})}
              value={this.state.text}
        />
        <input 
              className="form-control" 
              type="datetime-local"
              onChange={(e) => this.setState({date: e.target.value})}
              value={this.state.date}
              placeholder="Enter Your Date..."
        />
        <button 
              className="btn-primary btn-block"
              onClick={() => {
                this.props.Add_reminder(this.state.text,this.state.date)
                this.setState({text:'' , date:''})
              }}
        >
            Add Reminder
        </button>
        {this.render_Reminders()}
        <button 
              className="clear_reminder btn-danger btn-block" onClick={ () => this.props.Clear_reminder()}
        >
            Clear Reminder
        </button>
      </div>
    );
  }
}

// {Add_reminder} == 
// function mapDispatchToProps(dispatch){
//   return{
//     Add_reminder : () => dispatch(Add_reminder())
//   }
// }

function mapStateToProps(state){
  return{
    Reminders:state
  }
}

// state => {
//   return{
//     Reminders:state
//   }
// }

export default connect(mapStateToProps, {Add_reminder , Remove_reminder , Clear_reminder})(App);
