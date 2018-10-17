import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Products from './Components/Products';
import Work from './Components/Work';
import About from './Components/About';
import Join from './Components/Join';

import users from './Utils/users';

export default class App extends Component {

  state = {
    loggedIn: false
  }


  logInUser = loginInfo => {
    let user = users.filter(user => user.username === loginInfo.username && user.password === loginInfo.password);
    if (user.length) {
      this.setState({loggedIn: true})
      this.props.history.push('/home');
    } else {
      alert('Login failed. Please try again.');
    }
  }

  logOutUser = () => {
    this.setState({loggedIn: false});
  }

  render() {
    return (
      <div className="app">
        <Navbar {...this.props} loggedIn={this.state.loggedIn} logOutUser={this.logOutUser}></Navbar>
        <Route exact path="/" render={(props) => <Login {...props} logInUser={this.logInUser} />}></Route>
        <Route exact path="/home" render={(props) => <Home {...props} loggedIn={this.state.loggedIn} />}></Route>
        <Route exact path="/products" render={(props) => <Products {...props} loggedIn={this.state.loggedIn} />}></Route>
        <Route exact path="/work" render={(props) => <Work {...props} loggedIn={this.state.loggedIn} />}></Route>
        <Route exact path="/about" render={(props) => <About {...props} loggedIn={this.state.loggedIn} />}></Route>
        <Route exact path="/join" render={(props) => <Join {...props} loggedIn={this.state.loggedIn} />}></Route>
      </div>
    )
  }
}