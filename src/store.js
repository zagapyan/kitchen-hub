import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { rootReducer } from './reducers';

export const history = createBrowserHistory();

const middleware = applyMiddleware(
  promiseMiddleware(),
  thunk,
  // createLogger()
)

function RunDevToolExtensionIfNotInProduction() {
  const shouldExposeState =
    (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production')
    && window.devToolsExtension

  return (shouldExposeState
    ? window.devToolsExtension()
    : (f) => f)
}

export const store = createStore(
  rootReducer,
  compose(middleware, RunDevToolExtensionIfNotInProduction())
);