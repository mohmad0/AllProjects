import React, { Component, Fragment } from 'react';


// <Fragment>
// 	<li>
// 		<span>{this.props.deteils.name}</span>
// 		<button onClick={ () => {this.props.deleteCourse(this.props.index)}}>Delete</button>
// 	</li>
// </Fragment>

class CourseList extends Component {

	state = {
		isEdit: false
	}

	//Render Course Item
	renderCourse = () => {
		return(
			<li>
				<span>{this.props.deteils.name}</span>
				<button onClick={ () => {this.toggelCourse()}}>Edit</button>
				<button onClick={ () => {this.props.deleteCourse(this.props.index)}}>Delete</button>
			</li>
		)
	}

	// Toggel Course
	toggelCourse = () => {
		let {isEdit} = this.state;
		this.setState({
			isEdit: !isEdit
		})
	}

	// Update Course Item
	updateCourseItem = (e) => {
		e.preventDefault();
		if (this.input.value)
		{
			this.props.editCourse(this.props.index, this.input.value);
			this.toggelCourse();

		}else
		{
			return false
		}
	}

	// Update Course
	updateCourse = () => {
		return(
			<form onSubmit={this.updateCourseItem}>
				<input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.deteils.name} />
				<button>Update</button>
			</form>
		)
	}


	render(){
		let {isEdit} = this.state;
		return(
			<>
				{ isEdit ? this.updateCourse() : this.renderCourse() }
			</>
			
		)
	}

}

export default CourseList