import React from 'react';

class RowContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RowContainer';
    }
    render() {
        return (
        	<div className="row-container">
        		<div className="row-title">
        			{this.props.title}
        		</div>
        		<div className="row-content">
	        		{this.props.children}
        		</div>
        	</div>
      	)
    }
}

RowContainer.propTypes = {
	title: React.PropTypes.string
}

RowContainer.defaultProps = {
	title: 'Hand Title'
}

export default RowContainer;
