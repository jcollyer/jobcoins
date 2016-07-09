import React, { Component } from 'react'

class Transactions extends Component {
  render(){
    const { transactions, equalizer } = this.props

    return (
      <div id="transactions">
        <h3>Transactions</h3>
        {transactions.map((transaction, index) => {
          let bgcolor = transaction.toAddress === this.props.address ? "#00A885" : "#EB6B56"
          console.log(bgcolor)
          let amountStyles = {
            height: transaction.amount * equalizer,
            left: index * 100,
            background: bgcolor
          }

          return(
            <div className="transaction" key={Math.random()} style={amountStyles} >
              <div className="t-amount">
                <span>{transaction.amount}</span>
              </div>
              <div className="t-to">{transaction.toAddress}</div>
              <div className="t-date">
                <p>{transaction.timestamp.replace(/-/g,"/").substr(0,16).split("T")[0]}</p>
                <p><b>{transaction.timestamp.replace(/-/g,"/").substr(0,16).split("T")[1]}</b></p>
              </div>
            </div>
          )
         })}
         <div id="base-line"></div>
      </div>
    )
  }
}

export default Transactions
