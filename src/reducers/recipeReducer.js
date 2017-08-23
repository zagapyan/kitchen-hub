// @flow
import { GET_RECIPES, RECIEVE_RECIPES, REJECTED_FETCH } from '../actions/recipeActions';

const initalState={
  recipes: [],
  timeStamp: ''
}

export default function recipeReducer(state={...initalState}, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state
      };
    case RECIEVE_RECIPES:
      console.log(state);
      console.log(action);
      return{
        ...state,
        recipes: action.recipes,
        timeStamp: action.timeStamp
      }
    case REJECTED_FETCH:
      return{
        ...state,
        err: action.err
      }
    default:
      return state;
  }
}
