import React , { Component } from 'react';
import { WorkSection , WorkTitle , Span , WorkPart , Icon , PartTitle , Line , PartDisc } from './style.js';
import axios from 'axios';
class Work extends Component {

	state = {
		works: []
	}

	// componentDidMount () {
	// 	axios.get('').then(res => {this.setState({works:res.works})})
	// 	// const data = await apiFile.json();
		
	// 	console.log('From Work' ,this.state.works)
	// }
	// this.setState({ works:res.data.works })
	componentDidMount() {
		axios.get('js/data.json').then(res => {console.log( 'From Work New' , res.data.works)})
	}

	render(){

		const works = this.state.works;

		console.log('From Work' ,this.state)

		const worksList = works.map((workItem) => {
			return(
                <WorkPart first={workItem.id} key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line />
                    <PartDisc>
                        {workItem.body}
                    </PartDisc>
                </WorkPart>
			)
		})

		return (
        <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
				{worksList}                
            </div>
        </WorkSection>
		);
	}
}

export default Work;
