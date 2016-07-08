import React from 'react';
import ReactDOM from 'react-dom';

class JumboVisionContainer extends React.Component {
    render() {
        return (
        	<div className="jumbovision">
        		<div className="display-4">How attractive are you?</div>
        		{this.props.children}
        	</div>
      	);
    }
}

export default JumboVisionContainer;
