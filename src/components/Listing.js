import React from "react";
import {fetchPosts} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import "./custom.css";

class Listing extends React.Component {
	state = {
		    isHovered: {}
		  };
	handleMouseEnter = index => {
	    this.setState(prevState => {
	      return { isHovered: { ...prevState.isHovered, [index]: true } };
	    });
	};

	handleMouseLeave = index => {
		this.setState(prevState => {
		  return { isHovered: { ...prevState.isHovered, [index]: false } };
		});
	};
	componentDidMount(){
		this.props.fetchPosts();
	}
	renderPosts()
	{
		return this.props.posts.map(post => {
			const classes = this.state.isHovered[post.id] ? "post_list ui link cards hovering" : "post_list ui link cards";
			return (
					<div className={`${classes}`} 
			            onMouseEnter={() => this.handleMouseEnter(post.id)}
			            onMouseLeave={() => this.handleMouseLeave(post.id)}>
						<div className="card">
							<div class="edit">
								<Link to={`/edit/${post.id}`}>
									<i class="edit outline icon"></i>
								</Link>
								<Link to={`/delete/${post.id}`}>
									<i class="trash outline icon"></i>
								</Link>
							</div>
							<div className="image">
								<img src={`${post.img}`} alt="empty"/>
							</div>
							<div className="content">
								<div className="header">{post.author}</div>
								<div className="meta">
									<a href="/">{post.title}</a>
								</div>
								<div className="description">
									{post.body}
								</div>
							</div>
						</div>
					</div>
				);
		});
	}
	onMouseOver(){
		console.log("hovering");
	}
	render() {
		console.log("props ", this.props.posts);
		if(!this.props.posts)
		{
			return (
					<div className="ui link cards">
						<div className="card">
							Empty
						</div>
					</div>
				);
		}
		return (
			<div className="ui  grid"> 
				{ this.renderPosts() }
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log("state ", state);
	return {posts : Object.values(state.posts)};
}

export default connect(mapStateToProps,{fetchPosts})(Listing);