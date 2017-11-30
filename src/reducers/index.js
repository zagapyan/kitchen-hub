import { combineReducers } from 'redux';
import domainReducer from './domainReducer';

const rootReducer = combineReducers({
  domainReducer,
});

export default rootReducer;
