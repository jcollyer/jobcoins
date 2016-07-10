import React, { Component } from 'react'
import { TRANSACTION_BAR_WIDTH, TRANSACTION_GREEN, TRANSACTION_RED } from '../constants'
import Transaction from '../components/transaction'

const Transactions = React.createClass({
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.transactions.length !== this.props.transactions.length
  },
  componentDidUpdate() {
    document.getElementById("scroll-to").style.left = transactions.scrollWidth+"px"
    setTimeout(()=>{document.getElementById("scroll-to").scrollIntoView()},10)
  },
  render(){
    const { transactions, equalizer } = this.props
    let baseLineStyles = {
      width: transactions.length * TRANSACTION_BAR_WIDTH
    }
    let scrollToStyles = {
      left: transactions.length * TRANSACTION_BAR_WIDTH
    }
    return (
      <div id="transactions">
        {transactions.map((transaction, index) => {
          
          let positive = transaction.toAddress === this.props.address
          let transactionStyles = {
            height: transaction.amount * equalizer,
            left: index * TRANSACTION_BAR_WIDTH,
            background: positive ? TRANSACTION_GREEN : TRANSACTION_RED,
            bottom: - (positive ? 0 : transaction.amount * equalizer)
          }

          return(
            <Transaction
              key={Math.random()}
              transactionStyles={transactionStyles}
              transaction={transaction}
              address={this.props.address} />
          )
         })}

         <div id="base-line" style={baseLineStyles}></div>
         <div id="scroll-to" style={scrollToStyles} ></div>
      </div>
    )
  }
})

export default Transactions
