import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Listing from './Listing';
import Edit from './Edit';

class App extends React.Component {
	render(){
		return (
				<BrowserRouter>
					<div>
						<Route path="/" exact component={Listing} />
						<Route path="/edit/:id" exact component={Edit} />
					</div>
				</BrowserRouter>
			);
	}
}

export default App;