import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { createBrowserHistory } from 'history';
import rootReducer from '../reducers';

const enhancer = applyMiddleware();

export const configureStore = (initialState)=>{
    return createStore(rootReducer, initialState, enhancer)
}