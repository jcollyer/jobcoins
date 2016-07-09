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
        // that.getAddressAjax(this.props.address)
      });
  },
  getAddressAjax(address) {
    let that = this
    request
      .get('http://jobcoin.projecticeland.net/fish-sticks/api/addresses/'+address)
      .end(function(err, res){
        that.props.setAddressData(res.body)
      });
  },
  goHome() {
    this.props.router.goBack();
  },
  render() {
    const { address, balance, transactions, equalizer } = this.props
    if (balance === 0) this.getAddressAjax(address)

    return (
      <div>
        <p>hi - address page!</p>
        <button onClick={() => this.goHome()}>Home</button>
        <button onClick={() => this.goHome()}>Logout</button>
        <p>balance = { balance }</p>
        <AddressForm onSubmit={this.handleSubmit.bind(this)} />
        <Transactions transactions={ transactions } equalizer={equalizer} />
      </div>
    )
  }
})

const mapStateToProps = (appState) => {
  return {
    address: window.location.href.split("/").slice(-1)[0].split("?")[0] || "",
    balance: appState.address.balance,
    transactions: appState.address.transactions,
    equalizer: appState.address.equalizer
  }
}

export default withRouter(connect(mapStateToProps, {setAddressData})(Address))
