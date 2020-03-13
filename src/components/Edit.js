import React from "react";
import {fetchPost , editPost } from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field ,reduxForm} from 'redux-form';
import Form from './Form';

class Edit extends React.Component {
	constructor(props)
	{
		super(props);
	}
	componentDidMount(){
		this.props.fetchPost(this.props.match.params.id);
	}
	onSubmit = (values) => {
		console.log("submitings");
		console.log(values);
		this.props.editPost(this.props.match.params.id,values);
	}
	render() {
		console.log("props ", this.props.post);
		if(!this.props.post)
		{
			return (
					<div>empty</div>
				);
		}
		const post=this.props.post;
		return (
			<Form onSubmit={this.onSubmit} initialValues={{author: post.author,title: post.title,body: post.body,img: post.img}}/>
		);
	}
}
const mapStateToProps = (state,ownProps) => {
	// console.log("state ", state);
	return { post : state.posts[ownProps.match.params.id]}
}
const EditForm = reduxForm({
  // a unique name for the form
  form: 'editform'
})(Edit);

export default connect(mapStateToProps,{fetchPost,editPost})(EditForm);