// @flow
import { GET_RECIPES } from '../actions/recipeActions';

export default function recipeReducer(state={}, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {};
    default:
      return state;
  }
}
