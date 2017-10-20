import React, { Component, Children } from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import {Router, Route, Link, Switch } from 'react-router-dom';
import { configureStore } from './store/configureStore';
import Routes from './Routes';

import './App.css';
const history = createHashHistory();
const store = configureStore();

class App extends Component {
  props: {
    children: Children
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>KitchenHub | Zigmund Sun Oo</title>
          </Helmet>
          <Router history={history}>
            <Routes />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
