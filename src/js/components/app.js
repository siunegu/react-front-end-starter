import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';

class App extends React.Component {
	constructor(args) {
		super();
	}

	render() {
		return(
			<div className="container">
				<Nav/>
			</div>
		)
	}
}

export default App