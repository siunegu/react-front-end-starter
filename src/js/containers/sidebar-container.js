import React from 'react';

class SideBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SideBarContainer';
        this.state = {
        	visible: true
        }
        this.toggleOnOff = this.toggleOnOff.bind(this)
    }
    componentDidUpdate() {
    	/* Alternate way of hiding sidebar */
    	// this.state.visible
    	// 	? this._sidebar.style.flexGrow = '1'
    	// 	: this._sidebar.style.flexGrow = '0'
    }
    toggleOnOff() {
    	this.setState({visible: !this.state.visible})
    }   
    render() {
    	let className = 
    		this.state.visible
	    		? 'sidebar-container'
	    		: 'sidebar-container collapse'    	
        return (
	        	<div className={className} ref={(c) => this._sidebar = c}>
	        		{this.props.children}
	        	</div>
      	);
    }
}

export default SideBarContainer;
