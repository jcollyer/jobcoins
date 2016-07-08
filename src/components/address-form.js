import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class AddressForm extends Component {
  render() {
    const { fields: { address, amount }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" {...address} />
				<input type="number" {...amount} />
        <button type="submit">Send Jobcoins</button>
      </form>
    )
  }
}

AddressForm = reduxForm({
  form: 'login',
  fields: ['address', 'amount']
})(AddressForm)

export default AddressForm
