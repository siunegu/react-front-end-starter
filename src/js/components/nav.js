import React from 'react';
import ReactDOM from 'react-dom';
import Saved from './saved';
import Visited from './visited';
import Search from './search';
import Avatar from './avatar';

class Nav extends React.Component {
  constructor(args) {
    super();
    this.state = { 

    }   
  }
  render() {
    return (
      <div className="nav">
        <div className="content-row">
          <div className="nav-left">
            <div className="nav-title">
              <span>MY TEST</span>
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-items">
              <Saved/>
              <Visited/>
              <span className="nav-item">
                <Avatar/>
              </span>
              <Search/>
            </div>
          </div> 
        </div>
      </div>
    )
  }
}


export default Nav