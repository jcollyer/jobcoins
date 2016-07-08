import React, { Component } from 'react'
import LoginForm from './login-form'
import { withRouter } from 'react-router'

const Login = React.createClass({
  handleSubmit(stateData) {
    this.props.router.push('addresses/'+stateData.address)
  },
  render() {
    return (
      <div id="login">
        <LoginForm onSubmit={this.handleSubmit.bind(this)} />
      </div>
    )
  }
})

export default withRouter(Login)
