import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from "./store";
import './index.scss';
import App from './App';
import { mapStateViewToProps } from "./actionCreators";


const ConnectedApp = connect(mapStateViewToProps, null)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
