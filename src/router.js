import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/app'
import Test from './components/test'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Test} />
    </Route>
  </Router>
);
