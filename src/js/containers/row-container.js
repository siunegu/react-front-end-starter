import React from 'react';

class RowContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RowContainer';
    }
    render() {
        return (
        	<div className="row-container">
        		{this.props.children}
        	</div>
      	)
    }
}

export default RowContainer;
