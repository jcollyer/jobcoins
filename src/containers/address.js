import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import request from 'superagent'
import { setAddressData } from '../actions/address'
import SendForm from '../components/send-form'
import Transactions from '../components/transactions'
import AddressBalance from '../components/address-balance'


const Address = React.createClass({
  handleSubmit(stateData) {
    let that = this
    request
      .post('http://jobcoin.projecticeland.net/fish-sticks/api/transactions')
      .send({ fromAddress: this.props.address, toAddress: stateData.address, amount: stateData.amount})
      .end(function(err, res){
        that.getAddressAjax(that.props.address)
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
  componentWillMount(){
    this.getAddressAjax(this.props.address)
  },
  render() {
    const { address, balance, transactions, equalizer } = this.props

    return (
      <div>
        <div id="address-header">
          <div id="logo" onClick={() => this.goHome()}>Job</div>
          <button onClick={() => this.goHome()}>Logout</button>
        </div>
        <div id="side-bar">
          <AddressBalance balance={balance} />
          <SendForm onSubmit={this.handleSubmit.bind(this)} />
        </div>
        <Transactions transactions={ transactions } equalizer={equalizer} address={address} />
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
