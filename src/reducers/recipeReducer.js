import { FETCH_RECIPES, REQUEST_RECIPES, RECIEVE_RECIPES, REJECTED_FETCH } from '../actions/recipeActions';

const initalState={
  recipes: [],
  timeStamp: ''
}

export default function recipeReducer(state=initalState, action) {
  console.log('recipeReducer');
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
      };
    case REQUEST_RECIPES:
      console.log('REQUEST_RECIPES')
      console.log(action);
      return {
        ...state,
        recipes: action.recipes
      };
    case RECIEVE_RECIPES:
      console.log('RECIEVE_RECIPES');
      console.log(action);
      return{
        ...state,
        timeStamp: action.timeStamp,
        recipes: action.recipes
      }
    case REJECTED_FETCH:
      return{
        ...state,
        err: action.err,
        timeStamp: action.timeStamp
      }
    default:
      console.log('fall through');
      return state;
  }
}
