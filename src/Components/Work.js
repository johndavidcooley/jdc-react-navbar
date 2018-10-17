import React, { Component } from 'react'

export default class Work extends Component {

  componentWillMount() {
    if (!this.props.loggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="work">
        This is the Our Work page. This is here to demonstrate the NavLink styling in the navbar.
      </div>
    )
  }
}
