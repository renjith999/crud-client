import React from "react";
import {fetchPost , editPost } from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field ,reduxForm} from 'redux-form';

class Form extends React.Component {

	
	render() {
		return (
			<div className="row"> 
				<form className="ui form" onSubmit={this.props.handleSubmit}>
				  <div className="field">
				    <label>Author Name</label>
				    <Field component="input" type="text" name="author" placeholder="Author Name" />
				  </div>
				  <div className="field">
				    <label>Title</label>
				    <Field component="input" type="text" name="title" placeholder="Title" />
				  </div>
				  <div className="field">
				    <label>Description</label>
				    <Field component="input" type="text" name="body" placeholder="Description" />
				  </div>
				  <div className="field">
				    <label>Image Url</label>
				    <Field component="input" type="text" name="img" placeholder="Image Url" />
				  </div>
				  <button className="ui button" type="submit">Submit</button>
				</form>
			</div>
		);
	}
}
const FormData = reduxForm({
  // a unique name for the form
  form: 'postform'
})(Form);

export default FormData;