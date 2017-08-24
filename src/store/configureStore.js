import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as recipeActions from '../actions/recipeActions';
import * as mainViewActions from '../actions/mainViewActions';
import rootReducer from '../reducers';


const initialState = {};

export const configureStore = (initialState)=>{
  const middleware = [];
  const enhancers = [];

  middleware.push(thunk);
  
  const actionCreators = {
    ...recipeActions
  }
  
  const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENTION_COMPOSE__
    ? window.__REDUX__DEVTOOLS_EXTENTION_COMPOSE__({
      actionCreators
    }) : compose;
  
  enhancers.push(applyMiddleware(...middleware))  
  const enhancer = composeEnhancers(...enhancers);

  return createStore(rootReducer, initialState, enhancer)
}