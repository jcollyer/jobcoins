import React, { Component } from 'react'

class Transaction extends Component {
  render() {
    const { transaction, transactionStyles, toStyles, dateStyles } = this.props
    return (
			<div className="transaction" style={transactionStyles} >
			  <div className="t-amount">
			    <p>{transaction.amount}</p>
			  </div>
			  <div className="t-to" style={toStyles}><b>To - </b>{transaction.toAddress}</div>
			  <div className="t-date" style={dateStyles}>
			    <p>{transaction.timestamp.replace(/-/g,"/").substr(5,11).split("T")[0]}</p>
			    <p><b>{transaction.timestamp.replace(/-/g,"/").substr(5,11).split("T")[1]}</b></p>
			  </div>
			</div>
    )
  }
}

export default Transaction
