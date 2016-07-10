import React, { Component } from 'react'

class Transaction extends Component {
  render() {
    const { transaction, transactionStyles, address } = this.props
    return (
      <div style={transactionStyles} className={transaction.toAddress === address ? "transaction positive" : "transaction negative"} >
        <div className="t-amount">
          <p>{transaction.amount}</p>
        </div>
        <div className="t-to">
          <b>To - </b>{transaction.toAddress}
        </div>
        <div className="t-date">
          <p>{transaction.timestamp.replace(/-/g,"/").substr(5,11).split("T")[0]}</p>
          <p><b>{transaction.timestamp.replace(/-/g,"/").substr(5,11).split("T")[1]}</b></p>
        </div>
      </div>
    )
  }
}

export default Transaction
