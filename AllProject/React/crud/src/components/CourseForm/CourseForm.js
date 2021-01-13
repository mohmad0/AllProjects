import React from 'react';

const CourseForm = (props) => {

	return(
		<form onSubmit={props.addCourse} >
			<input type="text" value={props.current} required onChange={props.updateCourse} />
			<button type="submit" >Add</button>
		</form>
	)
}

export default CourseForm