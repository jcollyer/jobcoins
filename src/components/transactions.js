import React, { Component } from 'react'
import { TRANSACTION_BAR_WIDTH, TRANSACTION_DATE_POSITION, TRANSACTION_GREEN, TRANSACTION_RED } from '../constants'

const Transactions = React.createClass({
  componentDidUpdate(){
    document.getElementById("scroll-to").style.left = transactions.scrollWidth+"px"
    setTimeout(()=>{document.getElementById("scroll-to").scrollIntoView()},10)
  },
  render(){
    const { transactions, equalizer } = this.props
    let leftStyles = {
      left: transactions.length * TRANSACTION_BAR_WIDTH
    }
    let baseLineStyles = {
      width: transactions.length * TRANSACTION_BAR_WIDTH
    }
    return (
      <div id="transactions">
        {transactions.map((transaction, index) => {
          let positive = transaction.toAddress === this.props.address
          let bgcolor = positive ? TRANSACTION_GREEN : TRANSACTION_RED
          let negitive = positive ? 0 : transaction.amount * equalizer

          let transactionStyles = {
            height: transaction.amount * equalizer,
            left: index * TRANSACTION_BAR_WIDTH,
            background: bgcolor,
            bottom: -negitive
          }
          let dateStyles = {
            top: positive ?  "auto" : TRANSACTION_DATE_POSITION,
            bottom: positive ? TRANSACTION_DATE_POSITION : "auto"
          }
          let toStyles = {
            background: bgcolor
          }

          return(
            <div className="transaction" key={Math.random()} style={transactionStyles} >
              <div className="t-amount">
                <span>{transaction.amount}</span>
              </div>
              <div className="t-to" style={toStyles}><b>To - </b>{transaction.toAddress}</div>
              <div className="t-date" style={dateStyles}>
                <p>{transaction.timestamp.replace(/-/g,"/").substr(5,11).split("T")[0]}</p>
                <p><b>{transaction.timestamp.replace(/-/g,"/").substr(5,11).split("T")[1]}</b></p>
              </div>
            </div>
          )
         })}
         <div id="base-line" style={baseLineStyles}></div>
         <div id="scroll-to" style={leftStyles}></div>
      </div>
    )
  }
})

export default Transactions
