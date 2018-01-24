import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux'
import { store, history } from './store';
import Routes from './components/Routes'
import 'bulma/css/bulma.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Helmet>
              <meta charSet="utf-8" />
              <title>KitchenHub</title>
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