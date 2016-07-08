import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import request from 'superagent'
import { setAddressData } from '../actions/address'
import AddressForm from '../components/address-form'
import Transactions from '../components/transactions'

const Address = React.createClass({
  handleSubmit(stateData) {
    let that = this
    request
      .post('http://jobcoin.projecticeland.net/fish-sticks/api/transactions')
      .send({ fromAddress: this.props.address, toAddress: stateData.address, amount: stateData.amount})
      .end(function(err, res){
        that.getTransactions()
      });
  },
  getAddressAjax(address) {
    let that = this
    request
      .get('http://jobcoin.projecticeland.net/fish-sticks/api/addresses/'+address)
      .end(function(err, res){
        debugger;
        that.props.setAddressData(res.body)
      });
  },
  render() {
    const { address, balance, transactions } = this.props
    if(balance === 0){
      debugger;
      this.getAddressAjax(address)
    }
    return (
      <div>
        <p>hi - address page!</p>
        <p>balance = { balance }</p>
        <AddressForm onSubmit={this.handleSubmit.bind(this)} />
        <Transactions transactions={ transactions } />
      </div>
    )
  }
})

const mapStateToProps = (appState) => {
  return {
    address: appState.address.address,
    balance: appState.address.balance,
    transactions: appState.address.transactions
  }
}

export default withRouter(connect(mapStateToProps, {setAddressData})(Address))
