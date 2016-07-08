import React, { Component } from 'react'
import request from 'superagent'
import AddressForm from './address-form'
import Transactions from './transactions'

const Address = React.createClass({
  getInitialState() {
    return {data: {balence: 0}, transactions: [0]}
  },
  componentWillMount() {
    let that = this
    request
      .get('http://jobcoin.projecticeland.net/fish-sticks/api/addresses/'+this.props.routeParams.addressId)
      .end(function(err, res){
        that.setState({data: res.body})
      });
    this.getTransactions()
  },
  handleSubmit(stateData) {
    let that = this
    request
      .post('http://jobcoin.projecticeland.net/fish-sticks/api/transactions')
      .send({ fromAddress: this.props.routeParams.addressId, toAddress: stateData.address, amount: stateData.amount})
      .end(function(err, res){
        that.getTransactions()
      });
  },
  getTransactions() {
    let that = this
    request
      .get('http://jobcoin.projecticeland.net/fish-sticks/api/transactions')
      .end(function(err, res){
        that.setState({transactions: res.body})
      });
  },
  render() {
    return (
      <div>
        <p>hi - address page!</p>
        <p>balence = {this.state.data.balance}</p>
        <AddressForm onSubmit={() => this.handleSubmit(this)} />
        <Transactions transactions={this.state.transactions} />
      </div>
    )
  }
})

export default Address
