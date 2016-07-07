import React from 'react';
import ReactDOM from 'react-dom';
// require('../../../img/avatar.jpg');

class Avatar extends React.Component {
  constructor(args) {
    super();
    this.state = { 

    }   
  }
  render() {
    return (
      <div className="avatar">
        <img src="https://www.placecage.com/300/200" />
      </div> 
    )
  }
}


export default Avatar