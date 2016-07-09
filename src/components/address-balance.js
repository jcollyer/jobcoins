import React, { Component } from 'react'

class AddressBalance extends Component {
  render() {
    const { balance } = this.props
    return (
      <div id="address-balance">
        <h3>Jobcoin Balance</h3>
        <h2>$ {balance}</h2>
      </div>
    )
  }
}

export default AddressBalance
