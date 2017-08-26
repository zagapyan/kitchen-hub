import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import mainViewReducer from './mainViewReducer';

const rootReducer = combineReducers({
  recipeReducer,
});

export default rootReducer;
