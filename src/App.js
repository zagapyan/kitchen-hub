import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="main">
          <img src={logo} />
          <Router>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
