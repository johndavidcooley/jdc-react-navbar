import React, { Component } from 'react'

export default class Products extends Component {

  componentWillMount() {
    if (!this.props.loggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="products">
        This is the Products page. This is here to demonstrate the NavLink styling in the navbar.
      </div>
    )
  }
}
