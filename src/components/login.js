import React, { Component } from 'react'
import LoginForm from './login-form'

export default class Login extends Component {
  handleSubmit(stateData) {
    debugger;
  }
  render() {
    return (
      <div id="login">
        <LoginForm onSubmit={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}
