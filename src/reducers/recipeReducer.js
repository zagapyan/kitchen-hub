// @flow
import { GET_RECIPES, RECIEVE_RECIPES, REJECTED_FETCH } from '../actions/recipeActions';

export default function recipeReducer(state={}, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        isFetching: action.isFetching,
        recievedData: action.recievedData,
        data: action.data
      };
    case RECIEVE_RECIPES:
      return{
        isFetching: action.isFetching,
        recievedData: action.recievedData
      }
    case REJECTED_FETCH:
      return{
        isFetching: action.isFetching,
        recievedData: action.recievedData
      }
    default:
      return state;
  }
}
