import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers'
import router from './router';
const store = createStore(reducers)
import './style.less'

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);
