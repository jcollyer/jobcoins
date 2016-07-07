import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/app'
import Login from './components/login'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Login} />
    </Route>
  </Router>
);
