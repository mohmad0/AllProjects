import React , {Component} from 'react';
import { Formik , Field , ErrorMessage , FieldArray } from 'formik';
import * as Yup from 'yup';

// sudo npm i formik
// sudo npm i yup

class FirstFormik extends Component {

	onSubmit = (value) => {
		console.log(value)
	}

	form = (props) => {
		return (
			<form onSubmit={props.handleSubmit}>
				<lebal>Name</lebal><br />
				<Field name="name" /><br />

				<ErrorMessage name="name" /><br />

				<lebal>Email</lebal><br />
				<Field name="email" /><br />

				<ErrorMessage name="email" /><br />

				<lebal>Type</lebal><br />
				<Field name="type" component="select">
					<option value="1">One</option>
					<option value="2">Two</option>
				</Field>
				<br />

				<ErrorMessage name="type" /><br />

				<lebal>Active</lebal><br />
				<Field name="active" type="checkbox" />
				<br />
				
				<lebal>Category</lebal><br />
				<Field name="category" type="radio" /><br />

				<ErrorMessage name="category" /><br />

				<lebal>Facebook</lebal><br />
				<Field name="social.facebook" /><br />

				<ErrorMessage name="social.facebook" /><br />

				<lebal>Twitter</lebal><br />
				<Field name="social.twitter" /><br />

				<ErrorMessage name="social.twitter" /><br />

				<FieldArray
					name="freinds"
					render={ arrayHelper => (
						<div>
							<h3>Freinds</h3>
							{props.values.freinds.map((item , index)=>(
								<div key={index}>
									<Field name={`freinds.${index}`} />
									<button type="button" onClick={()=>arrayHelper.remove(index)}> - </button>
									<ErrorMessage name={`freinds.${index}`} /><br />
								</div>
							))}
							<button type="button" onClick={()=>arrayHelper.push('')}> + </button>
						</div>
					)}
				/>

				<FieldArray
					name="phonenumber"
					render={ arrayHelper => (
						<div>
							<h3>Phone Number</h3>
							{props.values.phonenumber.map((item , index)=>(
								<div key={index}>
									<Field name={`phonenumber.${index}.number`} placeholder="number" />
									<ErrorMessage name={`phonenumber.${index}.number`} /><br />

									<Field name={`phonenumber.${index}.extension`} placeholder="extension" />
									<ErrorMessage name={`phonenumber.${index}.extension`} /><br />

									<button type="button" onClick={()=>arrayHelper.remove(index)}> - </button>
								</div>
							))}
							<button type="button" onClick={()=>arrayHelper.push({number:'',extension:''})}> + </button>
						</div>
					)}
				/>

				<button type="submit" >Send</button>
			</form>
		)
	}

	schema = () => {
		const schema = Yup.object().shape({
			name:Yup.string().required(),
			email:Yup.string().required(),
			type:Yup.string().required(),
			category:Yup.string().required(),
			social : Yup.object().shape({
				facebook:Yup.string().required('Facebook is a Required Field'),
				twitter:Yup.string().required('Twitter is a Required Field')
			}),
			freinds: Yup.array().of(
				Yup.string().required('Required'),
			),
			phonenumber:Yup.array().of(
				Yup.object().shape({
					number:Yup.number().typrError("Accept Numbers Only").required('Number is a Required Field'),
					extension:Yup.number().typrError("Accept Numbers Only").required('Extension is a Required Field')
				})
			),
		});
		return schema;
	}

	render(){
		return(
			<div>
				<Formik
					initialValue=
						{{
							name: "" , 
							email: "", 
							type:"" , 
							active:false , 
							category:"",
							social: {
								facebook:"",
								twitter:""
							},
							freinds: ["Mohmad"],
							phonenumber:[
								{
									number:"34562",
									extension:"43"
								},
								{
									number:"54212",
									extension:"98"
								}
							]
						}}
					onSubmit={this.onSubmit}
					render={this.form}
					validationSchema={this.schema()}
					
				/>
			</div>
		)
	}
}

export default FirstFormik;