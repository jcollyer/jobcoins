import React, { Component } from 'react'

const Transactions = React.createClass({
  componentDidUpdate(){
    document.getElementById("scroll-to").style.left = transactions.scrollWidth+"px"
    setTimeout(()=>{document.getElementById("scroll-to").scrollIntoView()},10)
  },
  render(){
    const { transactions, equalizer } = this.props
    let leftStyles = {
      left: transactions.length * 100
    }
    let baseLineStyles = {
      width: transactions.length * 100
    }
    return (
      <div id="transactions">
        <h3>Transactions</h3>
        {transactions.map((transaction, index) => {
          let positive = transaction.toAddress === this.props.address
          let bgcolor = positive ? "#00A885" : "#EB6B56"
          let negitive = positive ? 0 : transaction.amount * equalizer

          let transactionStyles = {
            height: transaction.amount * equalizer,
            left: index * 100,
            background: bgcolor,
            bottom: -negitive
          }
          let dateStyles = {
            top: positive ?  "auto" : -32,
            bottom: positive ? -32 : "auto"
          }
          let toStyles = {
            background: bgcolor
          }

          return(
            <div className="transaction" key={Math.random()} style={transactionStyles} >
              <div className="t-amount">
                <span>{transaction.amount}</span>
              </div>
              <div className="t-to" style={toStyles}>{transaction.toAddress}</div>
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
