import React from 'react';

class DashBoardContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div className="dashboard-container">
	        		{this.props.children}
        	</div>
      	);
    }
}

export default DashBoardContainer;
