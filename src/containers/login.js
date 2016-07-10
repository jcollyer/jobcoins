import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import request from 'superagent'
import { setAddress } from '../actions/address'
import LoginForm from '../components/login-form'

const Login = React.createClass({
  handleSubmit() {
    let newAddress = this.props.form.login.address.value;
    this.props.setAddress(newAddress)
    document.cookie = "address="+newAddress
    this.props.router.push('addresses/'+newAddress)
  },
  render() {
    const { address, form } = this.props
    return (
      <div id="login">
        <div className="logo">Job</div>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
})

const mapStateToProps = (appState) => {
  return {
    address: appState.address,
    form: appState.form
  }
}

export default withRouter(connect(mapStateToProps, {setAddress})(Login))
