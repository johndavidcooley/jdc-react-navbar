import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {

  handleClick = e => {
    if (this.props.loggedIn) {
      this.props.logOutUser();
    }
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="nav-bar">
        <nav className="main-nav">
          <div className="left">
            <NavLink to="/home" activeClassName="active">Home</NavLink>
            <NavLink to="/products" activeClassName="active">Products</NavLink>
            <NavLink to="/work" activeClassName="active">Our Work</NavLink>
            <NavLink to="/about" activeClassName="active">About Us</NavLink>
            <NavLink to="/join" activeClassName="active">Join Our Team</NavLink>
          </div>
          <div className="right">
            <button onClick={this.handleClick}>{ this.props.loggedIn ? 'Log Out' : 'Log In'}</button>
          </div>
        </nav>
      </div>
    )
  }
}
