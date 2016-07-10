import React, { Component } from 'react'
import { TRANSACTION_BAR_WIDTH, TRANSACTION_GREEN, TRANSACTION_RED } from '../constants'
import Transaction from '../components/transaction'

class Transactions extends Component {
  scrollToPlace() {
    setTimeout(()=>{
      if(document.getElementById("end")) document.getElementById("end").scrollIntoView()
    },100)
  }
  render(){
    const { transactions, equalizer } = this.props
    const transactionsLength = transactions.length
    let baseLineStyles = {
      width: transactionsLength * TRANSACTION_BAR_WIDTH
    }

    this.scrollToPlace()
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

         <div id="base-line" style={baseLineStyles}><div id="end"></div></div>
      </div>
    )
  }
}

export default Transactions
