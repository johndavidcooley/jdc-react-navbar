import React, { Component } from 'react'

export default class About extends Component {

  componentWillMount() {
    if (!this.props.loggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="about">
        This is the About page. This is here to demonstrate the NavLink styling in the navbar.
      </div>
    )
  }
}
