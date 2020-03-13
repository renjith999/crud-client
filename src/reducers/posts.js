import _ from 'lodash';
export default (state={},action) => { 
	switch(action.type)
	{
		case 'fetchPosts' : return {...state,..._.mapKeys(action.payload,'id')};
		case 'fetchPost' : return {...state,[action.payload.id] : action.payload };
		default :
			return state;
	}
};