import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class LoginForm extends Component {
  render() {
    const { fields: { address }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" {...address} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

LoginForm = reduxForm({
  form: 'login',
  fields: ['address']
})(LoginForm)

export default LoginForm
