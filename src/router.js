import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/app'
import Login from './containers/login'
import Address from './containers/address'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Login} />
      <Route path="/addresses/:addressId" component={Address} />
    </Route>
  </Router>
);
