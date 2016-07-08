import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/app'
import Home from './pages/home'
import Detail from './pages/detail'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/addresses/:addressId" component={Detail} />
    </Route>
  </Router>
);
