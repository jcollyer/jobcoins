import React, { Component } from 'react'
import request from 'superagent'
import AddressForm from './address-form'

let Address = React.createClass({
  getInitialState() {
    return {data: {balence: 0}, transactions: []}
  },
  componentWillMount() {
    let that = this;
    request
      .get('http://jobcoin.projecticeland.net/fish-sticks/api/addresses/'+this.props.routeParams.addressId)
      .end(function(err, res){
        that.setState({data: res.body})
      });
    this.getTransactions()
  },
  handleSubmit(stateData) {
    request
      .post('http://jobcoin.projecticeland.net/fish-sticks/api/transactions')
      .send({ fromAddress: this.props.routeParams.addressId, toAddress: stateData.address, amount: stateData.amount})
      .end(function(err, res){
        debugger;
      });
  },
  getTransactions() {
    let that = this;
    request
      .get('http://jobcoin.projecticeland.net/fish-sticks/api/transactions')
      .end(function(err, res){
        that.setState({transactions: res.body})
      });
  },
  render() {

    // var panelTitle
    //   if (this.props.transactionsPanel.length > 0) {
    //     panelTitle = (
    //       <h2>
    //         <i className={this.props.transactionsPanel === "deposit" ? "plus icon" : "minus icon"}></i>
    //         {this.props.transactionsPanel.toUpperCase()}
    //       </h2>
    //     )
    //   }
    var transactions
    if(this.state.data.transactions){
      transactions = (
        <div>
          {this.state.data.transactions.map((transaction)=>{
            return(
              <p key={Math.random()}>Amount: {transaction.amount}</p>
            )
          })}
        </div>
      )
    }
    return (
      <div>
        <p>hi - address page!</p>
        <p>balence = {this.state.data.balance}</p>
        <AddressForm onSubmit={() => this.handleSubmit(this)} />
        { transactions }
      </div>
    )
  }
})

export default Address
