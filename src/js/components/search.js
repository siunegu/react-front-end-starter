import React from 'react';
import ReactDOM from 'react-dom';

const Search = () => {
	return(
		<span className="nav-item">
			<input type="text" />
			<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
		</span>
	)
}

export default Search