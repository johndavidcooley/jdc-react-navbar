import React, { Component } from 'react'

export default class Home extends Component {

  componentWillMount() {
    if (!this.props.loggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="home">
        This is the home page. The user should now be logged in and the button text in the nav should show 'Log Out'.
      </div>
    )
  }
}
