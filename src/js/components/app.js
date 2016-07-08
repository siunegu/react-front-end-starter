import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import JumboVisionContainer from '../containers/jumbovision-container';
import BreadCrumbContainer from '../containers/breadcrumb-container';
import BreadCrumb from './breadcrumb';

class App extends React.Component {
	constructor(args) {
		super();
	}

	render() {
		return(
			<div className="container">
				<Nav/>
				<BreadCrumbContainer><BreadCrumb/></BreadCrumbContainer>
				<JumboVisionContainer></JumboVisionContainer>
			</div>
		)
	}
}

export default App