import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
	constructor(args) {
		super();
		this.state = {
			on: false
		}
		this.toggleOnOff = this.toggleOnOff.bind(this)
	}
	componentDidUpdate() {
		this.state.on
			? this._input.focus()
			: this._input.blur();
	}
	toggleOnOff() {		
		this.setState({on: !this.state.on});
	}
	render() {
		return(
			<span className="nav-item">
				<input className='search-box' ref={(c) => this._input = c} type="text" />
				<span className="search-button glyphicon glyphicon-search" aria-hidden="true"
					onClick={this.toggleOnOff}></span>
			</span>
		)		
	}
}


export default Search