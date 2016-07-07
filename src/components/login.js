import React, { Component } from 'react'
import LoginForm from './login-form'
import request from 'superagent'

export default class Login extends Component {
  handleSubmit(stateData) {
    request
      .get('http://jobcoin.projecticeland.net/fish-sticks/api/addresses/'+stateData.address)
      // .send({ name: 'Manny', species: 'cat' })
      // .set('X-API-Key', 'foobar')
      // .set('Accept', 'application/json')
      .end(function(err, res){
        // Calling the end function will send the request
        debugger;
      });
  }
  render() {
    return (
      <div id="login">
        <LoginForm onSubmit={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}
