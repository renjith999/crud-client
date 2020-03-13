import axios from 'axios';


export const fetchPosts = () => async (dispatch,getState) => {
	const result = await axios.get("http://localhost:3000/posts");
	console.log(result.data);
	dispatch({type:"fetchPosts",payload:result.data});
}

export const fetchPost = id => async (dispatch,getState) => {
	const result = await axios.get(`http://localhost:3000/posts/${id}`);
	console.log(result.data);
	dispatch({type:"fetchPost",payload:result.data});
}

export const editPost = (id,formValues) => async (dispatch,getState) => {
	console.log(formValues);
	const result = await axios.patch(`http://localhost:3000/posts/${id}`,formValues);
	console.log(result.data);
	dispatch({type:"editPost",payload:result.data});
}