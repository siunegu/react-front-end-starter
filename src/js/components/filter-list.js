import React from 'react';

class FilterList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div className="filterlist-container">
	        	<div className="filterlist-header">
	        		<div className="filterlist-title">{this.props.title}</div>	
	        	</div>
	        	<div className="filterlist-content">
		        	<input
		        		type="select"
			        	className="search-dropdown"
		        		placeholder={this.props.placeholder}
		        		/>
        		</div>
      		</div>
      	);
    }
}

FilterList.propTypes = {
	title: React.PropTypes.string,
	placeholder: React.PropTypes.string
}

FilterList.defaultProps = {
  title: 'Industry',
  placeholder: 'Search industry name'
}

export default FilterList;
