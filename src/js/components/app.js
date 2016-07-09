import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import JumboVisionContainer from '../containers/jumbovision-container';
import BreadCrumbContainer from '../containers/breadcrumb-container';
import BreadCrumb from './breadcrumb';
import DashBoardContainer from '../containers/dashboard-container';
import SideBarContainer from '../containers/sidebar-container';
import FilterList from './filter-list';

class App extends React.Component {
	constructor(args) {
		super();
		this.toggleLeftMenu = this.toggleLeftMenu.bind(this)
	}
	toggleLeftMenu(e) {
		this._sidebar.toggleOnOff()
	}
	render() {
		/*
		 * Notes: 
		 * - Probably pull out FilterList logic into a 'Widget' mixin
		 */
		return(
			<div className="container">
				<Nav/>

				<BreadCrumbContainer><BreadCrumb/></BreadCrumbContainer>
				<JumboVisionContainer>
					<button 
						className="show-menu-button"
						onClick={this.toggleLeftMenu}>
							<span className="glyphicon glyphicon-option-horizontal"></span>
							HIDE
						</button>
				</JumboVisionContainer>

				<div className="main-content">
					<SideBarContainer ref={(c) => this._sidebar = c}>
						<FilterList 
							title="Driver" 
							placeholder="Search by driver name"/>
						<FilterList 
							title="Industry" 
							placeholder="Search by driver name"/>							
					</SideBarContainer>
					<DashBoardContainer>					
					</DashBoardContainer>
				</div>
			</div>
		)
	}
}

export default App