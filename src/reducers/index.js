import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import domainReducer from './domainReducer';

const rootReducer = combineReducers({
  clientReducer,
  domainReducer,
});

export default rootReducer;
