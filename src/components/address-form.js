import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class AddressForm extends Component {
  render() {
    const { fields: { address, amount }, handleSubmit } = this.props
    return (
      <div id="send-jobcoin">
        <h3>Send Jobcoin</h3>
        <form onSubmit={handleSubmit}>
          <label>Destination Address</label>
          <input type="text" {...address} />
          <label>Amount to Send</label>
          <input type="number" {...amount} />
          <button type="submit">Send Jobcoins</button>
        </form>
      </div>
    )
  }
}

AddressForm = reduxForm({
  form: 'login',
  fields: ['address', 'amount']
})(AddressForm)

export default AddressForm
