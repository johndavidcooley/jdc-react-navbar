import React, { Component } from 'react'

export default class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleUsernameChange = e => {
    this.setState({username: e.target.value});
  }

  handlePasswordChange = e => {
    this.setState({password: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const loginInfo = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.logInUser(loginInfo);
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <input name="username" value={this.state.username} type="text" placeholder="Username" onChange={this.handleUsernameChange} />
          <input name="password" value={this.state.password} type="password" placeholder="Password" onChange={this.handlePasswordChange} />
          <button type="submit">Log In</button>
        </form>
      </div>
    )
  }
}
