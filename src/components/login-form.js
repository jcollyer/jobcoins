import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class LoginForm extends Component {
  render() {
    const { fields: { address }, handleSubmit } = this.props
    return (
      <div id="login-form">
        <h3>Welcome! Sign In With Your Jobcoin Address</h3>
        <form onSubmit={handleSubmit}>
          <p>Jobcoin Address</p>
          <input type="text" {...address} />
          <button className="form-button" type="submit">Sign In</button>
        </form>
      </div>
    )
  }
}

LoginForm = reduxForm({
  form: 'login',
  fields: ['address']
})(LoginForm)

export default LoginForm
