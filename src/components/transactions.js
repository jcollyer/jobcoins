import React, { Component } from 'react'

class Transactions extends Component {
  render(){
    const { transactions, equalizer } = this.props
    return (
      <div id="transactions">
        <h3>Transactions</h3>
        {transactions.map((transaction, index) => {
          console.log(equalizer)
          var amountStyles = {
            height: transaction.amount * equalizer,
            left: index * 100
          }


          return(
            <div className="transaction" key={Math.random()} style={amountStyles}>
              <p>To: {transaction.toAddress}</p>
              <p>Time: {transaction.timestamp}</p>
              <p>Amt: {transaction.amount}</p>
            </div>
          )
         })}
      </div>
    )
  }
}

export default Transactions
