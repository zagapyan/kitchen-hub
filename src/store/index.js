import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';
import { createHashHistory, createBrowserHistory } from 'history';
import { connect } from 'react-redux'

const middleware = applyMiddleware(
  promiseMiddleware(),
  thunk,
  createLogger())

function RunDevToolExtensionIfNotInProduction () {
  const shouldExposeState =
    (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production')
      && window.devToolsExtension

  return (shouldExposeState
    ? window.devToolsExtension()
    : (f) => f)
}

// export const history =  createHashHistory();
export const history =  createBrowserHistory();

export const store = createStore(
    rootReducer,
    compose(middleware,RunDevToolExtensionIfNotInProduction())
  );