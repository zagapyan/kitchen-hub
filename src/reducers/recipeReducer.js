import { FETCH_RECIPES, REQUEST_RECIPES, RECIEVE_RECIPES, REJECTED_FETCH, UPDATE_RECIPES } from '../actions/recipeActions';

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
    case UPDATE_RECIPES:
    console.log(action)
      console.log('UPDATE_RECIPES')
      return{
        ...state,
        recipes: action.recipes
      }
    default:
      console.log('fall through');
      return state;
  }
}
