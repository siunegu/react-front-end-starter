import React from 'react';
import ReactDom from 'react-dom';

class BreadCrumb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    		parent: 'Home',
    		child: 'My test',
			grandChild: 'Attractiveness'
        }
    }
    render() {
        return (
        	<div className="breadcrumb">
        		<a href="">{this.state.parent}</a>
                <span className="glyphicon glyphicon-chevron-right"></span> 
                <a href="">{this.state.child}</a> 
                <span className="glyphicon glyphicon-chevron-right"></span> 
        		<a href="">{this.state.grandChild}</a>
        	</div>
      	);
    }
}

export default BreadCrumb;
