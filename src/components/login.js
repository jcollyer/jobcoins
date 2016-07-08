import React, { Component } from 'react'
import LoginForm from './login-form'

export default class Login extends Component {
  handleSubmit(stateData) {
    this.props.history.push('addresses/'+stateData.address)
  }
  render() {
    return (
      <div id="login">
        <LoginForm onSubmit={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}
