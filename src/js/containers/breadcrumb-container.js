import React from 'react';
import ReactDom from 'react-dom';

class BreadCrumbContainer extends React.Component {
    render() {
        return <div className="breadcrumb-container">{this.props.children}</div>;
    }
}

export default BreadCrumbContainer;
