import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { configureStore } from './store/configureStore';
import HomeContainer from './containers/HomeContainer';
import NoMatchComponent from './components/NoMatchComponent';

import './App.css';

const store = configureStore();
const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>KitchenHub | Zigmund Sun Oo</title>
          </Helmet>
          <main className="main">
            <Router history={history}>
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route component={NoMatchComponent} />
              </Switch>
            </Router>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
