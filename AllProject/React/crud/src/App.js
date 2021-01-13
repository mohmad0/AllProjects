import React, { Component } from 'react';
import CourseForm from './components/CourseForm/CourseForm'
import CourseList from './components/CourseList/CourseList'
import './App.css';

class App extends Component {

  state = {
    courses :[],
    current: ''
  }

  //UpdateCourse
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  //AddCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if (current.length)
    {
        courses.push({name:current})
        this.setState({
          courses,
          current: ''
        })
    }else
    {
      return false
    }
  }

  //Delete Course
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1)
    this.setState({
      courses
    })
  }

  // Edit Course
  editCourse = (index,value) => {
    let {courses} = this.state;
    let course = courses[index];
    course["name"] = value;
    this.setState({courses})

  }


  render(){

    const {courses} = this.state;
    const courseList = courses.map( (course , index) => {

          return <CourseList 
                              deteils={course} 
                              key={index} 
                              index={index} 
                              editCourse={this.editCourse} 
                              deleteCourse={this.deleteCourse}
                  />

    })

    return (
      <section className="App">
        <h2>Add New Item</h2>
        <CourseForm
                    current={this.state.current} 
                    updateCourse={this.updateCourse} 
                    addCourse={this.addCourse}
        />
        <ul> {courses.length ? courseList : <p> There Is No Item </p>} </ul>
      </section>
    );
  }
}

export default App;
