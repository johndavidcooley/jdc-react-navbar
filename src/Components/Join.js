import React, { Component } from 'react'

export default class Join extends Component {

  componentWillMount() {
    if (!this.props.loggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="join">
        This is the Join Us page. This is here to demonstrate the NavLink styling in the navbar.
      </div>
    )
  }
}
