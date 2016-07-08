import React from 'react';
import ReactDOM from 'react-dom';
// require('../../../img/avatar.jpg');

class Avatar extends React.Component {
  constructor(args) {
    super();
    this.state = { 
      user: 'My Test'
    }   
  }
  render() {
    return (
      <div className="avatar-wrapper">
        <div className="avatar">
          <img src="https://www.placecage.com/300/300" />
        </div>
        <div className="nav-item-title">{this.state.user}</div>
      </div> 
    )
  }
}


export default Avatar