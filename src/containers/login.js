import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import request from 'superagent'
import { setAddress } from '../actions/address'
import LoginForm from '../components/login-form'

const Login = React.createClass({
  handleSubmit(stateData) {
    this.props.setAddress(stateData.address)
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

const mapStateToProps = (appState) => {
  return {
    address: appState.address
  }
}

export default withRouter(connect(mapStateToProps, {setAddress})(Login))
