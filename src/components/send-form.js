import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class AddressForm extends Component {
  render() {
    const { fields: { address, amount }, handleSubmit } = this.props
    return (
      <div id="send-jobcoin">
        <h3>Send Jobcoin</h3>
        <form onSubmit={handleSubmit}>
          <p>Destination Address</p>
          <input type="text" {...address} />
          <p>Amount to Send</p>
          <span>$ <input type="number" {...amount} /></span>
          <button className="form-button" type="submit">Send Jobcoins</button>
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
